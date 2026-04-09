// There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]).
// The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either
// down or right at any point in time.

// Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the
// bottom-right corner.

// The test cases are generated so that the answer will be less than or equal to 2 * 109.

// Approach, dynamic programming. Store a value for each cell that is the answer, the number of unique paths
// to reach that cell. That is the number of paths of the cell above + the number of paths to get to the cell to the
// left.

function uniquePaths(m: number, n: number) {
  let y = m;
  let x = n;
  // make a 2d array
  // make y rows with x elements in each row
  let grid: number[][] = new Array(y)
    .fill(null)
    .map(() => new Array(x).fill(0));
  // each space in the grid will summ all possible moves to get there
  grid[0][0] = 1; // starting position has exactly one move to get there
  for (let currY = 0; currY < y; currY++) {
    for (let currX = 0; currX < x; currX++) {
      if (currX == 0 && currY == 0) continue;
      // check if we can get here from above
      let uniquePathsAbove = grid[currY - 1]?.[currX] || 0;
      let uniquePathsLeft = grid[currY][currX - 1] || 0;
      grid[currY][currX] = uniquePathsLeft + uniquePathsAbove;
    //   console.log(`grid [${currX}][${currY}] val: ${grid[currX][currY]}`);
    }
  }
  return grid[m - 1][n - 1];
}

console.log(uniquePaths(3, 2));
