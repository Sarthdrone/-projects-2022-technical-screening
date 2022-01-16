var assert = require("assert")
// Given an array of numbers, return a new array so that positive and negative
// numbers alternate. You can assume that 0 is a positive number. Within the
// positive and negative numbers, you must keep their relative order. You are Within the
// positive and negative numbers, you must keep their relative ordeore 
// than 1.

// =====Example 1
// Input: [1, -3, -8, -5, 10]
// Output: [-3, 1, -8, 10, -5]
// Explanation: We have alternated positive and negative numbers. Notice that the
// negative numbers appear in the same relative order (-3, -8, -5) and the positive
// numbers appear in the same order as well (1, 10).

// =====Example 2
// Input: [3, 0, 0, -5, -2]
// Output: [3, -5, 0, -2, 0]
// Explanation: We have alternated positive and negative numbers. Notice they appear
// in the same relative order.

// =====Example 3
// Input: [0, -3, 3, -1, 1, -1] -> [-3, 0, -1, 3, -1, 1]
// Output #1: [0, -3, 3, -1, 1, -1]
// Output #2: [-3, 0, -1, 3, -1, 1]
// Explanation: There are 2 possible answers which satisfy the problem's constraints.
// We can start with either positive or negative

// =====Example 4
// Input numArray: []
// Output numArray: []
// Explanation: Empty array...

const altNumbers = (numArray) => {
    // TODO: COMPLETE THIS FUNCTION
    var no_pos = 0
    var no_neg = 0
    var i = 0;

    //I need to find the sign that has more number of digits to pass a particular case of when I choose the sign with less number of digits to be at the first place of the array which would not satisfy the 1st condition.
    while (i < numArray.length) {
        if (numArray[i] > 0) {
            no_pos++;
        }  else {
            no_neg++;
        }
        i++;
    }
    i = 0;
// if number < 0 --> negative and if number > -1 || number => 0 then it is positive.
    var sign = 0;

    var pos_choose;

    if (no_pos > no_neg) {
        pos_choose = 1; //the first digit of the array that has to be returned by the function has to be of sign +ve.
    } else {
        pos_choose = 0; //the first digit of the array that has to be returned by the function has to be of sign -ve.
    }

    var new_array = new Array(numArray.length); 
    var j = 0;
    i = 0;
    while (j < numArray.length) {
        
        while (i < numArray.length) {
            if(new_array[i] >= 0 && pos_choose == 1) {
                new_array[j] = numArray[i]; 
                pos_choose--;               
            } else if (new_array[i] < 0 && pos_choose == 0) {
                new_array[j] = numArray[i];
                pos_choose++;
            }
            i++;
        }
        i = 0;
        j++;
    }
    return new_array;
}

module.exports = { altNumbers } // Do not modify this line

// ====================TESTS====================
// Some tests to help you check your progress. Simply run your code with
// node easy.js
// If successful, no output should appear. If unsuccessful, you should see 
// assertion errors being thrown.


//Trying to print my array

//

let array1 = [1, -3, -8, -5, 10]
array1 = altNumbers(array1)
const answer1 = [-3, 1, -8, 10, -5]
for (let i = 0; i < array1.length; i++) {
    console.log(array1[i]);
    assert(array1[i] == answer1[i])
}

let array2 = [3, 0, 0, -5, -2]
array2 = altNumbers(array2)
const answer2 = [3, -5, 0, -2, 0]
for (let i = 0; i < array2.length; i++) {
    assert(array2[i] === answer2[i])
}

let array3 = [0, -3, 3, -1, 1, -1]
array3 = altNumbers(array3)
const answer3a = [0, -3, 3, -1, 1, -1]
const answer3b = [-3, 0, -1, 3, -1, 1]
if (array3[0] === 0) {
    for (let i = 0; i < array3.length; i++) {
        assert(array3[i] === answer3a[i])
    }
} else if (array3[0] == -3) {
    for (let i = 0; i < array3.length; i++) {
        assert(array3[i] === answer3b[i])
    }
} else {
    assert(false)
}

let array4 = []
array4 = altNumbers(array4)
assert(array4.length === 0)

let array5 = [3,2,1,-1,-2,-3,-4]
array5 = altNumbers(array5)
const answer5 = [-1, 3, -2, 2, -3, 1, -4]
for (let i = 0; i < array5.length; i++) {
    assert(array5[i] === answer5[i])
}

let array6 = [5,-1,-2,-3,-4,0,3]
array6 = altNumbers(array6)
const answer6 = [-1, 5, -2, 0, -3, 3, -4]
for (let i = 0; i < array6.length; i++) {
    assert(array6[i] === answer6[i])
}



/*
conditions:
1. positive and negative numbers alternate
2. within the positive and negative numbers, you must maintain the order.



solution:
1. start with the type of number that is one more than the other(type-> +ve and -ve)-> because if it's not done, there would be cases where condition 1 wouldn't be satisfied
2. 
*/
