// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
// Note that you must do this in-place without making a copy of the array.
// Example 1:
// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]

function moveZeroes(nums: number[]): number[] {
  // keep track of the last time we saw a non-zero number
  // the first time we run into a non-zero after a 0 move non-zero to that index
  // add 0 to the end
  let lastNonZero = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      continue;
    }
    let temp = nums[lastNonZero];
    nums[lastNonZero] = nums[i];
    nums[i] = temp;
    lastNonZero++;
  }
  return nums;
}

console.log(moveZeroes([0, 1, 0, 3, 12]));
