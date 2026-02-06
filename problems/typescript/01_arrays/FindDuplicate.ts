// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
function containsDuplicate(nums: number[]): boolean {
    let numset = [...new Set(nums)];
    return nums.length != numset.length
};