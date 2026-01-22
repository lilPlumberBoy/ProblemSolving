from typing import List

# class Solution:
#     def twoSum(self, nums: List[int], target: int) -> List[int]:
#         for index, num in enumerate(nums):
#             diff = target - num
#             if diff in nums:
#                 if index == nums.index(diff):
#                     continue
#                 return [index, nums.index(diff)]
            
            
            
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        numMap = {}
        n = len(nums)
        for i in range(n):
            diff = target - nums[i]
            # 2. Then we check if the compliment has already been found
            if diff in numMap:
                return(i, numMap[diff])
            # 1. We fill the map with each elements index as we go
            numMap[nums[i]] = i
                
            
        
            
# class SolutionLeetCode:
#     def twoSum(self, nums: List[int], target: int) -> List[int]:
#         numMap = {}
#         n = len(nums)

#         for i in range(n):
#             complement = target - nums[i]
#             # if complement in numMap:
#             #     return [numMap[complement], i]
#             numMap[nums[i]] = i

#         return []  # No solution found
