/*
Topic: Priority Queue

This file contains two implementations:

1. Priority Queue using Sorting (Brute Force)
2. Priority Queue using Min Heap (Optimized)

Comparison:
Sorting → Insert O(n log n)
Heap    → Insert O(log n)
*/

// Implementation 1: Using Sorting

class PriorityQueue {
  constructor() {
    this.queue = [];
  }

  enqueue(value, priority) {
    this.queue.push({ value, priority });
    this.queue.sort((a, b) => b.priority - a.priority); // Highest Priority First
  }

  dequeue() {
    if (this.isEmpty()) return null;
    return this.queue.shift(); // Remove the first item (Highest Priority)
  }

  peek() {
    return this.queue[0];
  }

  isEmpty() {
    return this.queue.length === 0;
  }
}

const pq = new PriorityQueue();
pq.enqueue("Fever", 2);
pq.enqueue("Accident", 5);
pq.enqueue("Headache", 1);

console.log(pq.queue);

// Implementation 2: Using Heap

class MaxPriorityQueue {
  constructor() {
    this.heap = [];
  }

  enqueue(value, priority) {
    this.heap.push({ value, priority });
    this.heapifyUp();
  }

  heapifyUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      let parent = Math.floor((index - 1) / 2);
      if (this.heap[index].priority < this.heap[parent].priority) break;
      this.swap(index, parent);
      index = parent;
    }
  }

  dequeue() {
    if (this.heap.length === 0) return null;
    let max = this.heap[0];
    let end = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = end;
      this.heapifyDown();
    }
    return max;
  }

  heapifyDown() {
    let index = 0;
    let length = this.heap.length;
    while (true) {
      let leftChild = 2 * index + 1;
      let rightChild = 2 * index + 2;
      let largest = index;

      if (
        leftChild < length &&
        this.heap[leftChild].priority > this.heap[largest].priority
      ) {
        largest = leftChild;
      }
      if (
        rightChild < length &&
        this.heap[rightChild].priority > this.heap[largest].priority
      ) {
        largest = rightChild;
      }
      if (largest === index) break;
      this.swap(index, largest);
      index = largest;
    }
  }

  front() {
    return this.heap.length > 0 ? this.heap[0] : null;
  }

  size() {
    return this.heap.length;
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  // swap helper
  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }
}

let pQ = new MaxPriorityQueue();
pQ.enqueue("Fever", 2);
pQ.enqueue("Headache", 1);
pQ.enqueue("Accident", 5);
pQ.dequeue();
