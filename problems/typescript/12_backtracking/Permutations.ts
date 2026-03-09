// Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.
// Example 1:
// Input: nums = [1,2,3]
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
// Example 2:
// Input: nums = [0,1]
// Output: [[0,1],[1,0]]
// Example 3:
// Input: nums = [1]
// Output: [[1]]

// Since all nums are unique the # of combinations will be the same as a factorial of the length
// n! combinations (n * n-1 * n-2) where n==length
function factorial(n: number): number {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

function permute(nums: number[]): number[][] {
  if (!nums) return [];
  const result: number[][] = [];
  function backtrack(path: number[], remaining: number[]) {
    if (remaining.length === 0) {
      // If no remaining numbers, add current path to result
      result.push([...path]);
    } else {
      for (let i = 0; i < remaining.length; i++) {
        // choose next number
        // 1
        path.push(remaining[i]);
        backtrack(path, remaining.slice(0, i).concat(remaining.slice(i + 1)));
        //       remaining = [1,2,3]:
        // - i = 0
        //     - remaining[0] is 1
        //     - remaining.slice(0, 0) is []
        //     - remaining.slice(1) is [2,3]
        //     - result: [].concat([2,3]) => [2,3]
        // - i = 1
        //     - remaining[1] is 2
        //     - remaining.slice(0, 1) is [1]
        //     - remaining.slice(2) is [3]
        //     - result: [1].concat([3]) => [1,3]
        // - i = 2
        //     - remaining[2] is 3
        //     - remaining.slice(0, 2) is [1,2]
        //     - remaining.slice(3) is []
        //     - result: [1,2].concat([]) => [1,2]

        // // Explore with the chosen number
        // backtrack
        path.pop(); // Un-choose number to backtrack
      }
    }
  }
  backtrack([], nums); // Initialize backtracking with an empty path
  return result;
}

console.log(permute([1, 2, 3]));
