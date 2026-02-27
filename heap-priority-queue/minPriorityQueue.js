/*
------------------------------------------------------------
Topic: Implementation of Min Priority Queue (Using Binary Heap)
------------------------------------------------------------

Description:
This file contains the implementation of a MinPriorityQueue 


Min Heap Property:
The value of each parent node is always less than or equal 
to its children.

Heap Representation (Array Index Formula):
Left Child Index  = 2 * i + 1
Right Child Index = 2 * i + 2
Parent Index      = Math.floor((i - 1) / 2)

Supported Operations:
1. enqueue(val)  -> Insert a new element (O(log n))
2. dequeue()     -> Remove and return minimum element (O(log n))
3. front()       -> Get minimum element without removing (O(1))
4. size()        -> Return total number of elements (O(1))

Time Complexity:
Insertion   -> O(log n)
Deletion    -> O(log n)
Peek (front)-> O(1)

Space Complexity:
O(n)


------------------------------------------------------------
*/

class MinPriorityQueue {
  constructor() {
    this.heap = [];
  }

  enqueue(val) {
    this.heap.push(val);
    let lastIndex = this.heap.length - 1;
    this.heapifyUp(lastIndex);
  }

  heapifyUp(i) {
    while (i > 0) {
      let parent = Math.floor((i - 1) / 2);
      if (this.heap[i] < this.heap[parent]) {
        [this.heap[i], this.heap[parent]] = [this.heap[parent], this.heap[i]];
        i = parent;
      } else {
        break;
      }
    }
  }

  dequeue() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();
    let min = this.heap[0];
    let end = this.heap.pop();
    this.heap[0] = end;
    this.heapifyDown();
    return min;
  }

  heapifyDown() {
    let i = 0;
    let length = this.heap.length;
    while (true) {
      let left = 2 * i + 1;
      let right = 2 * i + 2;
      let smallest = i;
      if (left < length && this.heap[left] < this.heap[smallest]) {
        smallest = left;
      }

      if (right < length && this.heap[right] < this.heap[smallest]) {
        smallest = right;
      }

      if (smallest === i) break;
      [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]];
      i = smallest;
    }
  }

  front() {
    return this.heap[0];
  }

  size() {
    return this.heap.length;
  }
}

module.exports = MinPriorityQueue;
