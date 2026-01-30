# Given an array nums of size n, return the majority element.

# The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

# Example 1:

# Input: nums = [3,2,3]
# Output: 3
# Example 2:

# Input: nums = [2,2,1,1,1,2,2]
# Output: 2

class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        nums.sort()
        return nums[len(nums)//2]
    
class HashSolution:
    def majorityElement(self, nums: List[int]) -> int:
        map = dict()
        
        for num in nums:
            map[num] += 1
        for key, value in map:
            if value > len(nums) // 2:
                return key
        return 0