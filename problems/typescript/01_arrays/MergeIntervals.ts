// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals,
// and return an array of the non-overlapping intervals that cover all the intervals in the input.
// Example 1:
// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].

// each pair, compare with temp, temp is the leftover interval from the last calc
// if new pair is within temp, increase temp interval
// if new pair is not within temp, or we run out of intervals, add temp to result

function mergeBad(intervals: number[][]): number[][] {
  let result: number[][] = [];
  let temp: number[] = [];
  while (intervals.length) {
    const current = intervals.pop()!;
    if (!temp.length) {
      temp = current!;
      // [8, 9],[1, 10],
    } else if (
      // if temp 0 lies within current 0 -> current 1
      (temp[0] >= current[0] && temp[0] <= current[1]) ||
      // if temp 1 lies within corrent 0 -> current 1
      (temp[1] <= current[1] && temp[1] >= current[0]) ||
      // if current is completely within temp
      (temp[0] <= current[0] && temp[1] >= current[0])
    ) {
      //   console.log(`overlapping: `);
      //   console.log(`temp[0]${temp[0]}`);
      //   console.log(`current[0]${current[0]}`);
      //   console.log(`temp[1]${temp[1]}`);
      //   console.log(`current[1]${current[1]}`);
      temp = [Math.min(temp[0], current[0]), Math.max(temp[1], current[1])];
    } else {
      //   console.log(`not overlap pushing to results ${temp}`);
      result.push(temp);
      temp = current;
    }
  }
  if (temp.length) {
    result.push(temp);
  }
  return result;
}

console.log(
  mergeBad([
    [2, 3],
    [4, 5],
    [6, 7],
    [8, 9],
    [1, 10],
  ]),
);

function merge(intervals: number[][]): number[][] {
  if (intervals.length <= 1){
    return intervals;
  }
  const sortedIntervals = [...intervals].sort((a,b)=>a[0] - b[0]);
  const merged: number[][] = [sortedIntervals[0]];

  for (let i=1;i<sortedIntervals.length;i++){
    const current = sortedIntervals[i];
    const lastMerged = merged[merged.length -1];
    if (current[0] <= lastMerged[1]) {
      lastMerged[1] = Math.max(lastMerged[1], current[1]);
    } else {
      merged.push(current);
    }
  }
  return merged;
}

console.log(
  merge([
    [2, 3],
    [4, 5],
    [6, 7],
    [8, 9],
    [1, 10],
  ]),
);
