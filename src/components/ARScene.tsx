import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { ARButton } from 'three/examples/jsm/webxr/ARButton.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { createWalls } from './Walls';
import { floors } from '../data/floorRegistry';
import type { FloorData } from '../data/floorTypes';
import type { PathSegment } from '../utils/multiFloorPathfinding';

interface ArrowElement {
  group: THREE.Group;
  geo: THREE.ExtrudeGeometry;
  mat: THREE.MeshStandardMaterial;
}

interface ARSceneProps {
  floorData: FloorData;
  activeSegment: PathSegment | null;
  pathSegments: PathSegment[];
  startRoomId: string | null;
  endRoomId: string | null;
  onSessionStateChange?: (active: boolean) => void;
  showARButton: boolean;
  showUIView: boolean;
}

export default function ARScene({ 
  floorData, 
  activeSegment, 
  pathSegments, 
  startRoomId, 
  endRoomId, 
  onSessionStateChange, 
  showARButton, 
  showUIView 
}: ARSceneProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const floorPlanGroupRef = useRef<THREE.Group | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  const spheresRef = useRef<ArrowElement[]>([]);
  const startPulseRef = useRef<THREE.Mesh | null>(null);
  const destinationBeaconRef = useRef<THREE.Group | null>(null);
  const lineRef = useRef<THREE.Line | null>(null);
  const animationIndexRef = useRef(0);
  const curvePointsGlobalRef = useRef<THREE.Vector3[]>([]);
  const pathCurveRef = useRef<THREE.CatmullRomCurve3 | null>(null);
  const arButtonRef = useRef<HTMLElement | null>(null);
  const wallGroupRef = useRef<THREE.Group | null>(null);
  const floorRef = useRef<THREE.Mesh | null>(null);
  
  // Refs for values used in the animation loop to avoid stale closures and crashes
  const endRoomIdRef = useRef(endRoomId);
  const activeSegmentRef = useRef(activeSegment);
  const pathSegmentsRef = useRef(pathSegments);
  const isCalibratedRef = useRef(false);
  const lastStateUpdateRef = useRef(0);
  
  const [isFarView, setIsFarView] = useState(false);
  const [isScanning, setIsScanning] = useState(false);
  const [isCalibrated, setIsCalibrated] = useState(false);
  const [activeMarkerInfo, setActiveMarkerInfo] = useState<{ label: string; floorId: string } | null>(null);
  const [distanceToDest, setDistanceToDest] = useState<number | null>(null);
  const [totalDistanceRemaining, setTotalDistanceRemaining] = useState<number | null>(null);
  const [nextInstruction, setNextInstruction] = useState<string>('');
  const [hasArrived, setHasArrived] = useState(false);
  const [arrowHeight, setArrowHeight] = useState(0.3);

  // Sync refs with props
  useEffect(() => { activeSegmentRef.current = activeSegment; }, [activeSegment]);
  useEffect(() => { pathSegmentsRef.current = pathSegments; }, [pathSegments]);
  useEffect(() => { isCalibratedRef.current = isCalibrated; }, [isCalibrated]);
  useEffect(() => { endRoomIdRef.current = endRoomId; }, [endRoomId]);

  // Update existing arrows when height changes
  useEffect(() => {
    spheresRef.current.forEach(arrow => {
      if (arrow.group) {
        arrow.group.position.y = arrowHeight;
        arrow.group.userData.baseY = arrowHeight;
      }
    });
  }, [arrowHeight]);

  const tryCalibrate = () => {
    if (floorPlanGroupRef.current && cameraRef.current) {
      const group = floorPlanGroupRef.current;
      const cam = cameraRef.current;
      const currentFloorMarker = floors.find(f => f.id === floorData.floorId)?.marker;
      if (!currentFloorMarker) return;

      group.position.set(cam.position.x, 0, cam.position.z);
      group.rotation.set(0, cam.rotation.y, 0);
      group.translateX(-currentFloorMarker.position.x);
      group.translateZ(-currentFloorMarker.position.z);
      
      setActiveMarkerInfo({ label: floorData.floorName, floorId: floorData.floorId });
      setIsCalibrated(true);
      setIsScanning(false);
      if (navigator.vibrate) navigator.vibrate(200);
    }
  };

  useEffect(() => {
    if (cameraRef.current && controlsRef.current) {
      const targetY = isFarView ? 70 : 38;
      cameraRef.current.position.y = targetY;
      controlsRef.current.update();
    }
  }, [isFarView]);

  // Handle floor and path data changes
  useEffect(() => {
    if (!floorPlanGroupRef.current) return;

    // --- Cleanup Phase ---
    const group = floorPlanGroupRef.current;
    
    if (wallGroupRef.current) {
      group.remove(wallGroupRef.current);
      wallGroupRef.current.traverse(child => {
        if ((child as THREE.Mesh).isMesh) {
          (child as THREE.Mesh).geometry.dispose();
          const m = (child as THREE.Mesh).material;
          if (Array.isArray(m)) m.forEach(x => x.dispose()); else m.dispose();
        }
      });
      wallGroupRef.current = null;
    }

    if (spheresRef.current.length > 0) {
      const first = spheresRef.current[0];
      if (first.geo) first.geo.dispose();
      spheresRef.current.forEach(e => {
        group.remove(e.group);
        if (e.mat) e.mat.dispose();
      });
      spheresRef.current = [];
    }

    if (floorRef.current) {
      group.remove(floorRef.current);
      floorRef.current.geometry.dispose();
      if (floorRef.current.material) (floorRef.current.material as THREE.Material).dispose();
      floorRef.current = null;
    }

    // --- Rebuild Phase ---
    try {
      const { wallGroup } = createWalls(floorData);
      group.add(wallGroup);
      wallGroupRef.current = wallGroup;

      drawFloor(group, wallGroup);

      if (activeSegment) {
        drawPath(activeSegment, group);
      }
    } catch (err) {
      console.error("Error rebuilding scene:", err);
    }
  }, [floorData, activeSegment]);

  useEffect(() => {
    const currentContainer = containerRef.current;
    if (!currentContainer) return;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0a0a0f);
    sceneRef.current = scene;

    const floorPlanGroup = new THREE.Group();
    floorPlanGroupRef.current = floorPlanGroup;
    scene.add(floorPlanGroup);

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 40, 0);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.xr.enabled = true;
    currentContainer.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    const controls = new OrbitControls(camera, renderer.domElement);
    controlsRef.current = controls;

    scene.add(new THREE.AmbientLight(0xffffff, 0.5));
    const dl = new THREE.DirectionalLight(0xffffff, 1);
    dl.position.set(10, 20, 10);
    scene.add(dl);

    const animate = () => {
      const isPresenting = renderer.xr.isPresenting;
      scene.background = isPresenting ? null : new THREE.Color(0x0a0a0f);
      controls.update();

      const calibrated = isCalibratedRef.current;
      const curActiveSegment = activeSegmentRef.current;
      const curPathSegments = pathSegmentsRef.current;

      // Real-time HUD and proximity updates
      if (isPresenting && calibrated && curActiveSegment && curActiveSegment.positions.length > 0) {
        const userPos = new THREE.Vector3();
        camera.getWorldPosition(userPos);
        const lastPt = curActiveSegment.positions[curActiveSegment.positions.length - 1];
        const destPos = new THREE.Vector3(lastPt[0], 0, lastPt[1]);
        if (floorPlanGroupRef.current) destPos.applyMatrix4(floorPlanGroupRef.current.matrixWorld);
        
        const distCurrent = userPos.distanceTo(destPos);
        const now = performance.now();

        if (now - lastStateUpdateRef.current > 100) {
          setDistanceToDest(distCurrent);
          
          let subseq = 0;
          const fIdx = curPathSegments.findIndex(s => s.floorId === floorData.floorId);
          if (fIdx !== -1) {
            for (let i = fIdx + 1; i < curPathSegments.length; i++) {
              const seg = curPathSegments[i];
              if (seg.positions) {
                for (let j = 1; j < seg.positions.length; j++) {
                  const p1 = seg.positions[j-1], p2 = seg.positions[j];
                  if (p1 && p2) subseq += Math.sqrt(Math.pow(p2[0]-p1[0],2)+Math.pow(p2[1]-p1[1],2));
                }
              }
              subseq += 5; // Transition penalty
            }
          }
          setTotalDistanceRemaining(distCurrent + subseq);
          
          if (fIdx === curPathSegments.length - 1 && (distCurrent + subseq) < 1.5 && !hasArrived) {
            setHasArrived(true); setNextInstruction("You have arrived!");
          } else if ((distCurrent + subseq) >= 1.5) {
            setHasArrived(false);
            setNextInstruction(curActiveSegment.transition ? `Take ${curActiveSegment.transition.name}` : `Follow arrows`);
          }
          lastStateUpdateRef.current = now;
        }
      }

      // Animate arrows
      const time = performance.now() * 0.001;
      const uPos = new THREE.Vector3();
      camera.getWorldPosition(uPos);

      spheresRef.current.forEach((entry, i) => {
        const { group, mat } = entry;
        const aPos = new THREE.Vector3();
        group.getWorldPosition(aPos);
        const d = uPos.distanceTo(aPos);
        const isNear = d < 8;
        group.visible = isNear;
        if (isNear) {
          mat.opacity = THREE.MathUtils.clamp(THREE.MathUtils.lerp(1, 0, (d-2)/6), 0, 1);
          const s = THREE.MathUtils.clamp(THREE.MathUtils.lerp(1, 0.1, (d-2)/6), 0.1, 1);
          group.scale.setScalar(s);
          if (group.userData.baseY !== undefined) group.position.y = group.userData.baseY + Math.sin(time*2 + i*0.4)*0.04;
          mat.emissiveIntensity = 1.8 + Math.sin(time*3 + i)*0.7;
        }
      });

      if (startPulseRef.current) {
        startPulseRef.current.rotation.y += 0.02;
        startPulseRef.current.position.y = 0.6 + Math.sin(time*3)*0.05;
      }
      if (destinationBeaconRef.current) {
        const label = destinationBeaconRef.current.children.find(c => c.userData.isDestinationLabel);
        if (label) {
          label.lookAt(camera.position);
          label.position.y = 1.2 + Math.sin(time*2.5)*0.1;
        }
      }

      renderer.render(scene, camera);
    };

    renderer.setAnimationLoop(animate);

    return () => {
      renderer.setAnimationLoop(null);
      renderer.dispose();
      controls.dispose();
      if (currentContainer && renderer.domElement) currentContainer.removeChild(renderer.domElement);
    };
  }, []);

  const drawFloor = (group: THREE.Group, walls: THREE.Group) => {
    const box = new THREE.Box3().setFromObject(walls);
    const size = new THREE.Vector3(), center = new THREE.Vector3();
    box.getSize(size); box.getCenter(center);
    
    const floorGeo = new THREE.PlaneGeometry(size.x + 10, size.z + 10);
    const floorMat = new THREE.MeshStandardMaterial({ color: 0x08080a });
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.rotation.x = -Math.PI / 2;
    floor.position.set(center.x, 0, center.z);
    group.add(floor);
    floorRef.current = floor;

    if (cameraRef.current && controlsRef.current) {
      cameraRef.current.position.set(center.x, isFarView ? 70 : 38, center.z + 0.1);
      controlsRef.current.target.copy(center);
      controlsRef.current.update();
    }
  };

  const drawPath = (segment: PathSegment | null, group: THREE.Group) => {
    // 1. Cleanup old path
    if (spheresRef.current.length > 0) {
      spheresRef.current[0].geo.dispose();
      spheresRef.current.forEach(e => { group.remove(e.group); if (e.mat) e.mat.dispose(); });
      spheresRef.current = [];
    }
    if (startPulseRef.current) { group.remove(startPulseRef.current); startPulseRef.current.geometry.dispose(); (startPulseRef.current.material as THREE.Material).dispose(); startPulseRef.current = null; }
    if (destinationBeaconRef.current) { group.remove(destinationBeaconRef.current); destinationBeaconRef.current = null; }

    if (!segment || !segment.positions || segment.positions.length < 2) return;

    // 2. Build points
    const pts = segment.positions.map(p => new THREE.Vector3(p[0], 0.12, p[1]));
    
    // Position destination marker at door gap
    const destRoom = endRoomIdRef.current ? floorData.rooms.find(r => r.id === endRoomIdRef.current) : null;
    let doorPos = pts[pts.length - 1].clone();
    if (destRoom) {
      const roomCenter = new THREE.Vector3(destRoom.center[0], 0.12, destRoom.center[1]);
      const dir = new THREE.Vector3().subVectors(roomCenter, doorPos).normalize();
      doorPos.add(dir.multiplyScalar(0.55));
      pts[pts.length - 1].copy(doorPos);
    }

    // 3. Start Marker
    const sGeo = new THREE.OctahedronGeometry(0.25, 0);
    const sMat = new THREE.MeshStandardMaterial({ color: 0x10b981, emissive: 0x10b981, emissiveIntensity: 2 });
    const sMarker = new THREE.Mesh(sGeo, sMat);
    sMarker.position.copy(pts[0]).setY(0.6);
    group.add(sMarker);
    startPulseRef.current = sMarker;

    // 4. Destination Marker
    const dGroup = new THREE.Group();
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (ctx && destRoom) {
      canvas.width = 512; canvas.height = 128;
      ctx.fillStyle = 'rgba(15,15,25,0.9)'; ctx.fillRect(0,0,512,128);
      ctx.strokeStyle = '#facc15'; ctx.lineWidth = 8; ctx.strokeRect(0,0,512,128);
      ctx.font = 'bold 60px Arial'; ctx.textAlign = 'center'; ctx.fillStyle = 'white';
      ctx.fillText(destRoom.name, 256, 80);
      const tex = new THREE.CanvasTexture(canvas);
      const label = new THREE.Mesh(new THREE.PlaneGeometry(2.5, 0.6), new THREE.MeshBasicMaterial({ map: tex, transparent: true }));
      label.position.y = 1.2; label.userData.isDestinationLabel = true;
      dGroup.add(label);
    }
    const ring = new THREE.Mesh(new THREE.TorusGeometry(0.6, 0.05, 16, 48), new THREE.MeshStandardMaterial({ color: 0xfacc15 }));
    ring.rotation.x = -Math.PI / 2; dGroup.add(ring);
    dGroup.position.copy(doorPos);
    group.add(dGroup);
    destinationBeaconRef.current = dGroup;

    // 5. Arrows
    const curve = new THREE.CatmullRomCurve3(pts);
    const curvePts = curve.getPoints(300);
    const cShape = new THREE.Shape();
    cShape.moveTo(-0.15,-0.05); cShape.lineTo(0,0.15); cShape.lineTo(0.15,-0.05);
    cShape.lineTo(0.15,0.05); cShape.lineTo(0,0.25); cShape.lineTo(-0.15,0.05); cShape.closePath();
    const cGeo = new THREE.ExtrudeGeometry(cShape, { depth: 0.04, bevelEnabled: false });
    const colors = [0xa78bfa, 0x3b82f6, 0x06b6d4, 0x10b981, 0xfacc15, 0xf97316, 0xef4444];
    const isToGround = segment.transition?.toFloor === 'f1';

    for (let i = 0; i < curvePts.length; i += 20) {
      const p = curvePts[i];
      const tangent = curve.getTangent(i/(curvePts.length-1)).normalize();
      const col = (isToGround && i > curvePts.length-60) ? 0xfacc15 : colors[Math.floor(i/20)%colors.length];
      const mat = new THREE.MeshStandardMaterial({ color: col, emissive: col, emissiveIntensity: 3, transparent: true, opacity: 0 });
      const mesh = new THREE.Mesh(cGeo, mat);
      mesh.rotation.x = -Math.PI / 2;
      mesh.rotation.y = Math.PI; // Flip 180 degrees
      
      const g = new THREE.Group();
      g.position.copy(p).setY(arrowHeight);
      g.lookAt(p.clone().add(tangent));
      g.add(mesh);
      g.userData.baseY = arrowHeight;
      group.add(g);
      spheresRef.current.push({ group: g, geo: cGeo, mat });
    }
  };

  return (
    <>
      <div ref={containerRef} className="fixed inset-0 z-0" />
      {isScanning && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40">
          <div className="bg-slate-900 p-8 rounded-3xl border border-purple-500/50 text-center max-w-xs">
            <h2 className="text-xl font-bold text-white mb-4">Aligning World</h2>
            <p className="text-sm text-purple-200 mb-6">Point at the {floors.find(f => f.id === floorData.floorId)?.label} Marker.</p>
            <button onClick={tryCalibrate} className="w-full py-3 bg-purple-600 text-white font-bold rounded-xl mb-2">Align Now</button>
            <button onClick={() => setIsScanning(false)} className="w-full py-2 bg-slate-800 text-slate-300 rounded-xl text-xs">Skip</button>
          </div>
        </div>
      )}
      {isCalibrated && totalDistanceRemaining !== null && (
        <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-sm bg-slate-900/80 backdrop-blur-xl p-4 rounded-3xl border border-white/10 text-white shadow-2xl">
          <div className="flex justify-between items-baseline mb-1">
            <span className="text-2xl font-black">{totalDistanceRemaining < 1.5 ? 'Arrived' : `${Math.round(totalDistanceRemaining)}m`}</span>
            <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Total Distance</span>
          </div>
          <p className="text-sm text-purple-300 font-medium">{nextInstruction} • {Math.ceil(totalDistanceRemaining / 1.2 / 60)} min</p>
        </div>
      )}
      {showUIView && (
        <>
          <button onClick={() => setIsFarView(!isFarView)} className="fixed top-20 left-6 z-20 bg-white/95 p-3 rounded-full shadow-lg text-slate-800">
            {isFarView ? 'Default View' : 'Far View'}
          </button>
          <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 bg-slate-900/80 p-4 rounded-3xl border border-white/10 flex flex-col items-center gap-3">
            <span className="text-[10px] text-white font-bold uppercase vertical-text">Height</span>
            <input type="range" min="0.05" max="2.0" step="0.05" value={arrowHeight} onChange={e => setArrowHeight(parseFloat(e.target.value))} className="h-40 w-1 accent-purple-500" style={{ WebkitAppearance: 'slider-vertical' } as any} />
            <span className="text-xs text-purple-400 font-black">{arrowHeight.toFixed(2)}m</span>
          </div>
        </>
      )}
    </>
  );
}
