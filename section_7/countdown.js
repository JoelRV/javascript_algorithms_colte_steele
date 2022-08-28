// a base example of a recursive function

function countdown(num) {
    if (num <= 0) {
        //base case
        console.log("All done");
        return;
    }
    console.log(num);
    num--;
    countdown(num);
}

console.log(countdown(10));
