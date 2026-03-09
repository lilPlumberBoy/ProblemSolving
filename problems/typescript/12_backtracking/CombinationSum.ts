// Given an array of distinct integers candidates and a target integer target, return a list of
// all unique combinations of candidates where the chosen numbers sum to target. You may return
// the combinations in any order.
// The same number may be chosen from candidates an unlimited number of times. Two combinations are
// unique if the frequency of at least one of the chosen numbers is different.
// The test cases are generated such that the number of unique combinations that sum up to target is
// less than 150 combinations for the given input.
// Example 1:
// Input: candidates = [2,3,6,7], target = 7
// Output: [[2,2,3],[7]]
// Explanation:
// 2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
// 7 is a candidate, and 7 = 7.
// These are the only two combinations.

function combinationSum(candidates: number[], target: number): number[][] {
  const result: number[][] = [];

  function findCombination(
    index: number,
    target: number,
    current: number[],
  ): void {
    // if we have reached the target, spread the current combination and return
    if (target === 0) {
      result.push([...current]);
      return;
    }
    // Try each candidate starting at index
    for (let i = index; i < candidates.length; i++) {
      // only proceed with target if it doesnt exceed the target
      if (candidates[i] <= target) {
        // push our current num as a candidate then recursively look for more combos
        current.push(candidates[i]);
        findCombination(i, target - candidates[i], current);
        // Backtrack: remove the last added number to try other combinations
        // since we would push to results and return if a valid combination was found, we pop the last
        // added current, since it did not result in a valid combo.
        current.pop();
      }
    }
  }
  findCombination(0, target, []);

  return result;
}

console.log(combinationSum([2, 3, 6, 7], 7));
// Expected Output: [[2,2,3],[7]]
