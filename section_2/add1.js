function addUpTo(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}

console.time("Add1");
console.log(addUpTo(100000000));
console.timeEnd("Add1");
