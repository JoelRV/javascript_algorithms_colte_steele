// basic function that computes factorial iteratively

function factorial(num) {
    let total = 1;
    for (let i = num; i > 1; i--) {
        total *= i;
    }
    return total;
}

// same approach with recursion
function factorialRecursive(num) {
    if (num < 2) return 1; //base case ie edge cases
    return num * factorialRecursive(num - 1);
}

console.log(factorial(5));
console.log(factorialRecursive(5));
