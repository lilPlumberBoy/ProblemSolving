// Reverse bits of a given 32 bits signed integer.

// Example 1:

// Input: n = 43261596

// Output: 964176192

// Explanation:

// Integer	Binary
// 43261596	00000010100101000001111010011100
// 964176192	00111001011110000010100101000000

function reverseBits(n: number): number {
  // A<<1 (Left Shift) moves all the bits in the first operand to the left by the number of places specified in the
  // second operand. New bits are filled with 0's. Shifting a value left by 1 is equivalent to multiplying by 2.
  // Shifting by 2 places is the same as multiplying by 4

  // A>>1 (Right Shift) moves all the bits in the first operand to the right by the number of places specified.

  // A>>>1 (Right Shift with Zero) same as right shift but all bits shifted on the left are 0.

  // A|=B (bitwise or) perform boolean OR operation on each bit of both args. For our case this fills in 1's where
  // appropriate since our answer will be filled with 0's to start

  // the number is always 32bits so we know to itterate 32 times

  let ans = 0;
  for (let i = 0; i < 32; i++) {
    ans |= (n & 1) << (31 - i);
    n >>= 1;
  }
  return ans >>> 0;
}

