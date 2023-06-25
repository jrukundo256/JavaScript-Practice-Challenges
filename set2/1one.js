// Code Challenges (Set 2)
// Question (1)

// Given an integer num, write a function that repeatedly adds all its digits
// until the result has only one digit, and return it.


// Solution:

const addDigits = num => {
    if (num < 10) return num;

    let sum = 0;
    while (num > 0) {
      sum += num % 10;
      num = Math.floor(num / 10);
    }
    
    return addDigits(sum);
  };

  
  console.log(addDigits(38));