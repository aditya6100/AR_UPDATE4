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
  geo: THREE.CylinderGeometry;
  mat: THREE.MeshStandardMaterial;
}

interface ARSceneProps {
  floorData: FloorData;
  activeSegment: PathSegment | null;
  pathSegments: PathSegment[]; // 👈 Added
  startRoomId: string | null;
  endRoomId: string | null;
  onSessionStateChange?: (active: boolean) => void;
  showARButton: boolean;
  showUIView: boolean;
}

export default function ARScene({ floorData, activeSegment, pathSegments, startRoomId, endRoomId, onSessionStateChange, showARButton, showUIView }: ARSceneProps) {
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
  const floorMaterialRef = useRef<THREE.MeshStandardMaterial | null>(null);
  const labelsGroupRef = useRef<THREE.Group | null>(null);
  const floorMessagesGroupRef = useRef<THREE.Group | null>(null);
  const floorRef = useRef<THREE.Mesh | null>(null);
  const startRoomRef  = useRef(startRoomId);
  const endRoomIdRef  = useRef(endRoomId);
  
  const [isFarView, setIsFarView] = useState(false);
  const [isScanning, setIsScanning] = useState(false);
  const [isCalibrated, setIsCalibrated] = useState(false);
  const [activeMarkerInfo, setActiveMarkerInfo] = useState<{ label: string; floorId: string } | null>(null);
  const [distanceToDest, setDistanceToDest] = useState<number | null>(null);
  const [totalDistanceRemaining, setTotalDistanceRemaining] = useState<number | null>(null);
  const [nextInstruction, setNextInstruction] = useState<string>('');
  const [hasArrived, setHasArrived] = useState(false);
  const [arrowHeight, setArrowHeight] = useState(0.3); // 👈 Height adjuster state

  // Update existing arrows when height changes
  useEffect(() => {
    spheresRef.current.forEach(arrow => {
      arrow.group.position.y = arrowHeight;
      arrow.group.userData.baseY = arrowHeight;
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
    console.log("isFarView changed:", isFarView);
    if (cameraRef.current && controlsRef.current) {
      const targetY = isFarView ? 70 : 38;
      cameraRef.current.position.y = targetY;
      controlsRef.current.update();
    }
  }, [isFarView]);

  useEffect(() => {
    startRoomRef.current = startRoomId ?? '';
    endRoomIdRef.current  = endRoomId  ?? '';
  }, [startRoomId, endRoomId]);

  // When floorData prop changes (user switches floor): rebuild walls + labels
  useEffect(() => {
    if (!floorPlanGroupRef.current) return;

    // Clear old walls
    if (wallGroupRef.current) {
      floorPlanGroupRef.current.remove(wallGroupRef.current);
      wallGroupRef.current.traverse(child => {
        if ((child as THREE.Mesh).isMesh) {
          (child as THREE.Mesh).geometry.dispose();
          ((child as THREE.Mesh).material as THREE.Material).dispose();
        }
      });
    }
    // Clear old labels
    if (labelsGroupRef.current) {
      floorPlanGroupRef.current.remove(labelsGroupRef.current);
      labelsGroupRef.current.traverse(child => {
        if ((child as THREE.Mesh).isMesh) {
          (child as THREE.Mesh).geometry.dispose();
          ((child as THREE.Mesh).material as THREE.Material).dispose();
        }
      });
    }
    // Clear old floor messages
    if (floorMessagesGroupRef.current) {
      floorPlanGroupRef.current.remove(floorMessagesGroupRef.current);
      floorMessagesGroupRef.current.traverse(child => {
        if ((child as THREE.Mesh).isMesh) {
          (child as THREE.Mesh).geometry.dispose();
          ((child as THREE.Mesh).material as THREE.Material).dispose();
        }
      });
    }
    // Clear path arrows
    spheresRef.current.forEach(e => {
      floorPlanGroupRef.current!.remove(e.group);
      e.geo.dispose();
    });
    spheresRef.current = [];
    animationIndexRef.current = 0;
    curvePointsGlobalRef.current = [];
    pathCurveRef.current = null;

    // Rebuild for new floor
    const { wallGroup } = createWalls(floorData);
    floorPlanGroupRef.current.add(wallGroup);
    wallGroupRef.current = wallGroup;

    const newLabels = new THREE.Group();
    labelsGroupRef.current = newLabels;
    floorPlanGroupRef.current.add(newLabels);
    drawRoomLabels(newLabels);

    const newMessages = new THREE.Group();
    floorMessagesGroupRef.current = newMessages;
    floorPlanGroupRef.current.add(newMessages);
    drawFloorMessages(newMessages);

    // Redraw floor plane
    if (floorRef.current) {
      floorPlanGroupRef.current.remove(floorRef.current);
    }
    drawFloor(floorPlanGroupRef.current, wallGroup);

    // Redraw path if applicable (clears if activeSegment is null)
    if (floorPlanGroupRef.current && activeSegment) {
      drawPath(activeSegment, floorPlanGroupRef.current);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [floorData, activeSegment]);

  useEffect(() => {
    const currentContainer = containerRef.current;
    if (!currentContainer) return;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0a0a0f);
    scene.fog = new THREE.Fog(0x0f0f1e, 10, 60);
    sceneRef.current = scene;

    const floorPlanGroup = new THREE.Group();
    floorPlanGroupRef.current = floorPlanGroup;
    scene.add(floorPlanGroup);

    const labelsGroup = new THREE.Group();
    labelsGroupRef.current = labelsGroup;
    floorPlanGroup.add(labelsGroup);

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 10, 50);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    // Required for AR: transparent background so camera feed shows through
    renderer.setClearColor(0x000000, 0);
    containerRef.current.appendChild(renderer.domElement);
    renderer.xr.enabled = true;
    rendererRef.current = renderer;

    // --- ASYNC AR BUTTON INITIALIZATION ---
    const setupARButton = async () => {
      const sessionInit: Record<string, unknown> = {
        requiredFeatures: ['hit-test'], 
        optionalFeatures: ['dom-overlay', 'dom-overlay-for-handheld-ar', 'image-tracking'],
        domOverlay: { root: document.body },
      };

      const trackedImages: Record<string, unknown>[] = [];
      const baseUrl = window.location.href.split('?')[0].split('#')[0];
      const getAbsUrl = (path: string) => baseUrl.endsWith('/') ? baseUrl + path : baseUrl.substring(0, baseUrl.lastIndexOf('/') + 1) + path;

      // Load markers for all floors
      for (const floor of floors) {
        if (floor.marker) {
          try {
            const img = new Image();
            img.src = getAbsUrl(floor.marker.image);
            await img.decode();
            const bitmap = await createImageBitmap(img);
            trackedImages.push({
              image: bitmap,
              widthInMeters: 0.2
            });
            console.log(`AR: Loaded marker for ${floor.label}`);
          } catch (e) {
            console.warn(`AR: Failed to load marker for ${floor.label}`, e);
          }
        }
      }

      if (trackedImages.length > 0) {
        sessionInit.trackedImages = trackedImages;
      }

      const arButton = ARButton.createButton(renderer, sessionInit);
      arButtonRef.current = arButton;
      containerRef.current?.appendChild(arButton);
    };
    setupARButton();

    // --- NEW LIGHTING SETUP ---
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
    directionalLight.position.set(10, 20, 10);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 2048;
    directionalLight.shadow.mapSize.height = 2048;
    directionalLight.shadow.camera.left = -50;
    directionalLight.shadow.camera.right = 50;
    directionalLight.shadow.camera.top = 50;
    directionalLight.shadow.camera.bottom = -20;
    
    scene.add(directionalLight);

    const accentLight1 = new THREE.PointLight(0xa78bfa, 0.5);
    accentLight1.position.set(-10, 10, -10);
    accentLight1.castShadow = true;
    scene.add(accentLight1);

    const accentLight2 = new THREE.PointLight(0xC792EA, 0.5); // Changed to light purple
    accentLight2.position.set(10, 10, 10);
    accentLight2.castShadow = true;
    scene.add(accentLight2);
    // --- END NEW LIGHTING SETUP ---

    const controls = new OrbitControls(camera, renderer.domElement);
    controlsRef.current = controls;

    // --- NEW WALL RENDERING (active floor) ---
    // floorData comes from props
    const { wallGroup } = createWalls(floorData);
    floorPlanGroup.add(wallGroup);
    wallGroupRef.current = wallGroup;

    renderer.xr.addEventListener('sessionstart', () => {
      if (onSessionStateChange) onSessionStateChange(true);
      if (sceneRef.current) sceneRef.current.background = null; // 👈 ESSENTIAL: Make background transparent for camera
      setIsScanning(true);
      setIsCalibrated(false);

      const group = floorPlanGroupRef.current;
      if (!group) return;

      // ── Scale the floor plan group to real-world metres ────────────────
      // Set to 1.0 for 1:1 scale (we will align via marker).
      const AR_SCALE = 1.0;
      group.scale.set(AR_SCALE, AR_SCALE, AR_SCALE);

      // ── Position & Rotation: Align path to start in front of user ──────
      if (activeSegment && activeSegment.positions.length >= 2) {
        const p1 = activeSegment.positions[0];
        const p2 = activeSegment.positions[1];

        // 1. Calculate the angle of the first path segment
        const dx = p2[0] - p1[0];
        const dz = p2[1] - p1[1];
        const pathAngle = Math.atan2(dx, dz);

        // 2. Rotation: Using the current 'perfect' baseline
        group.rotation.set(0, -pathAngle, 0);

        // 3. Position: Place first waypoint (p1) exactly at user's feet (origin)
        const p1Vec = new THREE.Vector3(p1[0], 0, p1[1]).multiplyScalar(AR_SCALE);
        p1Vec.applyAxisAngle(new THREE.Vector3(0, 1, 0), group.rotation.y);
        
        group.position.set(-p1Vec.x, 0, -p1Vec.z);
      } else {
        // Fallback if no path: place start room at origin
        const startRoomObj = floorData.rooms.find(r => r.id === startRoomRef.current);
        if (startRoomObj?.connectedTo?.[0]) {
          const startWp = floorData.waypoints.find(w => w.id === startRoomObj.connectedTo[0]);
          if (startWp) {
            group.position.set(-startWp.position[0] * AR_SCALE, 0, -startWp.position[1] * AR_SCALE);
          }
        }
      }

      // ── Hide walls, floor, labels (show only arrows in AR) ─────────────
      if (labelsGroupRef.current) labelsGroupRef.current.visible = false;
      if (floorMessagesGroupRef.current) floorMessagesGroupRef.current.visible = false;
      if (floorRef.current)       floorRef.current.visible       = false;

      if (wallGroupRef.current) {
        wallGroupRef.current.visible = false;
      }

      // ── Make arrows larger & brighter for AR ───────────────────────────
      // Rebuild arrows at AR scale if path already exists
      if (activeSegment && floorPlanGroupRef.current) {
        drawPath(activeSegment, floorPlanGroupRef.current);
      }

      // Ensure all arrows are visible
      spheresRef.current.forEach(arrow => {
        arrow.group.visible = true;
      });
      if (lineRef.current) lineRef.current.visible = false;
    });

    renderer.xr.addEventListener('sessionend', () => {
      if (onSessionStateChange) onSessionStateChange(false);
      if (sceneRef.current) sceneRef.current.background = new THREE.Color(0x0a0a0f); // 👈 Restore background
      
      const group = floorPlanGroupRef.current;
      if (!group) return;

      // ── Restore 3D view scale and position ─────────────────────────────
      group.scale.set(1, 1, 1);
      group.position.set(0, 0, 0);
      group.rotation.set(0, 0, 0);

      // ── Restore visibility ─────────────────────────────────────────────
      if (labelsGroupRef.current) labelsGroupRef.current.visible = true;
      if (floorRef.current)       floorRef.current.visible       = true;
      if (wallGroupRef.current)   wallGroupRef.current.visible   = true;
      if (lineRef.current)        lineRef.current.visible        = false;

      // Rebuild arrows at 3D scale
      if (activeSegment && group) {
        drawPath(activeSegment, group);
      }
    });

    drawFloor(floorPlanGroup, wallGroup);
    drawRoomLabels(labelsGroup);

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    const animate = () => {
        const isPresenting = renderer.xr.isPresenting;
        
        // 1. CRITICAL: Guarantee camera feed is visible in AR
        if (isPresenting) {
          scene.background = null;
        } else {
          scene.background = new THREE.Color(0x0a0a0f);
        }

        controls.update();

        // 2. IMAGE TRACKING ALIGNMENT
        const session = renderer.xr.getSession();
        const frame = renderer.xr.getFrame();
        if (session && frame && isScanning && !isCalibrated && floorPlanGroupRef.current) {
          try {
            // @ts-expect-error - WebXR Image Tracking API may not be fully typed
            const results = frame.getImageTrackingResults?.() || [];
            for (const result of results) {
              if (result.trackingState === 'tracked' || result.trackingState === 'emulated') {
                const markerIndex = result.index;
                const markerFloors = floors.filter(f => f.marker);
                const floorFound = markerFloors[markerIndex];

                if (floorFound && floorFound.marker) {
                  const referenceSpace = renderer.xr.getReferenceSpace();
                  if (referenceSpace) {
                    const pose = frame.getPose(result.imageSpace, referenceSpace);
                    if (pose) {
                      const { position, orientation } = pose.transform;
                      const group = floorPlanGroupRef.current;
                      group.position.set(position.x, position.y, position.z);
                      group.quaternion.set(orientation.x, orientation.y, orientation.z, orientation.w);
                      group.translateX(-floorFound.marker.position.x);
                      group.translateZ(-floorFound.marker.position.z);
                      setActiveMarkerInfo({ label: floorFound.label, floorId: floorFound.id });
                      setIsCalibrated(true);
                      setIsScanning(false);
                      if (navigator.vibrate) navigator.vibrate(200);
                    }
                  }
                }
              }
            }
          } catch (e) { console.error(e); }
        }

        // 3. LIVE HUD & DISTANCE
        if (isPresenting && isCalibrated && activeSegment && activeSegment.positions.length > 0) {
          const userPos = new THREE.Vector3();
          camera.getWorldPosition(userPos);
          const lastPoint = activeSegment.positions[activeSegment.positions.length - 1];
          const destPos = new THREE.Vector3(lastPoint[0], 0, lastPoint[1]);
          if (floorPlanGroupRef.current) destPos.applyMatrix4(floorPlanGroupRef.current.matrixWorld);
          
          const distCurrent = userPos.distanceTo(destPos);
          setDistanceToDest(distCurrent);

          let subseq = 0;
          const idx = pathSegments.findIndex(s => s.floorId === floorData.floorId);
          if (idx !== -1) {
            for (let i = idx + 1; i < pathSegments.length; i++) {
              const seg = pathSegments[i];
              for (let j = 1; j < seg.positions.length; j++) {
                subseq += Math.sqrt(Math.pow(seg.positions[j][0]-seg.positions[j-1][0],2) + Math.pow(seg.positions[j][1]-seg.positions[j-1][1],2));
              }
              subseq += 5;
            }
          }
          setTotalDistanceRemaining(distCurrent + subseq);

          if (idx === pathSegments.length - 1 && (distCurrent + subseq) < 1.5 && !hasArrived) {
            if (navigator.vibrate) navigator.vibrate([500, 100, 500]);
            setHasArrived(true);
            setNextInstruction("You have arrived!");
          } else if ((distCurrent + subseq) >= 1.5) {
            setHasArrived(false);
            setNextInstruction(activeSegment.transition ? `Take ${activeSegment.transition.name}` : `Follow arrows`);
          }
        }

        // 4. NEARBY LABELS
        if (labelsGroupRef.current && isPresenting && isCalibrated) {
          const userPos = new THREE.Vector3();
          camera.getWorldPosition(userPos);
          labelsGroupRef.current.children.forEach(label => {
            const labelPos = new THREE.Vector3();
            label.getWorldPosition(labelPos);
            const dist = userPos.distanceTo(labelPos);
            label.visible = dist < 5;
            if (label.visible) {
              const mat = (label as THREE.Mesh).material as THREE.MeshBasicMaterial;
              mat.opacity = THREE.MathUtils.lerp(1, 0, (dist - 2) / 3);
              label.scale.setScalar(THREE.MathUtils.lerp(1, 0.5, (dist - 2) / 3));
            }
          });
        }

        // 5. NEARBY FLOOR MESSAGES
        if (floorMessagesGroupRef.current) {
          const userPos = new THREE.Vector3();
          camera.getWorldPosition(userPos);
          const timeMsg = performance.now() * 0.001;
          floorMessagesGroupRef.current.children.forEach(msg => {
            const msgPos = new THREE.Vector3();
            msg.getWorldPosition(msgPos);
            const dist = userPos.distanceTo(msgPos);
            const isARMode = isPresenting && isCalibrated;
            msg.visible = isARMode ? (dist < 4) : true;
            if (msg.visible) {
              const mat = (msg as THREE.Mesh).material as THREE.MeshStandardMaterial;
              mat.opacity = isARMode ? THREE.MathUtils.clamp(1 - (dist / 4), 0, 1) : 0.9;
              mat.transparent = true;
              msg.scale.setScalar(1 + Math.sin(timeMsg * 3) * 0.05);
            }
          });
        }

        // 6. ANIMATE ARROWS (Proximity-based visibility)
        const timeArrows = performance.now() * 0.001;
        const userPosArrows = new THREE.Vector3();
        camera.getWorldPosition(userPosArrows);

        spheresRef.current.forEach((entry, i) => {
          const { group, mat } = entry;
          
          const arrowPos = new THREE.Vector3();
          group.getWorldPosition(arrowPos);
          const dist = userPosArrows.distanceTo(arrowPos);
          
          // Only show arrows within 10 meters
          const isNearby = dist < 10;
          group.visible = isNearby;

          if (isNearby) {
            // Fade in/out
            const opacity = THREE.MathUtils.clamp(THREE.MathUtils.lerp(1, 0, (dist - 5) / 5), 0, 1);
            mat.opacity = opacity;

            const floatOffset = Math.sin(timeArrows * 2 + i * 0.4) * 0.04;
            if (group.userData.baseY !== undefined) group.position.y = group.userData.baseY + floatOffset;
            
            const pulse = 1.8 + Math.sin(timeArrows * 3 + i) * 0.7;
            mat.emissiveIntensity = pulse;
            
            // scale pulsing removed for consistent size
            group.scale.set(1, 1, 1);
          }
        });

        // 7. ANIMATE START/DEST
        if (startPulseRef.current) {
          const s = 1 + Math.sin(timeArrows * 4) * 0.1;
          startPulseRef.current.scale.set(s, s, s);
          startPulseRef.current.rotation.y += 0.02;
          startPulseRef.current.rotation.z += 0.01;
          const floatOffset = Math.sin(timeArrows * 3) * 0.05;
          startPulseRef.current.position.y = 0.6 + floatOffset;
        }
        if (destinationBeaconRef.current) {
          const ring = destinationBeaconRef.current.children.find(c => c instanceof THREE.Mesh && c.geometry instanceof THREE.TorusGeometry);
          if (ring) {
            const pulse = 1 + Math.sin(timeArrows * 4) * 0.15;
            ring.scale.set(pulse, pulse, pulse);
          }
          const label = destinationBeaconRef.current.children.find(c => c.userData.isDestinationLabel);
          if (label) {
            label.lookAt(camera.position);
            const floatLabel = Math.sin(timeArrows * 2.5) * 0.1;
            label.position.y = 1.2 + floatLabel;
          }
        }

        // 8. ANIMATE GROUND FLOOR LABELS
        spheresRef.current.forEach((entry) => {
          const label = entry.group.children.find(c => c.userData.isFloorLabel);
          if (label) {
            label.lookAt(camera.position);
          }
        });

        // 9. FINAL RENDER
        renderer.render(scene, camera);
    };

    renderer.setAnimationLoop(animate);

    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.setAnimationLoop(null);
      renderer.dispose();
      controls.dispose();
      if (currentContainer && renderer.domElement) {
        currentContainer.removeChild(renderer.domElement);
      }
      if (currentContainer && arButtonRef.current && arButtonRef.current.parentNode) {
        currentContainer.removeChild(arButtonRef.current);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (floorPlanGroupRef.current && activeSegment) {
      drawPath(activeSegment, floorPlanGroupRef.current);
    }
  }, [activeSegment]);

  useEffect(() => {
    if (arButtonRef.current) {
      arButtonRef.current.style.display = showARButton ? 'block' : 'none';
    }
  }, [showARButton]);

  const drawFloor = (floorPlanGroup: THREE.Group, wallGroup: THREE.Group) => {
    // Calculate the bounding box of the walls to size the floor accordingly
    const boundingBox = new THREE.Box3().setFromObject(wallGroup);
    const size = new THREE.Vector3();
    boundingBox.getSize(size);
    const center = new THREE.Vector3();
    boundingBox.getCenter(center);

    const padding = 4; // Add some padding around the model
    const floorGeo = new THREE.PlaneGeometry(size.x + padding, size.z + padding);
    const floorMat = new THREE.MeshStandardMaterial({
      color:0x08080a, // A very dark color to make other elements pop
      roughness: 0.8,
      metalness: 0.2
    });
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.rotation.x = -Math.PI / 2;
    floor.position.copy(center);
    floor.position.y = 0; // Ensure floor is at ground level
    floor.receiveShadow = true;
    floorMaterialRef.current = floorMat;
    floorRef.current = floor;
    floorPlanGroup.add(floor);

    // ── RENDER CORRIDOR POLYGON (Green Floor) ─────────────────────────────
    if (floorData.corridorPolygon && floorData.corridorPolygon.length > 0) {
      const shape = new THREE.Shape();
      const [startPolyX, startPolyZ] = floorData.corridorPolygon[0];
      shape.moveTo(startPolyX, startPolyZ);
      floorData.corridorPolygon.slice(1).forEach(([px, pz]) => {
        shape.lineTo(px, pz);
      });
      shape.closePath();

      // Extrude slightly to be just above the dark floor plane
      const extrudeSettings = { depth: 0.02, bevelEnabled: false };
      const corridorGeo = new THREE.ExtrudeGeometry(shape, extrudeSettings);
      const corridorMat = new THREE.MeshStandardMaterial({ 
        color: floorData.corridorColor || 0x2ecc40,
        roughness: 0.6,
        metalness: 0.1,
        transparent: true,
        opacity: 0.8
      });
      const corridorMesh = new THREE.Mesh(corridorGeo, corridorMat);
      corridorMesh.rotation.x = -Math.PI / 2;
      // Position it slightly above Y=0 to prevent Z-fighting
      corridorMesh.position.y = 0.01; 
      floorPlanGroup.add(corridorMesh);
    }

    if (cameraRef.current && controlsRef.current) {
        cameraRef.current.position.set(center.x, 38, center.z + 0.001);
        controlsRef.current.target.copy(center);
        controlsRef.current.update();
      }
  };

  const drawRoomLabels = (floorPlanGroup: THREE.Group) => {
    if (!floorData) return;
    // Room width in world units — used to scale the label plane so it fits inside the room
    const roomWidths: Record<string, number> = {
      // General/Gym
      gymkhana: 12, gents: 6, women: 6,
      // G-series
      g1: 8, g2: 8, g3: 8, g4: 8, g5: 8,
      // Labs
      lab1: 8, lab2: 8, lab3: 8, lab4: 8, lab5: 8, lab6: 8, lab7: 10, lab8: 10, lab9: 14, lab10: 8,
      lab11: 8, lab12: 8, lab13: 8, lab14: 8,
      // Offices/Tutorials
      hod: 6, entc_hod: 6, dept_lib: 4, server: 6, tutorial: 3.5, corridor: 20, lift: 3, stairs_bot: 3, 
      faculty: 6, seminar: 10,
      // Classrooms
      '301': 8, '302': 8, '303': 8, '304': 8, '306': 8,
      '501': 8, '502': 8, '503': 8, '504': 8, '505': 8,
    };
    // roomDepths: label plane depth in world units
    const roomDepths: Record<string, number> = {
      gymkhana: 6, principal: 6, admin: 6, conf: 6, lab1: 6, canteen: 6, library: 6, ramp: 6,
      hod: 6, entc_hod: 6, dept_lib: 6, server: 6, tutorial: 6, lab10: 6, stairs_top: 6,
      lab9: 6, corridor: 2, lift: 6, stairs_bot: 6, lab7: 6, lab8: 6,
      women: 6, gents: 6,
    };

    floorData.rooms.forEach((room) => {
      if (!room.center) return;

      const suffix = room.id.split('_').slice(1).join('_');
      const rw = roomWidths[suffix] ?? 6;
      const rd = roomDepths[suffix] ?? 7.5;

      // Canvas: fixed resolution, text scaled to fit
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      if (!context) return;

      canvas.width  = 512;
      canvas.height = 512;

      // Measure text to pick font size
      const maxFontPx = 96;
      const minFontPx = 28;
      let fontSize = maxFontPx;
      context.font = `bold ${fontSize}px Arial`;
      while (context.measureText(room.name).width > canvas.width * 0.88 && fontSize > minFontPx) {
        fontSize -= 4;
        context.font = `bold ${fontSize}px Arial`;
      }

      // For multi-word names, split into lines
      const words = room.name.split(' ');
      const lines: string[] = [];
      if (words.length > 1 && context.measureText(room.name).width > canvas.width * 0.85) {
        // Try 2-line split
        const mid = Math.ceil(words.length / 2);
        lines.push(words.slice(0, mid).join(' '));
        lines.push(words.slice(mid).join(' '));
        // Adjust font so both lines fit
        for (const l of lines) {
          while (context.measureText(l).width > canvas.width * 0.88 && fontSize > minFontPx) {
            fontSize -= 4;
            context.font = `bold ${fontSize}px Arial`;
          }
        }
      } else {
        lines.push(room.name);
      }

      const lineH = fontSize * 1.25;
      const totalTextH = lines.length * lineH;

      // Dark semi-transparent background
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.fillStyle = 'rgba(8, 8, 18, 0.82)';
      const rx = 32;
      context.beginPath();
      context.moveTo(rx, 0);
      context.lineTo(canvas.width - rx, 0);
      context.quadraticCurveTo(canvas.width, 0, canvas.width, rx);
      context.lineTo(canvas.width, canvas.height - rx);
      context.quadraticCurveTo(canvas.width, canvas.height, canvas.width - rx, canvas.height);
      context.lineTo(rx, canvas.height);
      context.quadraticCurveTo(0, canvas.height, 0, canvas.height - rx);
      context.lineTo(0, rx);
      context.quadraticCurveTo(0, 0, rx, 0);
      context.closePath();
      context.fill();

      // Border
      context.strokeStyle = 'rgba(199, 146, 234, 0.85)';
      context.lineWidth = 8;
      context.stroke();

      // Draw text lines centered
      context.font = `bold ${fontSize}px Arial`;
      context.textAlign = 'center';
      context.textBaseline = 'middle';
      context.shadowColor = 'rgba(199, 146, 234, 1)';
      context.shadowBlur = 24;
      context.fillStyle = '#ffffff';

      const startY = canvas.height / 2 - totalTextH / 2 + lineH / 2;
      lines.forEach((line, i) => {
        context.fillText(line, canvas.width / 2, startY + i * lineH);
      });
      // Second pass — brighter core
      context.shadowBlur = 10;
      context.fillStyle = '#eedeff';
      lines.forEach((line, i) => {
        context.fillText(line, canvas.width / 2, startY + i * lineH);
      });

      const texture = new THREE.CanvasTexture(canvas);
      texture.needsUpdate = true;

      const labelMaterial = new THREE.MeshBasicMaterial({
        map: texture,
        transparent: true,
        depthWrite: false,
        side: THREE.DoubleSide,
      });

      // Scale plane to fit inside the room cell (leave a small margin)
      const margin = 0.7;
      const planeW = Math.min(rw - margin, rw * 0.85);
      const planeD = Math.min(rd - margin, rd * 0.75);

      const labelGeometry = new THREE.PlaneGeometry(planeW, planeD);
      const labelMesh = new THREE.Mesh(labelGeometry, labelMaterial);

      labelMesh.position.set(room.center[0], 0.06, room.center[1]);
      labelMesh.rotation.x = -Math.PI / 2;

      floorPlanGroup.add(labelMesh);
    });
  };

  const drawFloorMessages = (group: THREE.Group) => {
    if (!floorData.floorMessages) return;

    floorData.floorMessages.forEach((msg) => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      canvas.width = 1024;
      canvas.height = 256;

      // Professional holographic look
      const isWelcome = msg.type === 'welcome';
      const color = isWelcome ? '#8b5cf6' : (msg.type === 'quote' ? '#10b981' : '#f59e0b');
      
      // Background glow
      ctx.fillStyle = 'rgba(15, 15, 25, 0.7)';
      ctx.roundRect(0, 0, canvas.width, canvas.height, 40);
      ctx.fill();
      
      // Border
      ctx.strokeStyle = color;
      ctx.lineWidth = 10;
      ctx.stroke();

      // Text
      ctx.font = 'bold 80px Arial';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      
      // Shadow for glow
      ctx.shadowColor = color;
      ctx.shadowBlur = 30;
      ctx.fillStyle = '#ffffff';
      ctx.fillText(msg.text, canvas.width / 2, canvas.height / 2);

      const texture = new THREE.CanvasTexture(canvas);
      const mat = new THREE.MeshStandardMaterial({
        map: texture,
        transparent: true,
        opacity: 0, // start hidden for proximity logic
        depthWrite: false,
        emissive: new THREE.Color(color),
        emissiveIntensity: 2
      });

      const planeGeo = new THREE.PlaneGeometry(isWelcome ? 4 : 2.5, isWelcome ? 1 : 0.6);
      const mesh = new THREE.Mesh(planeGeo, mat);
      mesh.rotation.x = -Math.PI / 2;
      mesh.position.set(msg.position[0], 0.02, msg.position[1]);
      
      group.add(mesh);
    });
  };

  const drawPath = (segment: PathSegment, floorPlanGroup: THREE.Group) => {
    // ── Clear old arrows, beacon and start pulse ──────────────────────────────
    spheresRef.current.forEach(entry => {
      floorPlanGroup.remove(entry.group);
      entry.geo.dispose();
      entry.mat.dispose();
    });
    spheresRef.current = [];

    if (startPulseRef.current) {
        floorPlanGroup.remove(startPulseRef.current);
        startPulseRef.current.geometry.dispose();
        (startPulseRef.current.material as THREE.Material).dispose();
        startPulseRef.current = null;
    }

    if (destinationBeaconRef.current) {
      floorPlanGroup.remove(destinationBeaconRef.current);
      destinationBeaconRef.current.traverse(child => {
        if ((child as THREE.Mesh).isMesh) {
          (child as THREE.Mesh).geometry.dispose();
          ((child as THREE.Mesh).material as THREE.Material).dispose();
        }
      });
      destinationBeaconRef.current = null;
    }

    animationIndexRef.current = 0;
    curvePointsGlobalRef.current = [];
    pathCurveRef.current = null;

    if (lineRef.current) {
      floorPlanGroup.remove(lineRef.current);
      lineRef.current.geometry.dispose();
      (lineRef.current.material as THREE.Material).dispose();
      lineRef.current = null;
    }

    if (!segment || segment.positions.length < 2) return;

    const pathPoints = segment.positions.map(pos => {
      // Y=0.12 — sits just above floor surface, visible in both 3D and AR
      return new THREE.Vector3(pos[0], 0.12, pos[1]);
    });

    if (pathPoints.length < 2) return;

    // ── Build start marker (Attractive floating diamond) ──────────────────
    const startGeo = new THREE.OctahedronGeometry(0.25, 0);
    const startMat = new THREE.MeshStandardMaterial({ 
      color: 0x10b981, 
      emissive: 0x10b981, 
      emissiveIntensity: 2,
      transparent: true,
      opacity: 0.8,
      flatShading: true
    });
    const startMarker = new THREE.Mesh(startGeo, startMat);
    startMarker.position.copy(pathPoints[0]).setY(0.6); // Float at waist height
    floorPlanGroup.add(startMarker);
    startPulseRef.current = startMarker;

    // ── Build destination marker (Floating Name Label) ──────────────────────
    const endPos = pathPoints[pathPoints.length - 1];
    const destinationRoom = floorData.rooms.find(r => r.id === endRoomIdRef.current);
    const destinationName = destinationRoom?.name || "Destination";

    const destGroup = new THREE.Group();
    
    // 1. Floating Text Canvas
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (ctx) {
      canvas.width = 512;
      canvas.height = 128;
      ctx.fillStyle = 'rgba(15, 15, 25, 0.85)';
      ctx.roundRect(0, 0, canvas.width, canvas.height, 20);
      ctx.fill();
      ctx.strokeStyle = '#facc15'; // Yellow border
      ctx.lineWidth = 6;
      ctx.stroke();
      ctx.font = 'bold 60px Arial';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = '#ffffff';
      ctx.shadowColor = '#facc15';
      ctx.shadowBlur = 15;
      ctx.fillText(destinationName, canvas.width / 2, canvas.height / 2);
      
      const textTex = new THREE.CanvasTexture(canvas);
      const textMat = new THREE.MeshBasicMaterial({ map: textTex, transparent: true, side: THREE.DoubleSide });
      const textPlane = new THREE.Mesh(new THREE.PlaneGeometry(2.5, 0.6), textMat);
      textPlane.position.y = 1.2; // Float high
      destGroup.add(textPlane);
      // Make text face user (handled in animate loop if needed, or static)
      textPlane.userData.isDestinationLabel = true;
    }

    // 2. Ground indicator (Pulsing ring)
    const torusGeo = new THREE.TorusGeometry(0.6, 0.05, 16, 48);
    const torusMat = new THREE.MeshStandardMaterial({ 
      color: 0xfacc15, 
      emissive: 0xfacc15, 
      emissiveIntensity: 3 
    });
    const ring = new THREE.Mesh(torusGeo, torusMat);
    ring.rotation.x = -Math.PI / 2;
    destGroup.add(ring);

    destGroup.position.copy(endPos).setY(0.01);
    floorPlanGroup.add(destGroup);
    destinationBeaconRef.current = destGroup;

    // ── Build curve ─────────────────────────────────────────────────────────
    const curve = new THREE.CatmullRomCurve3(pathPoints);
    pathCurveRef.current = curve;

    // More curve points = smoother arrow placement
    const TOTAL_PTS = 300;
    const curvePoints = curve.getPoints(TOTAL_PTS);
    curvePointsGlobalRef.current = curvePoints;

    // Glowing path line (visible in 3D view, hidden in AR)
    const lineGeo = new THREE.BufferGeometry().setFromPoints(
      pathPoints.map(p => p.clone().setY(0.15))
    );
    const lineMat = new THREE.LineBasicMaterial({ color: 0x00f2ff, linewidth: 3 });
    const line = new THREE.Line(lineGeo, lineMat);
    line.userData.isPathLine = true;
    floorPlanGroup.add(line);
    lineRef.current = line;

    // ── Place arrows immediately (all at once) ──────────────────────────────
    const ARROW_SPACING = 20; 
    const isAR = rendererRef.current?.xr.isPresenting ?? false;

    // Reverse V (Chevron) size
    const armL = 0.25;
    const armR = 0.025;
    const currentHeight = isAR ? arrowHeight : 0.12; 

    const isToGround = activeSegment.transition?.toFloor === 'f1';

    for (let idx = 0; idx < curvePoints.length; idx += ARROW_SPACING) {
      const pt      = curvePoints[idx].clone();
      pt.y          = currentHeight;
      const t       = idx / (curvePoints.length - 1);
      const tangent = curve.getTangent(t).normalize();

      const geo = new THREE.CylinderGeometry(armR, armR, armL, 12);
      const mat = new THREE.MeshStandardMaterial({
        color: isToGround && idx > curvePoints.length - 60 ? 0xfacc15 : 0x00f2ff,
        emissive: isToGround && idx > curvePoints.length - 60 ? 0xfacc15 : 0x00f2ff,
        emissiveIntensity: 3.0,
        transparent: true,
        opacity: 0,
      });

      const leftArm = new THREE.Mesh(geo, mat);
      const rightArm = new THREE.Mesh(geo, mat);

      // Positioning chevrons
      const group = new THREE.Group();
      group.position.copy(pt);
      
      // Calculate rotation to face tangent
      const lookAt = pt.clone().add(tangent);
      group.lookAt(lookAt);

      // Angle arms to form a vertical "reverse V" (^) pointing forward
      // We rotate them in the XY plane (vertical)
      leftArm.rotation.z = -Math.PI / 4; // Tilt left
      leftArm.position.x = -0.08;
      leftArm.position.y = -0.05; // Lower the base of the arm
      
      rightArm.rotation.z = Math.PI / 4; // Tilt right
      rightArm.position.x = 0.08;
      rightArm.position.y = -0.05; // Lower the base of the arm

      group.add(leftArm, rightArm);
      group.userData.baseY = currentHeight;
      
      // Ground label logic
      if (isToGround && idx > curvePoints.length - 60) {
        const canv = document.createElement('canvas');
        const c = canv.getContext('2d');
        if (c) {
          canv.width = 256; canv.height = 64;
          c.fillStyle = 'rgba(15,15,25,0.8)'; c.roundRect(0,0,256,64,10); c.fill();
          c.font = 'bold 32px Arial'; c.textAlign='center'; c.textBaseline='middle';
          c.fillStyle='#ffffff'; c.fillText("Ground Floor", 128, 32);
          const tTex = new THREE.CanvasTexture(canv);
          const tMat = new THREE.MeshBasicMaterial({ map: tTex, transparent: true });
          const tPlane = new THREE.Mesh(new THREE.PlaneGeometry(1.2, 0.3), tMat);
          tPlane.position.y = 0.6;
          tPlane.userData.isFloorLabel = true;
          group.add(tPlane);
        }
      }

      floorPlanGroup.add(group);
      spheresRef.current.push({ group, geo, mat });
    }
  };

  return (
    <>
      <div ref={containerRef} className="fixed inset-0 z-0" />
      
      {isScanning && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-900/40 pointer-events-auto">
          <div className="bg-slate-900 border border-purple-500/50 p-8 rounded-3xl shadow-2xl flex flex-col items-center max-w-xs text-center pointer-events-auto">
            <div className="relative w-24 h-24 mb-6">
              <div className="absolute inset-0 border-4 border-purple-500 rounded-2xl animate-pulse" />
              <div className="absolute inset-4 border-2 border-purple-400/50 rounded-lg animate-ping" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-4xl text-purple-400">📷</span>
              </div>
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Aligning World</h2>
            <p className="text-sm text-purple-200 mb-6 leading-relaxed">
              Point your camera at the <span className="font-bold text-white underline">{floors.find(f => f.id === floorData.floorId)?.label || 'Floor'} Marker</span> to calibrate.
            </p>
            <div className="flex flex-col gap-2 w-full">
              <button 
                onClick={() => tryCalibrate()}
                className="px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white text-sm font-bold rounded-xl transition-all shadow-lg shadow-purple-500/20">
                Found Marker (Align Now)
              </button>
              <button 
                onClick={() => setIsScanning(false)}
                className="px-6 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium rounded-xl transition-colors border border-slate-700">
                Skip Calibration
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Feature 3: Real-Time HUD */}
      {isCalibrated && totalDistanceRemaining !== null && (
        <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-sm">
          <div className="bg-slate-900/80 backdrop-blur-xl border border-white/10 p-4 rounded-3xl shadow-2xl flex items-center gap-4">
            <div className="bg-purple-600/30 p-3 rounded-2xl">
              <div className="w-6 h-6 border-2 border-purple-400 rounded-full animate-pulse flex items-center justify-center">
                <div className="w-2 h-2 bg-purple-400 rounded-full" />
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-black text-white">
                  {totalDistanceRemaining < 1.5 ? 'Arrived' : `${Math.round(totalDistanceRemaining)}m`}
                </span>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Total</span>
                
                {distanceToDest !== null && Math.round(distanceToDest) !== Math.round(totalDistanceRemaining) && (
                  <span className="text-xs font-medium text-purple-400/80 ml-auto">
                    {Math.round(distanceToDest)}m this floor
                  </span>
                )}
              </div>
              <p className="text-sm font-medium text-purple-300">
                {nextInstruction} • {Math.ceil(totalDistanceRemaining / 1.2 / 60)} min walk
              </p>
              {activeMarkerInfo && (
                <p className="text-[10px] text-green-400 font-bold uppercase mt-1">
                  ✓ Synced to {activeMarkerInfo.label}
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      {showUIView && (
        <>
          <button
              onClick={() => {
                  console.log("Button clicked!");
                  setIsFarView(!isFarView)
              }}
              className="fixed top-20 left-6 z-20 bg-white/95 p-3 rounded-full shadow-lg text-slate-800 hover:bg-slate-100 transition-colors"
              aria-label="Toggle Far View"
          >
              {isFarView ? 'Default View' : 'Far View'}
          </button>

          {/* Height Adjuster Component */}
          <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-3 bg-slate-900/80 backdrop-blur-md p-4 rounded-3xl border border-white/10 shadow-2xl">
            <span className="text-[10px] font-bold text-white uppercase tracking-widest vertical-text mb-2">Height</span>
            <div className="relative h-48 w-8 flex items-center justify-center">
              <input 
                type="range" 
                min="0.05" 
                max="2.0" 
                step="0.05" 
                value={arrowHeight}
                onChange={(e) => setArrowHeight(parseFloat(e.target.value))}
                className="h-40 w-1 accent-purple-500 appearance-none bg-slate-700 rounded-lg cursor-pointer outline-none"
                style={{ WebkitAppearance: 'slider-vertical' } as any}
              />
            </div>
            <span className="text-xs font-black text-purple-400 mt-2">{arrowHeight.toFixed(2)}m</span>
          </div>
        </>
      )}
    </>
  );
}