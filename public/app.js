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
export {};
