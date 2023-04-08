//Classes
class Invoice{
    // private client: string;
    // readonly details: string; //Cannot change it's value even inside the class
    // public amount: number;

    constructor(
        readonly client: string,
        private details: string,
        public amount: number
    ){}

    format(){
        return `${this.client} owes £ ${this.amount} for ${this.details}`
    }
}

const form = document.querySelector('.new-item-form') as HTMLFormElement;

//inputs 
const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector("#toFrom") as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener('submit', (e: Event)=>{
    e.preventDefault();
    console.log(
        type.value,
        toFrom.value,
        details.value,
        amount.valueAsNumber //We want amount as Number 
    )
    //* Blue in the console means number
})