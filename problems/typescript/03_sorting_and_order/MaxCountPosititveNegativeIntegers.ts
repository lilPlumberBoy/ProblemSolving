// Given an array nums sorted in non-decreasing order, return the maximum between the number of
// positive integers and the number of negative integers.

// In other words, if the number of positive integers in nums is pos and the number of negative
// integers is neg, then return the maximum of pos and neg.
// Note that 0 is neither positive nor negative.

// Example 1:

// Input: nums = [-2,-1,-1,1,2,3]
// Output: 3
// Explanation: There are 3 positive integers and 3 negative integers. The maximum count among them is 3.
// Example 2:

// Input: nums = [-3,-2,-1,0,0,1,2]
// Output: 3
// Explanation: There are 2 positive integers and 3 negative integers. The maximum count among them is 3.
// Example 3:

// Input: nums = [5,20,66,1314]
// Output: 4
// Explanation: There are 4 positive integers and 0 negative integers. The maximum count among them is 4.

// This approach is O(n) time complexity as it goes through the entire array
export function maximumCount2(nums: number[]): number {
  let posCount = 0;
  let negCount = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 0) {
      continue;
    }
    if (nums[i] > 0) {
      posCount++;
    } else {
      negCount++;
    }
  }
  return posCount >= negCount ? posCount : negCount;
}

// Since the array is sorted we can utilize this to not search every index and do a binary search instead
// We start with a index window and half it each iteration to find the index of the first pos and neg integer
export function maximumCount(nums: number[]): number {
  const n = nums.length;
  let left = 0;
  let right = n - 1;
  // find the first positive integer
  //  [-3,-2,-1,0,0,1,2], n = 7, right = 6, left = 0
  while (left <= right) {
    // check the middle of the seach window
    const mid = Math.floor(left + (right - left) / 2);
    // 0 + 6-0 / 2 = 3 nums[3] = 0
    if (nums[mid] > 0) {
      right = mid - 1;
    } else {
      // left = 4
      // on the last itteration when right == left this makes left > right ending the loop
      left = mid + 1;
    }
  }
  const postivieCount = n - left;
  // find the first negative integer
  let newRight = left-1;
  let newLeft = 0;
  while(newLeft <= newRight){
    const mid = Math.floor(newLeft + (newRight - newLeft) / 2);
    // [-3, -2, -1, 0, 0, 1, 2];
    if (nums[mid] < 0){
        newLeft = mid +1;
    }
    else {
        newRight = mid - 1
    }
  }
  const negativeCount = newRight + 1
  return Math.max(postivieCount, negativeCount);
}

// class Solution {
//     public int maximumCount(int[] nums) {
//         int n = nums.length;
//         int left = 0;
//         int  right = n - 1;
//         while (left <= right) {
//             int mid = left + (right - left) / 2;
//             if (nums[mid] > 0) {
//                 right = mid - 1;
//             } else {
//                 left = mid + 1;
//             }
//         }
//         // Now, 'left' is the index of the first positive number
//         int positiveCount = n - left;

//         // Find the last negative number using binary search
//         left = 0;
//         right = n - 1;
//         while (left <= right) {
//             int mid = left + (right - left) / 2;
//             if (nums[mid] < 0) {
//                 left = mid + 1;
//             } else {
//                 right = mid - 1;
//             }
//         }
//         // Now, 'right' is the index of the last negative number
//         int negativeCount = right + 1;

//         // Return the maximum count of positive and negative integers
//         return Math.max(positiveCount, negativeCount);
//     }
// }
