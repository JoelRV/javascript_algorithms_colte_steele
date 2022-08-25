/* Given two strings, write a function to determine if the second string is an anagram of the first. 
An anagram is a word, phrase, or name formed by rearranging the letters of another, 
such as cinema, formed from iceman. */

// frequency counter version O(n)
function validAnagram(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }

    let freqCounter1 = {};
    let freqCounter2 = {};

    for (let val of arr1) {
        freqCounter1[val] = (freqCounter1[val] || 0) + 1;
    }

    for (let val of arr2) {
        freqCounter2[val] = (freqCounter2[val] || 0) + 1;
    }

    for (let key in freqCounter1) {
        if (!(key in freqCounter2)) {
            return false;
        }
        if (freqCounter2[key] !== freqCounter1[key]) {
            return false;
        }
    }
    return true;
}

console.log(validAnagram("", "")); // true
console.log(validAnagram("aaz", "zza")); // false
console.log(validAnagram("anagram", "nagaram")); // true
console.log(validAnagram("rat", "car")); // false) // false
console.log(validAnagram("awesome", "awesom")); // false
console.log(validAnagram("qwerty", "qeywrt")); // true
console.log(validAnagram("texttwisttime", "timetwisttext")); // true

function validAnagramCourse(first, second) {
    if (first.length !== second.length) {
        return false;
    }

    let map = {};
    for (let val of first) {
        // if val in map increment by one, else initialize to 1
        map[val] ? (map[val] += 1) : (map[val] = 1);
    }

    for (let key of second) {
        // if map[key] non existent or 0 => false value
        if (!map[key]) {
            return false;
        } else {
            // if match, decrement. When reaching zero, any extra
            // occurence of the same key will lead to the if condition
            // returning a false.
            map[key] -= 1;
        }
    }
    return true;
}
console.log("Course solution");
console.log(validAnagramCourse("", "")); // true
console.log(validAnagramCourse("aaz", "zza")); // false
console.log(validAnagramCourse("anagram", "nagaram")); // true
console.log(validAnagramCourse("rat", "car")); // false) // false
console.log(validAnagramCourse("awesome", "awesom")); // false
console.log(validAnagramCourse("qwerty", "qeywrt")); // true
console.log(validAnagramCourse("texttwisttime", "timetwisttext")); // true
