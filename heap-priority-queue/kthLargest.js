/*
Topic: Find the Kth Largest Element in an Array

Description:
This file contains the implementation to find the Kth largest element
using a Min Heap (Min Priority Queue).

Approach:
1. Create a Min Heap.
2. Traverse the array.
3. Insert each element into the heap.
4. If heap size becomes greater than k, remove the smallest element.
5. At the end, the root of the Min Heap will be the Kth largest element.

Why Min Heap?
- We maintain only k largest elements in the heap.
- The smallest among them (heap root) will be the Kth largest overall.

Time Complexity:
- O(n log k)
  Because:
  - We iterate n times.
  - Each insertion/deletion in heap takes log k time.

Space Complexity:
- O(k)
  Because heap stores at most k elements.
*/

const MinPriorityQueue = require("./minPriorityQueue");

let arr = [3, 2, 3, 1, 2, 4, 5, 5, 6];
let k = 4;

const findKthLatgest = (arr, k) => {
  let pq = new MinPriorityQueue();
  for (let i = 0; i < arr.length; i++) {
    pq.enqueue(arr[i]);
    if (pq.size() > k) {
      pq.dequeue();
    }
  }
  return pq.front();
};

console.log(findKthLatgest(arr, k));
