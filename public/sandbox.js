"use strict";
let greet = () => {
    console.log("hello world");
};
greet();
//greet = 'String' // This won't work because greet is supposed to be a function not a String
let greet2; //Explicit Type: Function
greet = () => {
    console.log("Hello World Returns");
};
// A Function with two parameters that must be a number, c? means that c is optional parameter that can be (string | number) and can be passed or not but the funtion will run without any issue
const add = (a, b, c = 10) => {
    console.log(a + b);
    console.log(c); //c is underfined
};
add(5, 10);
const addor10 = (a, c = 10) => {
    //*Always put default or optional parameters at the end
    console.log(a + c);
};
addor10(5);
addor10(5, 1);
let minus = (a, b) => {
    return a + b;
};
let result = minus(6, 7); // In this case the type of result would be same that is returned by the function, If you don't believe me then you can hover over it to know by yourself
//* In this case, minus function takes two parameter both of them are numbers and returns the subtraction of two numbers, result is a number as well
const returnTypeNumber = (a) => {
    // *Though this is not necessary as TypeScript automatically assign the type. It provide good documentation to other people who will view you codes.
    return a;
};
const voidFunction = () => {
    console.log("This is from the void Dimension");
};
