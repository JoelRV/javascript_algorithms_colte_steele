// This function returns all odd values from an input array
// It also show an example of the helper function recursion pattern
// By wrapping the recursive logic inside the helper function we can
// populate the result array without reseting it

function collectOddValues(arr) {
    let result = []; // empty array to populate

    function helper(helperInput) {
        if (helperInput.length === 0) {
            return;
        } // base case

        if (helperInput[0] % 2 !== 0) {
            result.push(helperInput[0]);
        } // push if odd

        helper(helperInput.slice(1)); // shift first element
    }

    helper(arr);

    return result;
}

console.log(collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// example using pure recursion
function collectOddValuesPure(arr) {
    let newArr = [];

    if (arr.length === 0) {
        return newArr; // base case
    }

    if (arr[0] % 2 !== 0) {
        newArr.push(arr[0]);
    }

    arr.shift(); // shift first ele from arr
    newArr = newArr.concat(collectOddValuesPure(arr)); // recursive call concatenating result from next call until arr is empty
    return newArr;
}

console.log(collectOddValuesPure([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
