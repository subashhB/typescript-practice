"use strict";
//Classes
class Invoice {
    // private client: string;
    // readonly details: string; //Cannot change it's value even inside the class
    // public amount: number;
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes £ ${this.amount} for ${this.details}`;
    }
}
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
