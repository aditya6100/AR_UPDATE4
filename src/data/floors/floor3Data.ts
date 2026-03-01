import type { FloorData } from '../floorTypes';

// =============================================================
// Floor 3 — Placeholder / 3rd Floor
// (Copy of Floor 2 but with f3 IDs for consistency)
// =============================================================

export const floor3Data: FloorData = {
  floorId: 'f3',
  floorNumber: 3,
  floorName: '3rd Floor (Placeholder)',

  rooms: [
    { id: 'f3_room_placeholder', name: 'Room 301', center: [10, 5], connectedTo: ['f3_wp_stairs_bot'] }
  ],

  waypoints: [
    { id: 'f3_wp_stairs_bot', position: [ 6.601, 4.095], connectedTo: ['f2_wp_stairs_bot', 'f4_wp_hall_stairs_bot'] },
    { id: 'f3_wp_stairs_top', position: [ 29.741, 4.095], connectedTo: ['f2_wp_stairs_top', 'f4_wp_hall_stairs_top'] },
  ],

  walls: [
    { p1: [0, 0], p2: [41, 0] },
    { p1: [41, 0], p2: [41, 7] },
    { p1: [41, 7], p2: [0, 7] },
    { p1: [0, 7], p2: [0, 0] },
  ],

  wallHeight: 3.00,
  wallThickness: 0.15,
  planSize: { width: 41, height: 7 },
};
