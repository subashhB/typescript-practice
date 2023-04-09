import { Invoice } from './classes/Invoice.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/Payment.js';
const form = document.querySelector('.new-item-form');
//inputs 
const type = document.querySelector('#type');
const toFrom = document.querySelector("#toFrom");
const details = document.querySelector('#details');
const amount = document.querySelector("#amount");
//List template instance
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, 'end');
    console.log(doc);
});
//Generics
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUID({ name: 'Full Name', age: 30 });
console.log(docOne.age); // !This generates error because TypeScript doesn't know if docOne has 'name' property or not.
//Enums
var ResourseType;
(function (ResourseType) {
    ResourseType[ResourseType["Book"] = 0] = "Book";
    ResourseType[ResourseType["Film"] = 1] = "Film";
    ResourseType[ResourseType["Manga"] = 2] = "Manga";
    ResourseType[ResourseType["Series"] = 3] = "Series";
})(ResourseType || (ResourseType = {}));
const docThree = {
    uid: 123,
    resourceType: ResourseType.Book,
    data: 'Ikigai'
};
console.log(docThree);
