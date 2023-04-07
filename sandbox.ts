//Arrays
let names = ['Arthur', 'Romulus', 'Orion']

// names = 'You are a String now'; //You can't do this because names was introduced as array

names.push('Castoria')
//TypeScript won't let us push a number into this array because initially we defined Strings into it.
// names.push(3)
// names[0] = 3

// Declaring Array with Mixed Types
let mixed = ['Zhuge Liang', 5, 'Caster'];
// TypeScipt won't let us push a Boolean because it wasn't initially present in the array.
// mixed.push(true);
mixed[0] = 3 // TypeScript would let us to set the value of number which was originally a String though.

//Objects
let ninja = {
    name: 'Mario', //Object keys also act as a variable
    age: 30,
    isBlackBelt: true
}

ninja.age = 40; // You can do this as age key was initially declared with a number

//Has the same restrictions as Array or any TypeScript Variables
// ninja.skills = ['Shuriken', 'Kunai Throwing']; //You cannot do this because you cannot add new key to the object which wasn't present in it in the first place.

//You can override the object though but it needs to be of the same structure as the original object, nor you can add other properties
ninja ={
    name: 'Not Mario',
    age: 40,
    isBlackBelt: false
}

//You cannot have a missing key or key with other types rather than the originally declared