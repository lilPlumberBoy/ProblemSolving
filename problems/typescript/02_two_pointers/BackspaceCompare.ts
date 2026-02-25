// Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.
// Note that after backspacing an empty text, the text will continue empty.
// Example 1:
// Input: s = "ab#c", t = "ad#c"
// Output: true
// Explanation: Both s and t become "ac".
// Example 2:
// Input: s = "ab##", t = "c#d#"
// Output: true
// Explanation: Both s and t become "".
// Example 3:
// Input: s = "a#c", t = "b"
// Output: false
// Explanation: s becomes "c" while t becomes "b".

function backspaceCompare(s: string, t: string): boolean {
  let si = s.length - 1;
  let ti = t.length - 1;
  let skipS = 0;
  let skipT = 0;
  while (si >= 0 || ti >= 0) {
    while (si >= 0) {
      if (s[si] === "#") {
        skipS++;
        si--;
      } else if (skipS > 0) {
        si--;
        skipS--;
      } else {
        break;
      }
    }
    while (ti >= 0) {
      if (t[ti] === "#") {
        skipT++;
        ti--;
      } else if (skipT > 0) {
        ti--;
        skipT--;
      } else {
        break;
      }
    }
    let char1 = s[si];
    let char2 = t[ti];
    console.log("comparing char1 to char2: ", [char1, char2]);
    if (char1 !== char2) {
      return false;
    }
    si--;
    ti--;
  }
  return true;
}

console.log(backspaceCompare("bxj##tw", "bxo#j##tw"));
// Output false
// Expected output true
