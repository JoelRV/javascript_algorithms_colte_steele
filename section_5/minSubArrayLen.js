/* Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.

This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead. */

//Pseudo code
// starting from the left sum elements until >= int
// note right index of subarray
// minL = l +1
// looping of right index > end of input Array
// // subtract array[i-l]
// // if sum < int : add array[l+1]
// // if sum >= int : sumL = min(minL, i-l)
// // l++

function minSubArrayLen(arr, int) {
    let tempSum = 0;
    let start = 0;
    let end = 0;
    let minL = Infinity;

    while (start < arr.length) {
        if (tempSum < int && end < arr.length) {
            tempSum += arr[end];
            end++;
        } else if (tempSum >= int) {
            minL = Math.min(minL, end - start);
            tempSum -= arr[start];
            start++;
        } else {
            break;
        }
    }
    return minL === Infinity ? 0 : minL;
}

console.log(
    `minSubArrayLen([2,3,1,2,4,3], 7)`,
    minSubArrayLen([2, 3, 1, 2, 4, 3], 7)
); // 2 -> because [4,3] is the smallest subarray
console.log(
    `minSubArrayLen([2,1,6,5,4], 9)`,
    minSubArrayLen([2, 1, 6, 5, 4], 9)
); // 2 -> because [5,4] is the smallest subarray
console.log(
    `minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52)`,
    minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)
); // 1 -> because [62] is greater than 52
console.log(
    `minSubArrayLen([1,4,16,22,5,7,8,9,10],39)`,
    minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)
); // 3
console.log(
    `minSubArrayLen([1,4,16,22,5,7,8,9,10],55)`,
    minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)
); // 5
console.log(
    `minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) `,
    minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)
); // 2
console.log(
    `minSubArrayLen([1,4,16,22,5,7,8,9,10],95)`,
    minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)
); // 0
