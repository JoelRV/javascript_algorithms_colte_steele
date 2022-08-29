/* Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome (reads the same forward and backward). Otherwise it returns false.
 */

function isPalindrome(string) {
    let reverse = function (string) {
        if (string.length <= 1) return string;
        return reverse(string.slice(1)) + string[0];
    };
    if (string === reverse(string)) return true;
    return false;
}

console.log(`isPalindrome('awesome')`, isPalindrome("awesome")); // false
console.log(`isPalindrome('foobar') `, isPalindrome("foobar")); // false
console.log(`isPalindrome('tacocat')`, isPalindrome("tacocat")); // true
console.log(
    `isPalindrome('amanaplanacanalpanama')`,
    isPalindrome("amanaplanacanalpanama")
); // true
console.log(
    `isPalindrome('amanaplanacanalpandemonium')`,
    isPalindrome("amanaplanacanalpandemonium")
); // false

// course solution
function isPalindromeCourse(str) {
    if (str.length === 1) return true;
    if (str.length === 2) return str[0] === str[1];
    if (str[0] === str.slice(-1)) return isPalindromeCourse(str.slice(1, -1));
    return false;
}

// approach: compare first and last index chars, if true, slice them out and call recursive function
// until you hit the two base cases: 1) only one char left (odd length string) return true
// 2) 2 chars, if both are equal return true (result of comparison)
