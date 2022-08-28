// second simple recursive function
function sumRange(num) {
    if (num === 1) {
        // base case
        return 1;
    }
    return num + sumRange(num - 1); // different input
}

console.log(sumRange(3));
