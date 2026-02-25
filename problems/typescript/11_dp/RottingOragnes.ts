// You are given an m x n grid where each cell can have one of three values:
// 0 representing an empty cell,
// 1 representing a fresh orange, or
// 2 representing a rotten orange.
// Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.
// Return the minimum number of minutes that must elapse until no cell has a fresh orange.
// If this is impossible, return -1.

// Example 2:

// Input: grid = [[2,1,1],[0,1,1],[1,0,1]]
// Output: -1
// Explanation: The orange in the bottom left corner (row 2, column 0)
// is never rotten, because rotting only happens 4-directionally.

// 2 is rotten orange, we need to count max steps from 1 to 2
function orangesRotting(grid: number[][]): number {
  const steps = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  const queue: number[][] = [];
  let maxMinutes = 0;
  let queuePointer = 0;

  for (let x = 0; x < grid.length; x++) {
    for (let y = 0; y < grid[0].length; y++) {
      // create queue of rotten orange positions
      if (grid[x][y] == 2) {
        queue.push([x, y]);
      }
    }
  }

  while (queuePointer < queue.length) {
    const endOfCurrentCycle = queue.length;
    let currentMaxMinutes = 0;
    while (queuePointer < endOfCurrentCycle) {
      const [x, y] = queue[queuePointer];
      // only process once
      if (grid[x][y] == 1) {
        grid[x][y] = 2;
      }
      for (const [dx, dy] of steps) {
        const nx = x + dx;
        const ny = y + dy;
        if (
          0 <= nx &&
          nx < grid.length &&
          0 <= ny &&
          ny < grid[0].length &&
          grid[nx][ny] === 1
        ) {
          queue.push([nx, ny]);
          grid[nx][ny] = 2;
        }
      }
      queuePointer++;
    }
    currentMaxMinutes ++;
    // add a minute after each cycle
    if (currentMaxMinutes > maxMinutes) {
      maxMinutes = currentMaxMinutes;
    }
  }
  return maxMinutes == 0 ? -1 : maxMinutes;
}

function orangesRottingCorrect(grid: number[][]): number {
  const steps = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  const queue: number[][] = [];
  let maxMinutes = 0;
  let queuePointer = 0;
  let freshCount = 0;

  for (let x = 0; x < grid.length; x++) {
    for (let y = 0; y < grid[0].length; y++) {
      if (grid[x][y] == 2) {
        queue.push([x, y]);
      } else if (grid[x][y] == 1) {
        freshCount++;
      }
    }
  }

  if (freshCount == 0) {
    return 0;
  }

  while (queuePointer < queue.length && freshCount > 0) {
    const endOfCurrentCycle = queue.length;
    let rottedThisCycle = 0;

    while (queuePointer < endOfCurrentCycle) {
      const [x, y] = queue[queuePointer];
      for (const [dx, dy] of steps) {
        const nx = x + dx;
        const ny = y + dy;
        if (
          0 <= nx &&
          nx < grid.length &&
          0 <= ny &&
          ny < grid[0].length &&
          grid[nx][ny] === 1
        ) {
          queue.push([nx, ny]);
          grid[nx][ny] = 2;
          freshCount--;
          rottedThisCycle++;
        }
      }
      queuePointer++;
    }

    if (rottedThisCycle > 0) {
      maxMinutes++;
    }
  }

  return freshCount == 0 ? maxMinutes : -1;
}

console.log(
  orangesRotting([
    [2, 1, 1],
    [0, 1, 1],
    [1, 0, 1],
  ]),
);

console.log(
  orangesRottingCorrect([
    [2, 1, 1],
    [0, 1, 1],
    [1, 0, 1],
  ]),
);
