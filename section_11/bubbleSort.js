/* 
BubbleSort Pseudocode

Let's visualize this!

    Start looping from with a variable called i the end of the array towards the beginning
    Start an inner loop with a variable called j from the beginning until i - 1
    If arr[j] is greater than arr[j+1], swap those two values!
    Return the sorted array

 */

// define a basic array swap helper function
function swap(array, i1, i2) {
    let temp = array[i1];
    array[i1] = array[i2];
    array[i2] = temp;
}

function bubbleSort(array) {
    for (let i = array.length - 1; i > 0; i--) {
        for (let j = 0; j <= i - 1; j++) {
            if (array[j] > array[j + 1]) swap(array, j, j + 1);
        }
    }
    return array;
}

function bubbleSortOptimal(array) {
    let noswaps = true; // add a boolean to check if laster iteration there were no swaps
    for (let i = array.length - 1; i > 0; i--) {
        for (let j = 0; j <= i - 1; j++) {
            if (array[j] > array[j + 1]) {
                noswaps = false;
                swap(array, j, j + 1);
            }
        }
        if (noswaps) break; // break out if we didn't swap anything
    }
    return array;
}

console.log(`bubbleSort([1,2,55,10,5,17])`, bubbleSort([1, 2, 55, 10, 5, 17]));
