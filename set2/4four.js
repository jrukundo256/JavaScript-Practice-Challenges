// Code Challenges (Set 2)
// Question (4)

// Given a non-empty array of integers nums, every element appears
// twice except for one. Find that single one.


// Solution:

const getDistinctNumber = nums => {
    let result = 0;
    for (const num of nums) {
        result ^= num;
    }

    return result;
};

// console.log(getDistinctNumber([4, 1, 2, 1, 2]));
