// Code Challenges (Set 1)
// Question (4)

// Write a function named firstPalindrome which takes a parameter:
// words. Given an array of strings words, return the first palindromic
// string in the array. If there is no such string, return an empty string "".
// A string is palindromic if it reads the same forward and backward.

// Solution:

// Using a for-loop
const firstPalindrome = words => {
    for (let i = 0; i < words.length; i++) {
        if ((words[i].split("").reverse().join("")) === words[i]) return words[i];
    }

    return "";
}

// Using the find array method
// const firstPalindrome = words => words.find(word => word === word.split("").reverse().join("")) || "";

// console.log(firstPalindrome(["abc", "car", "ada", "racecar", "cool"]));
// console.log(firstPalindrome(["abc", "car", "cool"]));