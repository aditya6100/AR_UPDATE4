// =============================================================
// Floor 2 — 1st Floor (Lab 1-6 Block)
// Structure mirrors Floor 3 (CSE) exactly as requested.
// =============================================================

export const floor2Data = {
  floorId: 'f2',
  floorNumber: 2,
  floorName: "1st Floor",

  // ── GREEN CORRIDOR / MIDDLE PORTION POLYGON ───────────────────────────
  corridorPolygon: [
    [ 0.00,  3.20],  // top-left
    [24.54,  3.20],  // corridor top → Lab3/Stairs boundary
    [24.54,  2.35],  // step UP
    [27.54,  2.35],  // Stairs box corner
    [27.54,  3.20],  // step back down
    [27.54,  3.20],  // jog right to Lab6
    [38.98,  3.20],  // right edge top
    [38.98,  4.10],  // right edge bottom
    [27.17,  4.10],  // Lab6 boundary
    [ 5.36,  4.10],  // corridor bottom → Stairs RHS
    [ 5.36,  7.30],  // step DOWN column
    [ 0.00,  7.30],  // left building bottom
    [ 0.00,  4.10],  // left wall back up
  ] as [number, number][],

  corridorColor: '#2ecc40',

  rooms: [
    // --- TOP ROW ---
    { id: "f2_lab1",       name: "Lab 1",          center: [3.35,  1.60], connectedTo: ["f2_wp_hall_lab1"] },
    { id: "f2_lab2",       name: "Lab 2",          center: [8.62,  1.60], connectedTo: ["f2_wp_hall_lab2"] },
    { id: "f2_lab3",       name: "Lab 3",          center: [17.54, 1.60], connectedTo: ["f2_wp_hall_lab3"] },
    { id: "f2_stairs_top", name: "Stairs (Top)",   center: [26.04, 1.10], connectedTo: ["f2_wp_hall_stairs_top"] },
    { id: "f2_lab6",       name: "Lab 6",          center: [33.15, 3.65], connectedTo: ["f2_wp_hall_lab6"] },

    // --- BOTTOM ROW ---
    { id: "f2_lift",       name: "Lift",           center: [0.89,  5.70], connectedTo: [] }, // NO CONNECTION
    { id: "f2_stairs_bot", name: "Stairs (Bot)",   center: [3.57,  5.70], connectedTo: ["f2_wp_hall_stairs_bot"] },
    { id: "f2_lab4",       name: "Lab 4",          center: [10.95, 5.70], connectedTo: ["f2_wp_hall_lab4"] },
    { id: "f2_lab5",       name: "Lab 5",          center: [20.54, 5.70], connectedTo: ["f2_wp_hall_lab5"] },
    { id: "f2_women",      name: "Ladies Toilet",  center: [25.86, 5.70], connectedTo: ["f2_wp_hall_women"] },
    { id: "f2_gents",      name: "Men Washroom",   center: [38.11, 5.70], connectedTo: ["f2_wp_hall_gents"] },
  ],

  waypoints: [
    { id: "f2_wp_hall_stairs_bot", position: [3.57,  3.65], connectedTo: ["f2_wp_hall_lab1"] },
    { id: "f2_wp_hall_lab1",       position: [3.35,  3.65], connectedTo: ["f2_wp_hall_stairs_bot", "f2_wp_hall_lab2"] },
    { id: "f2_wp_hall_lab2",       position: [8.62,  3.65], connectedTo: ["f2_wp_hall_lab1", "f2_wp_hall_lab4"] },
    { id: "f2_wp_hall_lab4",       position: [10.95, 3.65], connectedTo: ["f2_wp_hall_lab2", "f2_wp_hall_lab3"] },
    { id: "f2_wp_hall_lab3",       position: [17.54, 3.65], connectedTo: ["f2_wp_hall_lab4", "f2_wp_hall_lab5"] },
    { id: "f2_wp_hall_lab5",       position: [20.54, 3.65], connectedTo: ["f2_wp_hall_lab3", "f2_wp_hall_stairs_top"] },
    { id: "f2_wp_hall_stairs_top", position: [26.04, 3.65], connectedTo: ["f2_wp_hall_lab5", "f2_wp_hall_women"] },
    { id: "f2_wp_hall_women",      position: [25.86, 3.65], connectedTo: ["f2_wp_hall_stairs_top", "f2_wp_hall_lab6"] },
    { id: "f2_wp_hall_lab6",       position: [33.15, 3.65], connectedTo: ["f2_wp_hall_women", "f2_wp_hall_gents"] },
    { id: "f2_wp_hall_gents",      position: [38.11, 3.65], connectedTo: ["f2_wp_hall_lab6"] },
  ],

  walls: [
    // Outer
    { p1: [0.00, 0.00], p2: [24.54, 0.00] },
    { p1: [27.54, 0.00], p2: [38.98, 0.00] },
    { p1: [38.98, 0.00], p2: [38.98, 7.30] },
    { p1: [38.98, 7.30], p2: [5.36, 7.30] },
    { p1: [1.78, 7.30], p2: [0.00, 7.30] },
    { p1: [0.00, 7.30], p2: [0.00, 0.00] },
    // Horizontal Corridor
    { p1: [0.00, 3.20], p2: [24.54, 3.20] },
    { p1: [27.54, 3.20], p2: [38.98, 3.20] },
    { p1: [0.00, 4.10], p2: [38.98, 4.10] },
    // Top dividers
    { p1: [6.70, 0.00], p2: [6.70, 3.20] },
    { p1: [13.54, 0.00], p2: [13.54, 3.20] },
    { p1: [24.54, 0.00], p2: [24.54, 3.20] },
    { p1: [27.54, 0.00], p2: [27.54, 3.20] },
    // Bottom dividers
    { p1: [1.78, 4.10], p2: [1.78, 7.30] },
    { p1: [5.36, 4.10], p2: [5.36, 7.30] },
    { p1: [16.54, 4.10], p2: [16.54, 7.30] },
    { p1: [24.54, 4.10], p2: [24.54, 7.30] },
    { p1: [32.38, 4.10], p2: [32.38, 7.30] },
  ],

  wallHeight: 3.00,
  wallThickness: 0.15,

  floorMessages: [
    { id: "m1", type: "welcome", text: "1ST FLOOR - LAB BLOCK", position: [2, 3.65] },
    { id: "m2", type: "quote",   text: "Code is Poetry 💻", position: [15, 3.65] },
  ],
};
