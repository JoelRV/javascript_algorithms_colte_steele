/* Given a sorted array of integers, write a function called search, 
that accepts a value and returns the index where the value passed to the function is located. 
If the value is not found, return -1 */

//naive solution O(n)
function search(array, ele) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === ele) {
            return i;
        }
    }
    return -1;
}

console.log(`search([1, 2, 3, 4, 5, 6], 4)`, search([1, 2, 3, 4, 5, 6], 4)); // 3
console.log(`search([1, 2, 3, 4, 5, 6], 6)`, search([1, 2, 3, 4, 5, 6], 6)); // 5
console.log(`search([1, 2, 3, 4, 5, 6], 11)`, search([1, 2, 3, 4, 5, 6], 11)); // -1

// binary search approach O(logn)
function searchBinary(array, ele) {
    let left = 0;
    let right = array.length - 1;

    while (left <= right) {
        let middle = Math.floor((left + right) / 2);

        if (array[middle] < ele) {
            left = middle + 1;
        } else if (array[middle] > ele) {
            right = middle - 1;
        } else {
            return middle;
        }
    }

    return -1;
}

console.log(
    `searchBinary([1, 2, 3, 4, 5, 6], 4)`,
    searchBinary([1, 2, 3, 4, 5, 6], 4)
); // 3
console.log(
    `searchBinary([1, 2, 3, 4, 5, 6], 6)`,
    searchBinary([1, 2, 3, 4, 5, 6], 6)
); // 5
console.log(
    `searchBinary([1, 2, 3, 4, 5, 6], 11)`,
    searchBinary([1, 2, 3, 4, 5, 6], 11)
); // -1
