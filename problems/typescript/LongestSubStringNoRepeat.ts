// Given a string s, find the length of the longest substring without duplicate characters.

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3. Note that "bca" and "cab" are also correct answers.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

function lengthOfLongestSubstring(s: string): number {
  let length = 0;
  let characterMap = new Map();
  let leftPointer = 0;
  for (let rightPointer = 0; rightPointer < s.length; rightPointer++) {
    const character = s[rightPointer];

    if (characterMap.has(character)) {
      // set the left index to where we found the repeated character + 1
      leftPointer = Math.max(leftPointer, characterMap.get(character) + 1);
    }
    length = Math.max(length, rightPointer - leftPointer + 1);
    characterMap.set(character, rightPointer);
  }
  return length;
}
