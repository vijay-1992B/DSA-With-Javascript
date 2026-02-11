/*
Topic: Min Heap - Insert Operation

Description:
This file contains implementation of insert operation in a Min Heap.

Min Heap Property:
Parent value should always be less than or equal to its children.

Formulas:
Left Child Index  = 2 * i + 1
Right Child Index = 2 * i + 2
Parent Index      = Math.floor((i - 1) / 2)

Time Complexity:
Insert → O(log n)

Space Complexity:
O(1) extra space
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
}

let heap = new MinHeap();
heap.insert(10);
heap.insert(12);
heap.insert(2);
heap.insert(30);
heap.insert(1);
heap.insert(4);

console.log("Final Min Heap:", heap.heap);
