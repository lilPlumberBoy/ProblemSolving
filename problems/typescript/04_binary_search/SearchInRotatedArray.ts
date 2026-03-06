// There is an integer array nums sorted in ascending order (with distinct values).
// Prior to being passed to your function, nums is possibly left rotated at an
// unknown index k (1 <= k < nums.length) such that the resulting array is
// [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed).
// For example, [0,1,2,4,5,6,7] might be left rotated by 3 indices and become [4,5,6,7,0,1,2].
// Given the array nums after the possible rotation and an integer target,
// return the index of target if it is in nums, or -1 if it is not in nums.
// You must write an algorithm with O(log n) runtime complexity.
// Example 1:
// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4
// Example 2:
// Input: nums = [4,5,6,7,0,1,2], target = 3
// Output: -1
// Example 3:
// Input: nums = [1], target = 0
// Output: -1

function search(nums: number[], target: number): number {
  if (nums.length === 1) return nums[0] === target ? 0 : -1;
  if (nums.length === 0) return -1;
  let left = 0;
  let right = nums.length - 1;
  // first we have to find the rotated index
  //   [4, 5, 6, 7, 0, 1, 2]; target 0
  while (left <= right) {
    const middle = Math.floor((right + left) / 2);
    const mid = nums[middle];
    if (mid === target) return middle;
    // if the val at middle is greater than the right pointer
    // we know the rotation lives on the right side of the array
    //, we also know that to the left of the array is sorted
    if (mid > nums[right]) {
      if (target >= nums[left] && mid > target) {
        right = middle - 1;
      } else {
        left = middle + 1;
      }
    } else {
      // if the mid val is less than the left pointer, we know the
      // rotation lives in on left side of the array, and that the
      // right side is sorted
      if (target <= nums[right] && mid < target) {
        left = middle + 1;
      } else {
        right = middle - 1;
      }
    }
  }
  return -1;
}

console.log(search([4, 5, 6, 7, 0, 1, 2], 0));
