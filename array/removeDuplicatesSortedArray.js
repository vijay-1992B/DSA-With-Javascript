/*
Problem: Remove Duplicates from Sorted Array

Description:
Given a sorted array nums, remove the duplicates in-place 
such that each unique element appears only once.

Return the number of unique elements.

Approach:
- Use two pointers.
- One pointer (uniqueIndex) tracks position of last unique element.
- Traverse array using second pointer.
- If current element is greater than last unique element,
  increment uniqueIndex and update value.

Time Complexity:
O(n)

Space Complexity:
O(1) (in-place modification)
*/

var removeDuplicates = function(nums) {
  let uniqueIndex = 0;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[uniqueIndex]) {
      uniqueIndex++;
      nums[uniqueIndex] = nums[i];
    }
  }

  return uniqueIndex + 1;
};


// Example 
let nums = [0,0,1,1,1,2,2,3,3,4];
let k = removeDuplicates(nums);

console.log("Number of unique elements:", k);
console.log("Modified array:", nums.slice(0, k));
