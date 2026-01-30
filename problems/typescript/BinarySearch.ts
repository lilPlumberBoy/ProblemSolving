// Given an array of integers nums which is sorted in ascending order, and an integer target,
// write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.
// You must write an algorithm with O(log n) runtime complexity.
// Example 1:
// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4
// Example 2:
// Input: nums = [-1,0,3,5,9,12], target = 2
// Output: -1
// Explanation: 2 does not exist in nums so return -1

function search(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2);
    if (nums[mid] == target){
        return mid;
    }
    // [-1, 0, 3, 5, 8, 12];
    if (nums[mid] < target) {
      left = mid + 1;
    }
    if (nums[mid] > target) {
      right = mid - 1;
    }
  }
  return -1;
}

function binaraySearch(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1; // attention
  while (left <= right) {
    // js(dynamic type) remember to use Math.floor() to make it a integer
    const mid = left + Math.floor((right - left) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1; // attention
    } else if (nums[mid] > target) {
      right = mid - 1; // attention
    }
  }
  return -1;
}
