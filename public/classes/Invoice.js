//Classes
export class Invoice {
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
