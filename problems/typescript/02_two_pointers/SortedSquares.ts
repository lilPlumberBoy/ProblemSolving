// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.
// Example 1:
// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].
// Example 2:
// Input: nums = [-7,-3,2,3,11]
// Output: [4,9,9,49,121]

// Our goal is to do this in one pass, we must itter a left and right pointer
// to find the highest square to get the order right

function sortedSquares(nums: number[]): number[] {
  let output: number[] = new Array(nums.length);
  let left = 0;
  let right = nums.length - 1;
  let i = nums.length - 1;
  while (left <= right) {
    const leftSquare = nums[left] * nums[left];
    const rightSquare = nums[right] * nums[right];
    const newSquare =
      leftSquare >= rightSquare
        ? nums[left] * nums[left++]
        : nums[right] * nums[right--];
    output[i--] = newSquare;
  }
  return output;
}

console.log(sortedSquares([-4, -1, 0, 3, 10]));
