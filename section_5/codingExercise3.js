/* Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

Your solution MUST have the following complexities:

Time: O(N) */

function sameFrequency(int1, int2) {
    const int1Str = int1.toString().split("");
    const int2Str = int2.toString().split("");

    let freqMap = {};

    for (let i = 0; i < int1Str.length; i++) {
        let key = int1Str[i];
        freqMap[key] ? ++freqMap[key] : (freqMap[key] = 1);
    }

    for (let i = 0; i < int2Str.length; i++) {
        let key = int2Str[i];
        if (!freqMap[key]) {
            return false;
        } else {
            freqMap[key]--;
        }
    }

    //console.log(`freqMap`, freqMap);
    return true;
}
console.log(`sameFrequency(182, 281)`, sameFrequency(182, 281)); // true
console.log(`sameFrequency(34, 14)`, sameFrequency(34, 14)); // false
console.log(`sameFrequency(3589578, 5879385)`, sameFrequency(3589578, 5879385)); // true
