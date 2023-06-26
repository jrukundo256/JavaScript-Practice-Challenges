// Code Challenges (Set 2)
// Question (5)

// Write a function to find the longest common prefix string amongst an
// array of strings. If there is no common prefix, return an empty string "".


// Solution

const getLongestCommonPrefix = strs => {
    if (strs.length === 0) return "";

    let prefix = strs[0];
    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.slice(0, (prefix.length - 1));
            if (prefix === "") return "";
        }
    }

    return prefix;
}

// console.log(getLongestCommonPrefix(["flower", "flow", "flight"]));
// console.log(getLongestCommonPrefix(["racecar", "car", "dog"]));