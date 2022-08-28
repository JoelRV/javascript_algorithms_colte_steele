/* Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters. */

// strategy

function findLongestSubstring(string) {
    if (string.length === 0) return 0;

    let longest = 0;
    let seen = {};
    let start = 0;

    for (let i = 0; i < string.length; i++) {
        let char = string[i];
        // if char already in map reset the new start position
        if (seen[char]) {
            start = Math.max(start, seen[char]);
        }

        // length = current index - start + 1 (to includ current count)
        longest = Math.max(longest, i - start + 1);
        // store the index of the next char so as not double count
        seen[char] = i + 1;
    }
    return longest;
}

console.log(`findLongestSubstring('')`, findLongestSubstring("")); // 0
console.log(
    `findLongestSubstring('rithmschool')`,
    findLongestSubstring("rithmschool")
); // 7
console.log(
    `findLongestSubstring('thisisawesome') `,
    findLongestSubstring("thisisawesome")
); // 6
console.log(
    `findLongestSubstring('thecatinthehat')`,
    findLongestSubstring("thecatinthehat")
); // 7
console.log(`findLongestSubstring('bbbbbb') `, findLongestSubstring("bbbbbb")); // 1
console.log(
    `findLongestSubstring('longestsubstring')`,
    findLongestSubstring("longestsubstring")
); // 8
console.log(
    `findLongestSubstring('thisishowwedoit')`,
    findLongestSubstring("thisishowwedoit")
); // 6
