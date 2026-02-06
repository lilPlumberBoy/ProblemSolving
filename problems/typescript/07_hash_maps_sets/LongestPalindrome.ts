// Given a string s which consists of lowercase or uppercase letters, return the length of the longest
// palindrome that can be built with those letters.
// Letters are case sensitive, for example, "Aa" is not considered a palindrome.
// Example 1:
// Input: s = "abccccdd"
// Output: 7
// Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.
// Example 2:
// Input: s = "a"
// Output: 1
// Explanation: The longest palindrome that can be built is "a", whose length is 1.

// Thought process
// A palindrom requires one char to have an odd number and all other chars to be even
// The odd char can also have an even number of instances but in the final palindrom

// Create a hashmap of the number of instances a char appears
// if the instances are >1 the longest palendrom will always include this char and extend the length by n%2 * 2 (the even amount of instances * 2)
// as soon as we hit an odd number of instances we set a flag to consider that char in the final palindrom.

function longestPalindrome(s: string): number {
  if (s.length === 0) {
    return 0;
  }
  const hashMap = new Map();
  for (const char of s) {
    const currentVal = hashMap.get(char) ?? 0;
    // hashMap[char] = currentVal + 1;
    hashMap.set(char, currentVal + 1);
    console.log("char found: ", char);
    console.log("hashmap of char updated: ", hashMap.get(char));
  }
  let totalLength = 0;
  let hasOdd = false;

  for (const n of hashMap.values()) {
    totalLength += Math.floor(n / 2) * 2;
    if (n % 2 === 1) hasOdd = true;
  }
  if (hasOdd) totalLength += 1;
  return totalLength;
}

// improved, lets adjust the length as we see the characters

function longestPalindromeImproved(s: string): number {
  if (s.length === 0) {
    return 0;
  }
  let length = 0;
  const seen = new Set<string>();
  for (const char of s) {
    if (seen.has(char)) {
      length += 2;
      seen.delete(char);
    } else {
      seen.add(char);
    }
  }
  if (seen.size > 0) {
    length += 1;
  }
  return length;
}
