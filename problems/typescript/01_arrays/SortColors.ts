// Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects
// of the same color are adjacent, with the colors in the order red, white, and blue.
// We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.
// You must solve this problem without using the library's sort function.
// Input: nums = [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]
// Example 2:
// Input: nums = [2,0,1]
// Output: [0,1,2]

// 1. itter through list and count number of occurrences
// 2. remake list in right order and right order of occurrences

function sortColors(nums: number[]): void {
  const count = new Array(3).fill(0);
  for (let i = 0; i < nums.length; i++) {
    count[nums[i]]++;
    // console.log(
    //   `i , count nums[i], nums i: ${i} , ${count[nums[i]]}, ${nums[i]}`,
    // );
  }
  //   console.log("counts:");
//   for (let coun of count) {
//     console.log(coun);
//   }
  //   (0, 1)
  nums.fill(0, 0, count[0]);
  //   (2, 3)
  nums.fill(1, count[0], count[0] + count[1]);
  //   (4, 5)
  nums.fill(2, count[0] + count[1], nums.length);
  //   console.log("nums");
  //   for (let num of nums) {
  //     console.log(num);
  //   }
}

sortColors([2, 0, 2, 1, 1, 0]);

function dutchFlagSolution(nums: number[]): void {
  // 0 -> low are the indicies of all 0's
  let low = 0;
  // low -> mid -1 are all the 1s
  let mid = 0;
  // mid -> high are unprocessed
  // high + 1 -> nums.length are all the 2s
  let high = nums.length-1;

  while (mid <= high) {
    if (nums[mid] === 0) {
      [nums[mid], nums[low]] = [nums[low], nums[mid]];
      low++;
      mid++;
    } else if (nums[mid] === 1) {
      mid++;
    } else {
      // === 2
      [nums[mid], nums[high]] = [nums[high], nums[mid]];
      // we are swapping in an unprocessed number, so do not itter mid
      high--;
    }
  }
//   console.log("nums");
//   for (let num of nums) {
//     console.log(num);
//   }
}

dutchFlagSolution([2, 0, 2, 1, 1, 0]);
