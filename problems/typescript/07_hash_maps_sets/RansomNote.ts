// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.
// Each letter in magazine can only be used once in ransomNote.
// Example 1:
// Input: ransomNote = "a", magazine = "b"
// Output: false
// Example 2:
// Input: ransomNote = "aa", magazine = "ab"
// Output: false
// Example 3:
// Input: ransomNote = "aa", magazine = "aab"
// Output: true

export function canConstruct(ransomeNote: string, magazine: string): boolean {
  const magazineHash = new Map<string, number>();
  for (const char of magazine) {
    magazineHash.set(char, ((magazineHash.get(char) ?? 0 )+ 1));
    console.log("hash has char, count", char, magazineHash.get(char));
  }
  for (const char of ransomeNote) {
    console.log("checking for ransom note char, ", char);
    const count = magazineHash.get(char) ?? 0;
    if (count == 0) {
      return false;
    } else {
      magazineHash.set(char, count - 1);
    }
  }
  return true;
}
