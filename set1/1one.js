// Code Challenges (Set 1)
// Question (1)

// Write a function named fizzBuzz that takes in two(2) parameters which
// are expected to be strings. The function should return the string Fizz if
// the combined length of the parameters is divisible by 3, the string Buzz
// if it is divisible by 5, and the string FizzBuzz if it is divisible by both 5 and 3.

// Solution:

const fizzBuzz = (str1, str2) => {
    const combinedLength = `${str1}${str2}`.length;
    return (combinedLength % 3 === 0 && combinedLength % 5 === 0) ? "FizzBuzz" :
        (combinedLength % 3 === 0) ? "Fizz" :
            (combinedLength % 5 === 0) ? "Buzz" :
                "";
};
