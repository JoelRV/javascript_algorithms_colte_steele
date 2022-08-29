/* 
Pseudocode

Loop over the longer string
Loop over the shorter string
If the characters don't match, break out of the inner loop
If the characters do match, keep going
If you complete the inner loop and find a match, increment the count of matches
Return the count

 */

function naiveSubstringSearch(string, query) {
    if (query.lenght === 0) return 0;
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        let j = 0;
        while (j < query.length) {
            if (string[i + j] !== query[j]) break;
            if (j === query.length - 1) count++;
            j++;
        }
    }
    return count;
}

console.log(
    `naiveSubstringSearch("wowomgzomg", "omg")`,
    naiveSubstringSearch("wowomgzomg", "omg")
); // 2

console.log(
    `naiveSubstringSearch("lorie loled", "lol") `,
    naiveSubstringSearch("lorie loled", "lol")
); // 1

console.log(
    `naiveSubstringSearch("lorilorilori", "lora")`,
    naiveSubstringSearch("lorilorilori", "lora")
); // 0
