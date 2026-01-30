// # Given an array nums of size n, return the majority element.

// # The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// # Example 1:

// # Input: nums = [3,2,3]
// # Output: 3
// # Example 2:

// # Input: nums = [2,2,1,1,1,2,2]
// # Output: 2

// Using moores voting algo


export function majorityElement(
    nums: [number]
): number {
        let candidate: number = 0;
        let vote = 0;
        for(let i=0; i < nums.length; i++){
            if (vote == 0)
                candidate = nums[i];

            if (candidate != nums[i]){
                vote -= 1;
            }  
            else{
                vote += 1;
            }     
        }
        return candidate;
}

