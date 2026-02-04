// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]]
// uch that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
// Notice that the solution set must not contain duplicate triplets.
// Example 1:
// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation:
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.
// Example 2:
// Input: nums = [0,1,1]
// Output: []
// Explanation: The only possible triplet does not sum up to 0.
// Example 3:
// Input: nums = [0,0,0]
// Output: [[0,0,0]]
// Explanation: The only possible triplet sums up to 0.

// function threeSum(nums: number[]): number[][] {
//   let output: number[][] = [];
//   nums.sort((a,b)=>a-b);
//   for (let i = 0; i < nums.length - 2; i++) {
//     if (nums[i] === nums[i - 1]) continue;
//     for (let j = i + 1; j < nums.length - 1; j++) {
//       for (let k = j + 1; k < nums.length; k++) {
//         const total = nums[i] + nums[k] + nums[j];
//         console.log("indexes: ", [i, j, k]);
//         if (total == 0) {
//           output.push([nums[i], nums[k], nums[j]]);
//           console.log("found triple: ", [nums[i], nums[k], nums[j]]);
//           j++ while nums[j] === nums[j-1];
//         }
//       }
//     }
//   }
//   return output;
// }

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
// Input
// [-100, -70, -60, 110, 120, 130, 160];
// Output
// [
//   [-100, -60, 160],
//   [-70, -60, 130],
// ];


function threeSum(nums: number[]): number[][] {
    let output: number[][] = [];
    nums.sort((a,b) => a-b);
    for (let i=0;i<nums.length-2;i++){
        // since we are sorted check if we've already check for the number at nums[i]
        if (i > 0 && nums[i] === nums[i-1]) continue;
        let j = i + 1;
        let k = nums.length - 1;
        while (j < k) {
            const sum = nums[i] + nums[j] + nums[k];
            if (sum === 0){
                output.push([nums[i], nums[j], nums[k]]);
                j++;
                k--;
                while (j < k && nums[j] === nums[j - 1]) j++;
                while (j < k && nums[k] === nums[k + 1]) k--;
            }
            // Since the list is sorted if we want to increase the sum we move the left pointer forward
            else if (sum<0){
                j++;
            }
            // If we want to decrease the sum we move the right pointer to the right
            else {
                k--;
            }
        }
    }
    return output;
}
