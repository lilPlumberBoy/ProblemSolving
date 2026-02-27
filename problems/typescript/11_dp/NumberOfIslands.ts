// Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.
// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.
// Example 1:
// Input: grid = [
//   ["1","1","1","1","0"],
//   ["1","1","0","1","0"],
//   ["1","1","0","0","0"],
//   ["0","0","0","0","0"]
// ]
// Output: 1
// Example 2:
// Input: grid = [
// (["1", "1", "0", "0", "0"],
//   ["1", "1", "0", "0", "0"],
//   ["0", "0", "1", "0", "0"],
//   ["0", "0", "0", "1", "1"]);
// ]
// Output: 3

function numIslands(grid: string[][]): number {
  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  let numberOfIslands = 0;
  if (grid.length === 0) {
    return 0;
  }
  // When we find land we want to:
  /*
 1. itterate the numberOfIslands
 2. change value in grid to 2 to signal we have processed this
 3. visit all neightbors, if they are land, fill them with 2 so the island isnt double counted
  */
  for (let x = 0; x < grid.length; x++) {
    for (let y = 0; y < grid[0].length; y++) {
      if (grid[x][y] == "1") {
        // itterate number of islands
        numberOfIslands += 1;
        // mark position as processed
        // flood fill island
        floodFillIsland(x, y);
      }
    }
  }
  function floodFillIsland(x: number, y: number) {
    const spot = grid[x][y];
    // only continue recursion if we found land
    if (spot == "1") {
      grid[x][y] = "2";
      for (const [dr, dc] of directions) {
        // floodfill neighbors
        // have to check we step to valid location
        const nr = x + dr;
        const nc = y + dc;
        if (nr >= 0 && nr < grid.length && nc >= 0 && nc < grid[0].length) {
          floodFillIsland(nr, nc);
        }
      }
    }
  }
  return numberOfIslands;
}

console.log(
  numIslands([
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"],
  ]),
);
