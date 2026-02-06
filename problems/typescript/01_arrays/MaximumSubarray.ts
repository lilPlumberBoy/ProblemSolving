export default class Solution {
  maxSubArray(nums: number[]): number {
    let maxSum = Number.NEGATIVE_INFINITY;
    let currentSum = 0;

    for (const n of nums) {
      currentSum = Math.max(n, currentSum + n);
      maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
  }
}
