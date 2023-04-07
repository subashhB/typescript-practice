//explicit types: letting us to declare a variable without initializing them with value
var character; //This is Similar to declaring String character;
var age; //Similar to int age or float age or other number types, typeScript doesn't care for this one
var isLoggedIn; //Similar to bool isLoggedIn
//arrays
var ninjas; // Ninjas can only be array of strings now **Note that this is just a declaration| To initialize this you must write string[] = []; otherwise you won't be able to push into this with just the declaration
//ninjas = [10,20]; // TypeScript won't let it happen
ninjas = ['Naruto', "Naruto's Son"]; // This is okay
//union types: Declaring Mixed Types array
var mixed = []; //Now mixed can store string and number
mixed.push('Hello world');
mixed.push(23);
var uid; // uid can be string or a number
//objects
var ninjaOne; //Now ninjaOne can only be object
ninjaOne = { name: 'Shinobi', age: 30 };
ninjaOne = ["Array"]; //Array is acceptable because objects are a type of array
//Explicit Types of a object property
var ninjaTwo;
//ninjaTwo ={}; // Not allowed because ninjaTwo must have the properties that were declared
