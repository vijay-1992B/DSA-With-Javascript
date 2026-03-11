/**
  Problem: Top K Frequent Elements
 
 
  Approach:
  1. Use a HashMap (Object) to count the frequency of each number.
  2. Use a Min Priority Queue (Min Heap) based on frequency.
  3. Insert each element with its frequency into the heap.
  4. Maintain the heap size to `k` by removing the smallest frequency element whenever the size exceeds `k`.
  5. At the end, the heap contains the `k` most frequent elements.
 
  Time Complexity:
  O(n log k)
  - Counting frequency: O(n)
  - Heap operations: O(n log k)
 
  Space Complexity:
  O(n) for the frequency map and heap.
 
  Example:
  Input: nums = [1,1,1,2,2,3], k = 2
  Output: [1,2]
 
 
 */

var topKFrequent = function (nums, k) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    if (!map[nums[i]]) map[nums[i]] = 0;
    map[nums[i]]++;
  }

  let pq = new MinPriorityQueue((x) => x.freq);
  for (let key in map) {
    pq.enqueue({ val: key, freq: map[key] });
    if (pq.size() > k) {
      pq.dequeue();
    }
  }
  return pq.toArray().map((x) => Number(x.val));
};
