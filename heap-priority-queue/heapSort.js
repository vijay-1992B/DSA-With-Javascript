/*
Topic: Heap Sort Algorithm (Using Max Heap)

Description:
This file contains the implementation of Heap Sort algorithm
using Max Heap approach.

Algorithm Steps:
1. Build a Max Heap from the given array.
2. Swap the root (largest element) with the last element.
3. Reduce heap size.
4. Heapify the root again.
5. Repeat until array is sorted.

Time Complexity:
- Best Case: O(n log n)
- Average Case: O(n log n)
- Worst Case: O(n log n)

Space Complexity:
- O(1) (In-place sorting)

Start from Math.floor(n/2) - 1 because 
all nodes after this index are leaf nodes.
Leaf nodes already satisfy heap property.
*/

let arr = [5, 8, 2, 6, 1, 9, 4];

function heapSort(arr) {
  let n = arr.length;

  // create a maxheap
  for (let i = n - 1; i >= 0; i--) {
    heapifyDown(arr, i, n);
  }

  // sort the array
  for (let i = Math.floor(n / 2 - 1); i >= 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    heapifyDown(arr, 0, i);
  }
  return arr;
}

function heapifyDown(arr, i, n) {
  let leftChild = 2 * i + 1;
  let rightChild = 2 * i + 2;
  let largest = i;

  if (leftChild < n && arr[leftChild] > arr[largest]) {
    largest = leftChild;
  }

  if (rightChild < n && arr[rightChild] > arr[largest]) {
    largest = rightChild;
  }

  if (largest != i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    heapifyDown(arr, largest, n);
  }
}

let sortedArr = heapSort(arr);
console.log(sortedArr);
