//You can use 'any' for declaring dynamic type variable
//This reverts the power of TypeScript so think twice before using this
var age = 25;
console.log(age);
age = true; //Boolean
age = 'Twenty Four'; //String
age = { name: 'Subash', age: 23 }; //An Objects
console.log(age);
//With any type of array you can push any type of data into that array
var mixed = [];
mixed.push(5);
mixed.push('Five');
mixed.push(true);
mixed.push({ object: 'Object', number: 5 });
console.log(mixed);
//For an object with Properties of any type just use ':'
var object;
object = { name: 'Subash', object: { object: 34 } }; // This is fine
// object = {name: 'Subash', object:{object: 34}, age: 23} //But this is not, because it doesn't follow the original assigned structure of the object
