"use strict";
//Classes
class Invoice {
    constructor(_client, _details, _amount) {
        this.client = _client;
        this.details = _details;
        this.amount = _amount;
    }
    format() {
        return `${this.client} owes £ ${this.amount} for ${this.details}`;
    }
}
const invoiceOne = new Invoice('Chor', 'Loan', 250);
const invoiceTwo = new Invoice('Siddha Manchhe', 'Loan', 3000);
let invoices = [];
invoices.push(invoiceOne);
invoices.push(invoiceTwo);
console.log(invoices);
const form = document.querySelector('.new-item-form');
//inputs 
const type = document.querySelector('#type');
const toFrom = document.querySelector("#toFrom");
const details = document.querySelector('#details');
const amount = document.querySelector("#amount");
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, toFrom.value, details.value, amount.valueAsNumber //We want amount as Number 
    );
    //* Blue in the console means number
});
