// Code Challenges (Set 1)
// Question (5)

// Given an Array containing integers, floats, and one character strings,
// write a function that takes an Array as a parameter and returns an
// Object with keys evens, odds, and chars. The value for evens is an array
// of sorted even numbers, the value for odds is a list of sorted odd
// numbers and chars is a list of sorted single-character strings.


// Solution:

const sortArray = arr => {
    const result = {
        evens: [],
        odds: [],
        chars: []
    };

    for (const element of arr) {
        if (typeof element === 'number') {
            if (element % 2 === 0) {
                insertSorted(result.evens, element);
            } else {
                insertSorted(result.odds, element);
            }
        } else if (typeof element === 'string' && element.length === 1) {
            insertSorted(result.chars, element);
        }
    }

    return result;
};

const insertSorted = (array, element) => {
    let i = array.length - 1;
    while (i >= 0 && array[i] > element) {
        array[i + 1] = array[i];
        i--;
    }
    array[i + 1] = element;
};

// const holyArray = sortArray([7, 'a', 3.0, 'x', 20, 'd', 4, 'f', 8]);
// console.log(holyArray);
// console.log(holyArray.evens);