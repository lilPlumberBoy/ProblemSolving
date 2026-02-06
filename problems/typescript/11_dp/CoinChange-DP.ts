// You are given an integer array coins representing coins of different denominations and an integer
// amount representing a total amount of money.
// Return the fewest number of coins that you need to make up that amount. If that amount of money
// cannot be made up by any combination of the coins, return -1.
// You may assume that you have an infinite number of each kind of coin.
// Example 1:
// Input: coins = [1,2,5], amount = 11
// Output: 3
// Explanation: 11 = 5 + 5 + 1
// Example 2:
// Input: coins = [2], amount = 3
// Output: -1
// Example 3:
// Input: coins = [1], amount = 0
// Output: 0

function coinChangeWrong(coins: number[], amount: number): number {
  coins = coins.sort((a, b) => a - b);
  if (amount === 0) return 0;
  let remainder = amount;
  let output = 0;
  while (remainder) {
    if (!coins || coins.length === 0) {
      // if we are out of coins but have a remainder we cannot make the change
      return -1;
    }
    // ... spreads the array into a list of args
    // why the fuck do I have to do this I have no clue
    const maxCoin = coins.pop()!;
    console.log("maxCoin: ", maxCoin);
    // integer in this division is the amount of the largest coin we can use
    output += Math.floor(remainder / maxCoin);
    console.log("output now at: ", output);
    remainder = remainder % maxCoin;
    console.log("remainder now at: ", remainder);
  }
  return output;
}

// console.log(coinChange([1, 2, 5], 11));



function coinChange(coins: number[], amount: number): number {
    if(amount === 0) return 0;

    // Initiall all indicies are set to inf, so if visited the .min wil always replace the value
    // we do +1 to the amount because i of 0 will be used 
    const cache = new Array(amount+1).fill(Infinity);
    cache[0] = 0;
    for(const coin of coins) {
        for(let i = coin; i <= amount; i++) {
            // when a cache at i=coin is first visited, its current val is inf and cache[i-coin] will be 0. 
            // the + 1 signifies that 1 coin was used to get here, when we itterate by 1 if any previous cache is found through i-coin
            // it mean another result filled that space with the amount of coins it took to get there.
            cache[i] = Math.min(cache[i], cache[i-coin] + 1);
        }
    }
    if(cache[amount] === Infinity) return -1;
    return cache[amount];
};
