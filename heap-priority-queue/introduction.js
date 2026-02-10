/*
=================================
        HEAP INTRODUCTION
=================================

A Heap is a special type of Binary Tree.

👉 It follows 2 main rules:

1️⃣ Heap is a COMPLETE BINARY TREE
   - All levels are filled
   - Last level fills from LEFT to RIGHT

2️⃣ Heap Property (Two Types)

   🔹 Max Heap:
      Parent node is GREATER than its children
      Example:
            50
           /  \
         30    40

   🔹 Min Heap:
      Parent node is SMALLER than its children
      Example:
            10
           /  \
         20    30

---------------------------------

   Advantages of Heap
- Time complexity to finding the maximum value in Max Heap is O(1)
- Time complexity to finding the minimum value in Min Heap is O(1)
- Time complexity to Inserting element in Heap is O(log n)
- Time complexity to Deleting element in Heap is O(log n)

---------------------------------

   Array representation of Heap:

 We are using array’s to represent heap.
 We can also represent heap using pointers or references.
   
 MinHeap Representation
  Using Level Order traversal

            1
           / \
         3     2
        /  \
       7     5

       [1, 3, 2, 7, 5]

 arr[0] = smallest_Element
 smallest_Element =  O(1) Time Complexity
  heap[0] = O(1) 

  ---------------------------------

   Binary Tree representation using Array
   All the empty spaces are represented by '#'

            2
          /   \
       10       5
               /  \
             7      3

      
       [2, 10, 5, #, #, 7, 3]

   ---------------------------------

    MaxHeap Representation

           
         50
        /  \
      30     20
     /  \    /  \
   10    15 8     9
  /  \
 5     3

 [50, 30, 20, 10, 15, 8, 9, 5, 3]

  maxElement = heap[0]
        
  Have to find Children of ith node:
  Formula’s based on index 1
     left = 2 * i

    right = 2 * i + 1

    parent = ith
     ⌊ i / 2 ⌋

Formula’s based on index 0
left = (2*i + 1)

right = (2*i + 2)

parent = (i - 1) / 2

   Operations in Heap

      Insert
   We need to make sure that we follow these two rules:
    1. Complete Binary Tree
    2. Parent value <= children

   Extract / Delete
   Only Extract (delete) from the root/top/front.
   In minHeap: The minimum value will be extracted from the heap.
   In maxHeap: The maximum value will be extracted from the heap.
   Peek: This also happens at top.


   ==== Heapify ===
   The process of moving these values up and mainting the property of heap is known as Heapify. 
   Basically, restructuring or rearranging the elements inside the binary tree so that it becomes a Heap.




This file is only for understanding.
We are NOT implementing heap yet.
That will come next step by step.
*/
