// Given an m x n matrix, return all elements of the matrix in spiral order.
// Example 1:
// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [1,2,3,6,9,8,7,4,5]

function spiralOrder(matrix: number[][]): number[] {
  if (matrix.length === 0) return [];
  let result: number[] = [];
  // 1. move right, end at width
  // 2. move down, end at height (height -1)
  // 3. move right, end at 0 (width -1)
  // 4. move up, end at new heigth
  let top = 0;
  let left = 0;
  let right = matrix[0].length;
  let bottom = matrix.length;
  const finalLength = right * bottom;

  while (result.length < finalLength) {
    // left to right
    for (let i = left; i < right && !isComplete(); i++) {
      result.push(matrix[top][i]);
    }
    top++;
    // top to bottom
    for (let i = top; i < bottom && !isComplete(); i++) {
      result.push(matrix[i][right - 1]);
    }
    right--;
    // right to left
    for (let i = right - 1; i >= left && !isComplete(); i--) {
      result.push(matrix[bottom - 1][i]);
    }
    bottom--;
    // bottom to top
    for (let i = bottom - 1; i >= top && !isComplete(); i--) {
      result.push(matrix[i][left]);
    }
    left++;
  }

  function isComplete(): boolean {
    return result.length === finalLength;
  }

  return result;
}

console.log(
  spiralOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
  ]),
);
