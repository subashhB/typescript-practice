//Function Signature

//example 1
let greet: (a: string, b: string) => void; 
// This is a signature of function called greet that says in a future greet can be a function which can take two arguements of type string with return type void.

greet = (name: string, greeting: string) =>{
    console.log(`${name} says ${greeting}`)
}
//This function doesn't generate error as it follows the greet Function Signature

//example 2

let calc : (a: number, b:number, c: string) => number;

calc = (numOne: number, numTwo:number, action: string) =>{
    if(action === 'add'){
        return numOne + numTwo
    }else{
        return numOne - numTwo
    }
}

//example 3

let logDetails: (obj: {name: string, age: number}) => void;

logDetails = (user: {name: string, age: number}) => { //You cannot change the key of the object
    console.log(`User: Name ${user.name}, Age ${user.age}`)
}

//Or

type person = {name: string, age: number}

logDetails = (user: person) =>{
    console.log(`Name: ${user.name}, Age: ${user.age}`)
}