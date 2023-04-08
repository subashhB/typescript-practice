const form = document.querySelector('.new-item-form') as HTMLFormElement;
//as HTMLFormElement is type-casting becuase when we grab a HTML element using class it doesn't know which type of element it will be because class can be applied to any element.
//Now form is a HTMLFormElement

console.log(form.children)

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