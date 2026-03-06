/*
Topic: Last Stone Weight Problem (Leetcode 1046)

Approach:
- Create a MaxHeap from the array
- Run a while loop until heap size > 1
- Pop out two maximum elements from the heap
- If the difference of the two stones is greater than 0, push the result back into the heap
- Return the last remaining stone, otherwise return 0

Time Complexity:
Building Heap: O(n log n)
While loop: Runs at most n times and each dequeue/enqueue takes log n
Total Time Complexity: O(n log n)

Space Complexity:
O(n) for storing elements in the heap
*/

let stones = [4, 5, 7, 2, 8, 9];

var lastStoneWeight = function (stones) {
  let pq = new MaxPriorityQueue();

  // Build Max Heap
  for (let i = 0; i < stones.length; i++) {
    pq.enqueue(stones[i]);
  }

  while (pq.size() > 1) {
    let y = pq.dequeue();
    let x = pq.dequeue();

    if (y - x > 0) {
      pq.enqueue(y - x);
    }
  }

  return pq.size() ? pq.dequeue().value : 0;
};
