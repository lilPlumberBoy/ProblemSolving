// Given two binary strings a and b, return their sum as a binary string.
// Need to add first chars in string and carry over remainder
// Can convert binary to number with Number(string) and back with String(number)
// Input: a = "11", b = "1"
// Output: "100"

function addBinary(a: string, b: string): string {
  let carry = 0;
  let result = "";
  let i = a.length - 1;
  let j = b.length - 1;
  while (i >=0 || j >=0 || carry) {
    const bitA = i >=0 ? parseInt(a[i]) : 0;
    const bitB = j >=0 ? parseInt(b[j]) : 0;
    console.log(bitA);
    console.log(bitB);
    const current = bitA + bitB + carry;
    result = (current % 2).toString() + result;
    carry = Math.floor(current / 2);
    i--;
    j--;
  }

  return result;
}

console.log(addBinary("11", "1"));
