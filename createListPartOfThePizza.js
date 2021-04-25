import {translit} from "./translat.js"

function createListPartOfThePizza(arrayParts) {
    const ul = document.createElement('ul');
    arrayParts.forEach(item => {
        const li = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.classList.add('checkboxClass');
        checkbox.type = 'checkbox';
        checkbox.id = translit(item.title);
        const label = document.createElement('label');
        label.htmlFor = checkbox.id;
        label.textContent = item.title;
        const span = document.createElement('span');
        span.textContent = item.price;
        li.append(checkbox, label, span);
        ul.append(li);
    });
    return ul;
}


export {createListPartOfThePizza};