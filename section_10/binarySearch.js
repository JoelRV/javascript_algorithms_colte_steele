// base implementation of binary search on a sorted array

/* Binary Search Pseudocode

    This function accepts a sorted array and a value
    Create a left pointer at the start of the array, and a right pointer at the end of the array
    While the left pointer comes before the right pointer:

    Create a pointer in the middle
    If you find the value you want, return the index
    If the value is too small, move the left pointer up
    If the value is too large, move the right pointer down

    If you never find the value, return -1
 */

function binarySearch(array, query) {
    let left = 0;
    let right = array.length - 1;
    let middle = Math.floor((left + right) / 2);

    while (array[middle] !== query && left <= right) {
        if (array[middle] > query) {
            right = middle - 1;
        } else {
            left = middle + 1;
        }
        middle = Math.floor((left + right) / 2);
    }
    if (array[middle] === query) {
        return middle;
    }
    return -1;
}

function binarySearchCourse(arr, elem) {
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start + end) / 2);
    while (arr[middle] !== elem && start <= end) {
        //console.log(middle);
        if (elem < arr[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
        middle = Math.floor((start + end) / 2);
    }
    if (arr[middle] === elem) {
        return middle;
    }
    return -1;
}

function binarySearchRecursive(array, query) {
    let left = 0;
    let right = array.length - 1;
    let middle = Math.floor((left + right) / 2);
    if (array[middle] === query) {
        return middle;
    } else if (array.length === 0) {
        return -1;
    }

    if (array[middle] > query) {
        return binarySearchRecursive(
            array.splice(left, array.length - middle),
            query
        );
    } else {
        return binarySearchRecursive(array.slice(middle + 1), query);
    }
}

console.log("testing");
console.time("BinarySearchCourse");
console.log(
    `binarySearchCourse([1,2,3,4,5],2)`,
    binarySearchCourse([1, 2, 3, 4, 5], 2)
); // 1
console.log(
    `binarySearchCourse([1,2,3,4,5],3)`,
    binarySearchCourse([1, 2, 3, 4, 5], 3)
); // 2
console.timeEnd("BinarySearchCourse");

console.time("BinarySearch");
console.log(`binarySearch([1,2,3,4,5],2)`, binarySearch([1, 2, 3, 4, 5], 2)); // 1
console.log(`binarySearch([1,2,3,4,5],3)`, binarySearch([1, 2, 3, 4, 5], 3)); // 2
console.timeEnd("BinarySearch");

console.time("BinarySearchRecursive");
console.log(
    `binarySearchRecursive([1,2,3,4,5],2)`,
    binarySearchRecursive([1, 2, 3, 4, 5], 2)
); // 1
console.log(
    `binarySearchRecursive([1,2,3,4,5],3)`,
    binarySearchRecursive([1, 2, 3, 4, 5], 3)
); // 2
console.timeEnd("BinarySearchRecursive");
