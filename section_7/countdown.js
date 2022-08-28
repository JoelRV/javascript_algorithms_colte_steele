// a base example of a recursive function

function countdown(num) {
    if (num <= 0) {
        console.log("All done");
        return;
    }
    console.log(num);
    num--;
    countdown(num);
}

console.log(countdown(10));
