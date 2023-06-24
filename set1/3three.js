// Code Challenges (Set 1)
// Question (3)

// Write a function named twoSum which takes two parameters: nums
// and target. Given an array of integers nums and an integer target,
// return indices of the two numbers such that they add up to the target.
// You may assume that each input would have exactly one solution, and
// you may not use the same element twice.

// You can return the answer in any order.


// Solution:

const twoSum = (nums, target) => {
    for (let i = 0; i < (nums.length) - 1; i++) {
        for (let j = (i + 1); j < (nums.length); j++) {
            if ((nums[i] + nums[j]) === target) return [i, j];
        }
    }
}

// console.log(twoSum([2, 7, 11, 15], 9));
// console.log(twoSum([6, 3, 4, 2], 6));