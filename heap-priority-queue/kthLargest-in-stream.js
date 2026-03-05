/**
 Topic: Kth Largest Element in a Stream
Problem: LeetCode 703
Data Structure: Min Heap (MinPriorityQueue)


Approach:
- Maintain a Min Heap of size k.
- Insert new elements into the heap.
- If heap size exceeds k, remove the smallest element.
- The root of the heap always represents the kth largest element.

Time Complexity:
Constructor: O(n log k)
add(): O(log k)

Space Complexity:
O(k)

 **/

const MinPriorityQueue = require("./minPriorityQueue");

var KthLargest = function (k, nums) {
  this.heap = new MinPriorityQueue();
  this.k = k;
  for (let i = 0; i < nums.length; i++) {
    this.add(nums[i]);
  }
};

KthLargest.prototype.add = function (val) {
  this.heap.enqueue(val);
  if (this.heap.size() > this.k) {
    this.heap.dequeue();
  }
  return this.heap.front();
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
