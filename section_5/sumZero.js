/* Write a function called sumZero which accepts a sorted array of integers. 
The function should find the first pair where the sum is 0.
Return an array that includes both values that sum to zero or undefined if a pair does not exist */

// multiple pointer solution O(n)
function sumZero(array) {
    let left = 0;
    let right = array.length - 1;
    while (left < right) {
        let diff = array[right] + array[left];
        if (diff === 0) {
            return [array[left], array[right]];
        } else if (diff < 0) {
            left++;
        } else {
            right--;
        }
    }
}

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3])); // [-3,3]
console.log(sumZero([-2, 0, 1, 3])); // undefined
console.log(sumZero([1, 2, 3])); // undefined
