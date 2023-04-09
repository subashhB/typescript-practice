import { Invoice } from './classes/Invoice.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/Payment.js';
import { HasFormatter } from './interfaces/HasFormatter.js';

const form = document.querySelector('.new-item-form') as HTMLFormElement;

//inputs 
const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector("#toFrom") as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

//List template instance
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

form.addEventListener('submit', (e: Event)=>{
    e.preventDefault();
    
    let doc: HasFormatter;
    if(type.value === 'invoice'){
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
    }else{
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber)
    }
    list.render(doc, type.value, 'end')
    console.log(doc)
});

//Generics
const addUID = <T extends {name: string}>(obj: T) =>{
    let uid = Math.floor(Math.random() * 100);
    return {...obj, uid}
}

let docOne = addUID({name: 'Full Name', age: 30});

console.log(docOne.age) // !This generates error because TypeScript doesn't know if docOne has 'name' property or not.

//With the interface
interface Resources<T>{
    uid: number;
    resourceName: string;
    data: T;
}

const info: Resources <string> ={
    uid: 23,
    resourceName: 'Resourse Info',
    data: 'Data String',
}