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
