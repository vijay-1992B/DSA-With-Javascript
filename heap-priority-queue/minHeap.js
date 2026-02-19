/*
Topic: Min Heap Implementation (Insert & Extract Operations)

Description:
This file contains a complete implementation of a Min Heap data structure.
It includes insert and extract (remove minimum) operations along with
heapifyUp and heapifyDown methods to maintain the heap property.

Min Heap Property:
Parent value should always be less than or equal to its children.

Formulas:
Left Child Index  = 2 * i + 1
Right Child Index = 2 * i + 2
Parent Index      = Math.floor((i - 1) / 2)

Operations:
Insert   → Adds element to heap
Extract  → Removes and returns minimum element (root)

Time Complexity:
Insert  → O(log n)
Extract → O(log n)

Space Complexity:
O(n) for storing heap
O(log n) auxiliary space (recursive heapifyDown)
*/

class MinHeap {
  constructor() {
    this.heap = [];
  }

  getLeftChildrenIndex(i) {
    return 2 * i + 1;
  }

  getRightChildrenIndex(i) {
    return 2 * i + 2;
  }

  getParentIndex(i) {
    return Math.floor((i - 1) / 2);
  }

  insert(val) {
    this.heap.push(val);
    let lastIndex = this.heap.length - 1;
    this.heapifyUp(lastIndex);
  }

  heapifyUp(i) {
    while (i > 0) {
      let parentIndex = this.getParentIndex(i);
      if (this.heap[i] < this.heap[parentIndex]) {
        [this.heap[i], this.heap[parentIndex]] = [
          this.heap[parentIndex],
          this.heap[i],
        ];
        i = parentIndex;
      } else {
        break;
      }
    }
  }

  extract() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    let min = this.heap[0];
    let lastIndex = this.heap.length - 1;
    [this.heap[lastIndex], this.heap[0]] = [this.heap[0], this.heap[lastIndex]];
    this.heap.pop();
    this.heapifyDown(0);
    return min;
  }

  heapifyDown(i) {
    let leftChild = this.getLeftChildrenIndex(i);
    let rightChild = this.getRightChildrenIndex(i);
    let smallest = i;
    let length = this.heap.length;

    if (leftChild < length && this.heap[leftChild] < this.heap[smallest]) {
      smallest = leftChild;
    }

    if (rightChild < length && this.heap[rightChild] < this.heap[smallest]) {
      smallest = rightChild;
    }

    if (smallest != i) {
      [this.heap[smallest], this.heap[i]] = [this.heap[i], this.heap[smallest]];
      this.heapifyDown(smallest);
    }
  }
}

let heap = new MinHeap();

heap.insert(5);
heap.insert(4);
heap.insert(3);
heap.insert(1);
heap.extract();
heap.extract();
console.log("Final Min Heap:", heap.heap);
