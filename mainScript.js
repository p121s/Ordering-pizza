import {PartPizza} from "./partOfThePizzaClass.js";
import {createListPartOfThePizza} from "./createListPartOfThePizza.js";
import {disablesLi} from "./disabledLi.js";
import {whatToChangePlus, whatToChangeMinus} from "./whatToChange.js";
import {counter} from "./counterCheckedItem.js";
import {priceFormation} from "./priceFormation.js";
const base = document.getElementById('base');
const ingredient1 = document.getElementById('ingredient1');
const ingredient2 = document.getElementById('ingredient2');
const souce = document.getElementById('souce');
const checkboxCollection = document.getElementsByClassName('checkboxClass');
const orderList = document.getElementById('order_list');
const ul = document.createElement('ul');
orderList.append(ul);
let title;
let currentli;

const base1 = new PartPizza('Стандартная', 5);
const base2 = new PartPizza('Слоеное тесто', 7);
const base3 = new PartPizza('С сырным бортом', 9);
const base4 = new PartPizza('С хот-дог бортом', 12);
const ingredient11 = new PartPizza('Помидор', 3);
const ingredient12 = new PartPizza('Огурец', 3);
const ingredient13 = new PartPizza('Болгарский перец', 5);
const ingredient14 = new PartPizza('Ананас', 4);
const ingredient21 = new PartPizza('Куриное филе', 6);
const ingredient22 = new PartPizza('Говядина', 8);
const ingredient23 = new PartPizza('Колбаса салями', 5);
const ingredient24 = new PartPizza('Ветчина', 7);
const souce1 = new PartPizza('Кетчуп', 2);
const souce2 = new PartPizza('Майонез', 2);
const souce3 = new PartPizza('Барбекю', 2);
const souce4 = new PartPizza('Сырный', 2);

base.append(createListPartOfThePizza([base1, base2, base3, base4]));
ingredient1.append(createListPartOfThePizza([ingredient11, ingredient12, ingredient13, ingredient14]));
ingredient2.append(createListPartOfThePizza([ingredient21, ingredient22, ingredient23, ingredient24]));
souce.append(createListPartOfThePizza([souce1, souce2, souce3, souce4]));

[...checkboxCollection].forEach(item => {
    item.addEventListener('click', function() {
        currentli = item;
        title = item.nextSibling.textContent;
        if(item.checked){
            const li = document.createElement('li');
            li.textContent = item.nextSibling.textContent;
            ul.append(li);
            item.nextSibling.style.color = 'red';
            item.nextSibling.nextSibling.style.color = 'red';
            whatToChangePlus(item);
            dasibleLiForChange(base, counter.baseCounter, 1);
            dasibleLiForChange(ingredient1, counter.ingredient1Counter, 2);
            dasibleLiForChange(ingredient2, counter.ingredient2Counter, 2);
            dasibleLiForChange(souce, counter.souceCounter, 1);
            priceFormation(true, item.nextSibling.nextSibling.textContent);
        } else {
            [...ul.children].forEach(itemli => {
                if(itemli.textContent === title) {
                    itemli.remove();
                    item.nextSibling.style.color = 'white';
                    item.nextSibling.nextSibling.style.color = 'white';
                    whatToChangeMinus(item);
                }
            });
            priceFormation(false, item.nextSibling.nextSibling.textContent);
        }
    });
});

function dasibleLiForChange (block, counter, quantity) {
    [...block.children[1].children].forEach(item => {
        item.addEventListener('change', function() {
            disablesLi(block, counter, quantity);
        });
    });
}