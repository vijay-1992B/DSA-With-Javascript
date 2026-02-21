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
