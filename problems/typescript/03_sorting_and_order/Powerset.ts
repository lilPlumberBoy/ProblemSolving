function subsets(nums: number[]): number[][] {
  const result: Set<Array<number>> = new Set();

  const search = (s: Array<number>, index: number) => {
    result.add(s);

    for (let i = index; i < nums.length; i++) {
      search([...s, nums[i]], i + 1);
    }
  };

  search([], 0);

  return Array.from(result);
}

console.log(subsets([1, 2, 3, 4]));
