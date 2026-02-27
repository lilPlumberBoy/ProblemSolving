// Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n),
// ans[i] is the number of 1's in the binary representation of i.
// Example 1:
// Input: n = 2
// Output: [0,1,1]
// Explanation:
// 0 --> 0
// 1 --> 1
// 2 --> 10
// Example 2:
// Input: n = 5
// Output: [0,1,1,2,1,2]
// Explanation:
// 0 --> 0
// 1 --> 1
// 2 --> 10
// 3 --> 11
// 4 --> 100
// 5 --> 101

function countBits(n: number): number[] {
  const output: number[] = [];
  let i=0;
  while (i <=n) {
    const binary = i.toString(2);
    console.log("i to binary: (i, binary) ", [i, binary]);
    let count = 0;
    for (let char of binary) {
      if (char === "1") count++;
    }
    output.push(count);
    i++;
  }
  return output;
}

// below is done in O(n) time complexity
function countBits2(n: number): number[] {
  const ans: number[] = Array(n + 1).fill(0);

  for (let i = 1; i <= n; i++) {
    // dynamic programming approach:
    // get a previous calculation on everything but the last bit of n
    // check bitwise & for i and 1 (this only returns 1 if the final bit is 1 in i)
    ans[i] = ans[i >> 1] + (i & 1);
  }

  return ans;
}

console.log(countBits(5));
console.log(countBits2(5));
