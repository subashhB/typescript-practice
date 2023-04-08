"use strict";
//Function Signature
//example 1
let greet;
// This is a signature of function called greet that says in a future greet can be a function which can take two arguements of type string with return type void.
greet = (name, greeting) => {
    console.log(`${name} says ${greeting}`);
};
//This function doesn't generate error as it follows the greet Function Signature
//example 2
let calc;
calc = (numOne, numTwo, action) => {
    if (action === 'add') {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
//example 3
let logDetails;
logDetails = (user) => {
    console.log(`User: Name ${user.name}, Age ${user.age}`);
};
logDetails = (user) => {
    console.log(`Name: ${user.name}, Age: ${user.age}`);
};
