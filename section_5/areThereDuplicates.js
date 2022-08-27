/* Implement a function called, areThereDuplicates which accepts a variable number of arguments, 
and checks whether there are any duplicates among the arguments passed in.
You can solve this using the frequency counter pattern OR the multiple pointers pattern. */
function areThereDuplicates(...args) {
    let start = 0;
    let j = 1;

    // args = args.sort((a, b) => a > b);
    args.sort();
    console.log(args);

    while (j < args.length) {
        if (args[start] === args[j]) {
            return true;
        }
        start++;
        j++;
    }
    return false;
}

console.log(`areThereDuplicates(1, 2, 3)`, areThereDuplicates(1, 2, 3)); // false
console.log(
    `areThereDuplicates(1, 2, 4,5,6,1, 3)`,
    areThereDuplicates(1, 2, 4, 5, 6, 1, 3)
); // true
console.log(`areThereDuplicates(1, 2, 2)`, areThereDuplicates(1, 2, 2)); // true
console.log(
    `areThereDuplicates('a', 'b', 'c', 'a')`,
    areThereDuplicates("a", "b", "c", "a")
); // true

//frequency counter version
function areThereDuplicatesFCounter() {
    let collection = {};
    for (let val in arguments) {
        collection[arguments[val]] = (collection[arguments[val]] || 0) + 1;
    }
    for (let key in collection) {
        if (collection[key] > 1) return true;
    }
    return false;
}
