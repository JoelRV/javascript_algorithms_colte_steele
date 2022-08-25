/* Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. 
There can be negative numbers in the array, but it will always be sorted. */

function countUniqueValues(array) {
    if (array.length === 0) {
        return 0;
    }
    let left = 0;
    let right = 1;
    let counter = 1; // we assume at least one unique value
    while (left < array.length - 1) {
        if (array[left] != array[right]) {
            counter++;
        }
        left++;
        right++;
    }
    return counter;
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); // 2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
console.log(countUniqueValues([])); // 0
console.log(countUniqueValues([-2, -1, -1, 0, 1])); // 4

//version from course
// if allowed to modify input array, we can simply use the i index as an inderect counter
// every time we encounter a != value, we increment i and update the value a arr[i] with the
// encountered one. So the value of i is indirectly counting unique values, we just need to
// do i + 1 at the end to account for the 0-base indexing.
function countUniqueValuesCourse(arr) {
    if (arr.length === 0) return 0;
    var i = 0;
    for (var j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
        }
    }
    return i + 1;
}
