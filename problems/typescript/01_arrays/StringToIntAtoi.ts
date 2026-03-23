// Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer.

// The algorithm for myAtoi(string s) is as follows:

// Whitespace: Ignore any leading whitespace (" ").
// Signedness: Determine the sign by checking if the next character is '-' or '+', assuming positivity if neither present.
// Conversion: Read the integer by skipping leading zeros until a non-digit character is encountered or the end of the string
// is reached. If no digits were read, then the result is 0.
// Rounding: If the integer is out of the 32-bit signed integer range [-231, 231 - 1], then round the integer to remain in
// the range. Specifically, integers less than -231 should be rounded to -231, and integers greater than 231 - 1 should be
// rounded to 231 - 1.
// Return the integer as the final result.

const minInt32 = -Math.pow(2, 31);
const maxInt32 = -(minInt32 + 1);
const signMultipliers = {
  "+": 1,
  "-": -1,
};

function myAtoi(s: string): number {
  let num: number = 0;
  let signMultiplier = 1;
  let started = false;

  for (let char of s) {
    if (!started && char === " ") {
      continue;
    }
    const isNumeric = char >= "0" && char <= "9";
    if (!isNumeric) {
      if (!started && char in signMultipliers) {
        started = true;
        signMultiplier = signMultipliers[char];
        continue;
      }
      break;
    }
    started = true;
    const ascii = char.codePointAt(0);
    // since ASCII for '0' is 48, ascii - 48 will return the actual number for the digit
    const digit = ascii! - 48;
    // Why does below not work?
    //   if (signMultiplier > 0 && digit > maxInt32) return maxInt32;
    //   if (signMultiplier < 0 && digit < minInt32) return minInt32;

    // We do the below check each time so the overflow number is never actually stored
    // I dont get the - digit / 10 here
    if (signMultiplier > 0 && num > (maxInt32 - digit) / 10) return maxInt32;
    if (signMultiplier < 0 && -num < (minInt32 + digit) / 10) return minInt32;

    // append digit to end of num
    num *= 10;
    num += digit;
  }

  return num * signMultiplier;
}
