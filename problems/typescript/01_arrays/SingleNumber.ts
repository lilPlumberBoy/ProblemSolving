// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
// You must implement a solution with a linear runtime complexity and use only constant extra space.
// Example 1:
// Input: nums = [2,2,1]
// Output: 1

/*
Bitwise XOR (^) operator compares corresponding bits of two numbers,
returning 1 if they are different and 0 if they are the same
*/

function singleNumber(nums: number[]): number {
  let result = 0;
  for (const n of nums) {
    console.log(`n: ${n}, result before: ${result}`);
    result ^= n;
    console.log(`result after ${result}`);
  }
  return result;
}

console.log(singleNumber([4, 1, 2, 1, 2]));
