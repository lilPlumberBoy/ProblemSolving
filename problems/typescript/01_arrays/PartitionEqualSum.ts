// Given an integer array nums, return true if you can partition the array into 
// two subsets such that the sum of the elements in both subsets is equal or false otherwise.
// Example 1:
// Input: nums = [1,5,11,5]
// Output: true
// Explanation: The array can be partitioned as [1, 5, 5] and [11].
// Example 2:
// Input: nums = [1,2,3,5]
// Output: false
// Explanation: The array cannot be partitioned into equal sum subsets.

// The sum to compare has to be the total sum of the array / 2;
// First we create an array dp where dp[i] will be true if a subset sum of i
// is achievable with the current subset of numbers.
// The goal is to check if dp[total_sum / 2] becomes true
// For each number in the array we iterate through possible sums and update dp,
// if a sum i can be achieved by including the current number we set dp[i] = True;

function canPartition(nums: number[]): boolean{
    // first we find the sum
    const total_sum = nums.reduce((a,b)=>a+b, 0);
    // if total is odd matching pair would be impossible
    if (total_sum % 2 !== 0){
        return false
    }
    let mid = total_sum / 2;
    let dp: boolean[] = new Array(mid+1).fill(false);
    // 0 is always true as empty array should return true;
    dp[0] = true;
    for (let num of nums){
        for(let i=mid; i>= num; i--){
            // if dp already found this combo dont do anything
            // if not check if a sum without this number was found
            dp[i] = dp[i] || dp[i-num];
        }
        // if we find one combo that equals mid, we know the rest of
        // the numbers not included in the combo aslo equal it
        if (dp[mid]){
            return true;
        }
    }
    return dp[mid];
}