//Classes
export class Invoice{
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