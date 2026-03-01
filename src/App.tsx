import { useState, useCallback } from 'react';
import { Menu } from 'lucide-react';
import ARScene from './components/ARScene';
import NavigationUI from './components/NavigationUI';
import { ALL_FLOORS } from './data/floorRegistry';
import { findMultiFloorPath } from './utils/multiFloorPathfinding';
import type { PathSegment } from './utils/multiFloorPathfinding';

function App() {
  // Default: start on floor 3 (CSE — your real floor)
  const defaultFloor = 'f3';
  const defaultStart = ALL_FLOORS.find(f => f.floorId === defaultFloor)?.rooms.find(r => !r.id.endsWith('_corridor'))?.id ?? '';
  const defaultEnd   = ALL_FLOORS.find(f => f.floorId === defaultFloor)?.rooms.filter(r => !r.id.endsWith('_corridor'))[1]?.id ?? '';

  const [startFloorId, setStartFloorId] = useState(defaultFloor);
  const [startRoomId,  setStartRoomId]  = useState(defaultStart);
  const [endFloorId,   setEndFloorId]   = useState(defaultFloor);
  const [endRoomId,    setEndRoomId]    = useState(defaultEnd);

  // The floor currently rendered in 3D
  const [activeFloorId, setActiveFloorId] = useState(defaultFloor);

  const [pathSegments, setPathSegments] = useState<PathSegment[]>([]);
  const [isARActive,   setIsARActive]   = useState(false);
  const [isMenuOpen,   setIsMenuOpen]   = useState(false);

  const handleFindPath = useCallback(() => {
    const segments = findMultiFloorPath(startRoomId, endRoomId, ALL_FLOORS);
    setPathSegments(segments);

    // Auto-switch view to the start floor
    if (segments.length > 0) {
      setActiveFloorId(segments[0].floorId);
    }
    setIsMenuOpen(false);
  }, [startRoomId, endRoomId]);

  const handleStartChange = (floorId: string, roomId: string) => {
    setStartFloorId(floorId);
    setStartRoomId(roomId);
  };

  const handleEndChange = (floorId: string, roomId: string) => {
    setEndFloorId(floorId);
    setEndRoomId(roomId);
  };

  // Active floor data for 3D rendering
  const activeFloorData = ALL_FLOORS.find(f => f.floorId === activeFloorId);

  // Path segment to render on the active floor
  const activeSegment = pathSegments.find(s => s.floorId === activeFloorId) ?? null;

  return (
    <main>
      {/* Hamburger menu button */}
      {!isARActive && !isMenuOpen && (
        <button
          onClick={() => setIsMenuOpen(true)}
          className="fixed top-6 left-6 z-20 bg-slate-900/90 border border-purple-500/30 p-3 rounded-full shadow-lg text-white hover:bg-slate-800 transition-colors"
          aria-label="Open navigation menu">
          <Menu className="w-6 h-6" />
        </button>
      )}

      {/* Floor indicator badge */}
      {!isARActive && !isMenuOpen && (
        <div className="fixed top-6 left-20 z-20 bg-slate-900/90 border border-purple-500/30 px-3 py-2 rounded-full text-xs text-purple-300 font-medium">
          {ALL_FLOORS.find(f => f.floorId === activeFloorId) && (
            <>Viewing: <span className="text-white font-bold">
              {ALL_FLOORS.find(f => f.floorId === activeFloorId)?.floorName || activeFloorId}
            </span></>
          )}
        </div>
      )}

      {/* Navigation UI */}
      {!isARActive && isMenuOpen && (
        <NavigationUI
          startRoomId={startRoomId}
          startFloorId={startFloorId}
          endRoomId={endRoomId}
          endFloorId={endFloorId}
          activeFloorId={activeFloorId}
          pathSegments={pathSegments}
          onStartChange={handleStartChange}
          onEndChange={handleEndChange}
          onFloorChange={setActiveFloorId}
          onFindPath={handleFindPath}
          onClose={() => setIsMenuOpen(false)}
        />
      )}

      {/* Multi-floor guidance */}
      {activeSegment?.transition && !isMenuOpen && (
        <div className="fixed bottom-24 left-1/2 -translate-x-1/2 z-20 w-[90%] max-w-xs bg-slate-900/95 border border-amber-500/50 p-4 rounded-2xl shadow-2xl backdrop-blur-md">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-amber-500/20 p-2 rounded-lg">
              <span className="text-xl">
                {activeSegment.transition.type === 'lift' ? '🛗' : 
                 activeSegment.transition.type === 'stairs' ? '🪜' : '♿'}
              </span>
            </div>
            <div>
              <p className="text-xs font-bold text-amber-400 uppercase tracking-wider">Next Step</p>
              <p className="text-sm text-white font-medium">
                Take the {activeSegment.transition.name} to {ALL_FLOORS.find(f => f.floorId === activeSegment.transition?.toFloor)?.floorName || activeSegment.transition.toFloor}
              </p>
            </div>
          </div>
          <button
            onClick={() => setActiveFloorId(activeSegment.transition!.toFloor)}
            className="w-full bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold py-2 rounded-xl transition-colors text-sm shadow-lg shadow-amber-500/20">
            Switch to {ALL_FLOORS.find(f => f.floorId === activeSegment.transition?.toFloor)?.floorName.split(' ')[0] || 'Next'} Floor
          </button>
        </div>
      )}

      {/* 3D Scene — always rendered, floor switches dynamically */}
      {activeFloorData && (
        <ARScene
          floorData={activeFloorData}
          activeSegment={activeSegment}
          pathSegments={pathSegments}
          startRoomId={startFloorId === activeFloorId ? startRoomId : null}
          endRoomId={endFloorId === activeFloorId ? endRoomId : null}
          onSessionStateChange={setIsARActive}
          showARButton={!isMenuOpen}
          showUIView={!isMenuOpen}
        />
      )}
    </main>
  );
}

export default App;
