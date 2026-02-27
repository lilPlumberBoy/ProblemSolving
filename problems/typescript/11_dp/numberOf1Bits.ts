// Given a positive integer n, write a function that returns the number of set bits in its binary representation (also known as the Hamming weight).
// Example 1:
// Input: n = 11
// Output: 3
// Explanation:
// The input binary string 1011 has a total of three set bits.

function hammingWeightToMuchStorageUsed(n: number): number {
  const ans: number[] = Array(n + 1).fill(0);

  for (let i = 1; i <= n; i++) {
    ans[i] = ans[i >> 1] + (i & 1);
    // console.log(`i: ${i}, ans: ${ans[i]}`);
  }
  return ans[n];
}

function hammingWeight(n: number): number {
  n = n >>> 0; // treat as unsigned 32-bit
  let count = 0;
  while (n !== 0) {
    count += n & 1;
    // >>> unsigned right shift assignment, each loop
    // counts one bit and then shifts to the next one
    // >>> does: 
    /*
    1. Moves all bits in n right by 1
    2. drops the least significant bit
    3. inserts 0 to the left (highest bit is always 0 after shift)
    */
    n >>>= 1;
  }
  return count;
}
