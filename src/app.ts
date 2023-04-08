//Classes
class Invoice{
    client: string;
    details: string;
    amount: number;

    constructor(_client: string, _details: string, _amount: number){
        this.client = _client;
        this.details = _details;
        this.amount = _amount;
    }

    format(){
        return `${this.client} owes £ ${this.amount} for ${this.details}`
    }
}

const invoiceOne = new Invoice('Chor', 'Loan', 250);
const invoiceTwo = new Invoice('Siddha Manchhe', 'Loan', 3000);

let invoices: Invoice[] = [];
invoices.push(invoiceOne);
invoices.push(invoiceTwo)
console.log(invoices)

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