// Code Challenges (Set 1)
// Question (2)

// Write a JavaScript program that prompts a user to enter their year of
// birth and in turn prints a string in the console stating whether the user
// is a minor, a youth, or an elder. Anyone below 18 years is a minor,
// anyone between 18 and 36 years is a youth and the rest are elders.


// Solution:

const CURRENT_YEAR = 2023;

function getUserAge() {
    const userInput = window.prompt("Enter year of birth:");
    const yearOfBirth = parseInt(userInput, 10);

    if (isNaN(yearOfBirth)) {
        console.log("Invalid input. Please enter a valid year of birth.");
        return;
    }

    const userAge = CURRENT_YEAR - yearOfBirth;

    if (userAge > 36) {
        console.log("Elder");
    } else if (userAge >= 18) {
        console.log("Youth");
    } else {
        console.log("Minor");
    }
}

getUserAge();