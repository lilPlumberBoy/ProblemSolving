// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// Example 1:

// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps
// Example 2:

// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step

// You are climbing a staircase. Each time you can either climb 1 or 2 steps. When you take one step,
// the value of n will be reduced to n-1 and similarly if you take 2 steps it will reduce to n-2.
// Thus finding the number of ways becomes same as the finding the nth fibonacci number.

// To get to step n, your last move can only be:

//   1. a 1‑step from n‑1
//   2. a 2‑step from n‑2

//   These are the only possibilities because you can only move 1 or 2 steps.

// Approach 1: Memoization

function climbStairs(n: number): number {
  if (n <= 1) {
    return 1;
  }
  // We fill the array with values that can never be correct
  const dp: number[] = new Array(n + 1).fill(-1);
  return climbStairsHelper(n, dp);
}

function climbStairsHelper(n: number, dp: number[]): number {
  // The last itteration of the recursion is n=1, we know that this only has 1 possible combination
  // Also when n[2] is calculated it looks for n[2-1] -> [1] and n[2-2] -> [0]. Both return 1 so the possible combinations is 2
  if (n <= 1) {
    return 1;
  }

  // If this slot has been calculated return the value
  if (dp[n] !== -1) {
    return dp[n];
  }
  // Recursivly visit every value up to n, use the results of previous calculations and only caulate the current extra options since the last step.
  dp[n] = climbStairsHelper(n - 1, dp) + climbStairsHelper(n - 2, dp);
  return dp[n];
}

// Approach 2: Tabulation

function climbStairsTabulation(n: number): number {
  const tab: number[] = new Array(n + 1).fill(0);
  if (n >= 0) tab[0] = 1;
  if (n >= 1) tab[1] = 1;

  for (let i = 2; i <= n; i++) tab[i] = tab[i - 1] + tab[i - 2];
  return tab[n];
}
