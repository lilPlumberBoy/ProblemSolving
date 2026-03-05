// Given an array nums containing n distinct numbers in the range [0, n],
// return the only number in the range that is missing from the array.
// Example 1:
// Input: nums = [3,0,1]
// Output: 2
// Explanation:
// n = 3 since there are 3 numbers, so all numbers are in the range [0,3].
// 2 is the missing number in the range since it does not appear in nums.

function missingNumber(nums: number[]): number {
  let expected = 0;
  let sum = 0;
  for (let n = 0; n < nums.length; n++) {
    console.log(`n ${n}`);
    console.log(`number ${nums[n]}`);
    expected += n;
    console.log(`expected ${expected}`);
    sum += nums[n];
    console.log(`sum ${sum}`);
  }
  return expected + nums.length - sum;
}

console.log(missingNumber([3, 0, 1]));
