/* Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing. */
function isSubsequence(sub, string) {
    let left = 0;

    for (let i = 0; i < string.length; i++) {
        if (left === sub.length - 1) return true;
        if (sub[left] === string[i]) {
            left++;
        }
    }
    return false;
}

console.log(
    `isSubsequence('hello', 'hello world')`,
    isSubsequence("hello", "hello world")
); // true
console.log(`isSubsequence('sing', 'sting')`, isSubsequence("sing", "sting")); // true
console.log(
    `isSubsequence('abc', 'abracadabra')`,
    isSubsequence("abc", "abracadabra")
); // true
console.log(`isSubsequence('abc', 'acb')`, isSubsequence("abc", "acb")); // false (order matters)

//solution time O(n+m) space O(1)
function isSubsequenceCourse(str1, str2) {
    var i = 0;
    var j = 0;
    if (!str1) return true;
    while (j < str2.length) {
        if (str2[j] === str1[i]) i++;
        if (i === str1.length) return true;
        j++;
    }
    return false;
}

// solution recursive but NOT O(1)
function isSubsequenceRecursive(str1, str2) {
    if (str1.length === 0) return true;
    if (str2.length === 0) return false;
    if (str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1));
    return isSubsequence(str1, str2.slice(1));
}
