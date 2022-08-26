/* Write a function called maxSubarraySum which accepts an array of integers and a number called n. 
The function should calculate the maximum sum of n consecutive elements in the array. */

// my naive solution O(n**2) (loop O(n) * slice O(n))
function maxSubarraySum(array, arrayLength) {
    if (array.length === 0) {
        return null;
    }
    let currentMaxSum = 0;
    for (let i = 0; i < array.length - arrayLength + 1; i++) {
        let currentSum =
            array[i] +
            array.slice(i + 1, i + arrayLength).reduce((a, b) => a + b, 0); // don't forget initial value in cas of empty array
        if (currentMaxSum < currentSum) {
            currentMaxSum = currentSum;
        }
    }

    return currentMaxSum;
}

console.log(
    `maxSubarraySum([1,2,5,2,8,1,5],2)`,
    maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)
); // 10
console.log(
    `maxSubarraySum([1,2,5,2,8,1,5],4)`,
    maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)
); // 17
console.log(`maxSubarraySum([4,2,1,6],1)`, maxSubarraySum([4, 2, 1, 6], 1)); // 6
console.log(
    `maxSubarraySum([4,2,1,6,2],4)`,
    maxSubarraySum([4, 2, 1, 6, 2], 4)
); // 13
console.log(`maxSubarraySum([],4)`, maxSubarraySum([], 4)); // null

// sliding window solution O(n)

function maxSubarraySumSlidingWindow(array, l) {
    let maxSum = 0;
    let tempSum = 0;
    if (array.length < l) return null;
    for (let i = 0; i < l; i++) {
        maxSum += array[i];
    }
    tempSum = maxSum;
    for (let i = l; i < array.length; i++) {
        // remove leftmost ele and add right element
        // then compare new tempSUm
        tempSum = tempSum - array[i - l] + array[i];
        maxSum = Math.max(tempSum, maxSum);
    }
    return maxSum;
}

console.log(
    `maxSubarraySumSlidingWindow([1,2,5,2,8,1,5],2)`,
    maxSubarraySumSlidingWindow([1, 2, 5, 2, 8, 1, 5], 2)
); // 10
console.log(
    `maxSubarraySumSlidingWindow([1,2,5,2,8,1,5],4)`,
    maxSubarraySumSlidingWindow([1, 2, 5, 2, 8, 1, 5], 4)
); // 17
console.log(
    `maxSubarraySumSlidingWindow([4,2,1,6],1)`,
    maxSubarraySumSlidingWindow([4, 2, 1, 6], 1)
); // 6
console.log(
    `maxSubarraySumSlidingWindow([4,2,1,6,2],4)`,
    maxSubarraySumSlidingWindow([4, 2, 1, 6, 2], 4)
); // 13
console.log(
    `maxSubarraySumSlidingWindow([],4)`,
    maxSubarraySumSlidingWindow([], 4)
); // null
