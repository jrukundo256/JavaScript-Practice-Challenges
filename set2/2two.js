// Code Challenges (Set 2)
// Question (2)

// Given an integer array nums, return true if any value appears at least
// twice in the array, and return false if every element is distinct.


// Solution: 

const hasDuplicates = nums => {
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] === nums[i + 1]) {
            return true;
        }
    }

    return false; 
}

// Using a set
// const hasDuplicates = nums => {
//     const seen = new Set();

//     for (const num of nums) {
//       if (seen.has(num)) {
//         return true; // Found a duplicate
//       }
//       seen.add(num);
//     }

//     return false; // No duplicates found
//   };

console.log(hasDuplicates([1, 3, 2, 1]));