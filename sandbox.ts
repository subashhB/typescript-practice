let character = 'Hero Babu';
let age = 30;
let isBlackBelt = false;

//This throws error because variable Character is already assigned as a String and cannot be assigned with number
//character = 20
character = "This is a String"

//Strictly assigning that diameter must be of the type number 
const circ = (diameter: number)=>{
    return diameter * Math.PI;
}

console.log(circ(7.5))