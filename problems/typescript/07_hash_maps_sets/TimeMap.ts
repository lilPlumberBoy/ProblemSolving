// Design a time-based key-value data structure that can store multiple values
// for the same key at different time stamps and retrieve the key's value at a certain timestamp.
// Implement the TimeMap class:
// TimeMap() Initializes the object of the data structure.
// void set(String key, String value, int timestamp) Stores the key key with the value
// value at the given time timestamp.
// String get(String key, int timestamp) Returns a value such that set was called previously,
// with timestamp_prev <= timestamp. If there are multiple such values, it returns the value
// associated with the largest timestamp_prev. If there are no values, it returns "".
// Example 1:
// Input
// ["TimeMap", "set", "get", "get", "set", "get", "get"]
// [[], ["foo", "bar", 1], ["foo", 1], ["foo", 3], ["foo", "bar2", 4], ["foo", 4], ["foo", 5]]
// Output
// [null, null, "bar", "bar", null, "bar2", "bar2"]
// Explanation
// TimeMap timeMap = new TimeMap();
// timeMap.set("foo", "bar", 1);  // store the key "foo" and value "bar" along with timestamp = 1.
// timeMap.get("foo", 1);         // return "bar"
// timeMap.get("foo", 3);         // return "bar", since there is no value corresponding to foo at timestamp 3 and timestamp 2, then the only value is at timestamp 1 is "bar".
// timeMap.set("foo", "bar2", 4); // store the key "foo" and value "bar2" along with timestamp = 4.
// timeMap.get("foo", 4);         // return "bar2"
// timeMap.get("foo", 5);         // return "bar2"

class TimeMap {
  private map: Map<string, [number[], string[]]>; // Key -> [Timestamps, Values]
  constructor() {
    this.map = new Map();
  }

  set(key: string, value: string, timestamp: number): void {
    if (!this.map.has(key)) {
      this.map.set(key, [[], []]); // Init with empty arrays
    }
    const [timestamps, values] = this.map.get(key)!;
    const index = this.binarySearch(timestamps, timestamp);
    // binary searc returns the index timestampt.length in the case where the timestamp is
    // inserted at the end, so we nee to first check that the index exists befoe checking
    // if its equal to the target
    if (index <= timestamps.length && timestamps[index] === timestamp) {
      values[index] = value; // update the value if timestamp is found
    } else {
      // splice takes an index and inserts given vars at that index
      timestamps.splice(index, 0, timestamp);
      values.splice(index, 0, value);
    }
  }

  // String get(String key, int timestamp) Returns a value such that set was called previously,
  // with timestamp_prev <= timestamp. If there are multiple such values, it returns the value
  // associated with the largest timestamp_prev. If there are no values, it returns "".
  get(key: string, timestamp: number): string {
    if (!this.map.has(key)) {
      return "";
    }
    const [timestamps, values] = this.map.get(key)!;
    const index = this.binarySearch(timestamps, timestamp);
    // if the binary search returns 0 it means that the given timestamp is smaller
    // than all previously set timestamps, which invalidates the get.
    return index > 0 ? values[index - 1] : "";
  }

  private binarySearch(timestamps: number[], target: number): number {
    let left = 0;
    let right = timestamps.length;
    while (left < right) {
      let mid = Math.floor(left + (right - left) / 2);
      if (timestamps[mid] <= target) {
        // This approach finds the first index where timestamp is not longer valid
        left = mid + 1;
      } else {
        right = mid;
      }
    }
    return left;
  }
}

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */
