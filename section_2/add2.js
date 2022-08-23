function addUpTo(n) {
    return (n * (n + 1)) / 2;
}
console.time("Add2");
console.log(addUpTo(100000000));
console.timeEnd("Add2");
