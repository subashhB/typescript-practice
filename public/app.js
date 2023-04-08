"use strict";
const form = document.querySelector('.new-item-form');
//as HTMLFormElement is type-casting becuase when we grab a HTML element using class it doesn't know which type of element it will be because class can be applied to any element.
//Now form is a HTMLFormElement
console.log(form.children);
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
