//naive solution O(n^2)
function sameNaive(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let index = 0; index < arr1.length; index++) {
        let correctIndex = arr2.indexOf(arr1[index] ** 2);
        if (correctIndex === -1) {
            return false;
        }
        arr2.splice(correctIndex, 1);
    }
    return true;
}

console.log(sameNaive([1, 2, 3], [4, 1, 9])); // true
console.log(sameNaive([1, 2, 3], [1, 9])); // false
console.log(sameNaive([1, 2, 1], [4, 4, 1])); // false (must be same frequency)

// frequency counter version O(n)
function sameFCVersion(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }

    let freqCounter1 = {};
    let freqCounter2 = {};

    for (let val of arr1) {
        freqCounter1[val] = (freqCounter1[val] || 0) + 1;
    }

    for (let val of arr2) {
        freqCounter2[val] = (freqCounter2[val] || 0) + 1;
    }

    for (let key in freqCounter1) {
        if (!(key ** 2 in freqCounter2)) {
            return false;
        }
        if (freqCounter2[key ** 2] !== freqCounter1[key]) {
            return false;
        }
    }
    return true;
}
//test

console.log(sameFCVersion([1, 2, 3], [4, 1, 9])); // true
console.log(sameFCVersion([1, 2, 3], [1, 9])); // false
console.log(sameFCVersion([1, 2, 1], [4, 4, 1])); // false (must be same frequency)
