var character = 'Hero Babu';
var age = 30;
var isBlackBelt = false;
//This throws error because variable Character is already assigned as a String and cannot be assigned with number
//character = 20
character = "This is a String";
//Strictly assigning that diameter must be of the type number 
var circ = function (diameter) {
    return diameter * Math.PI;
};
console.log(circ(7.5));
