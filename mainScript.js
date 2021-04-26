import {base1, base2, base3, base4, ingredient11, ingredient12, ingredient13, ingredient14, ingredient21, ingredient22, ingredient23, ingredient24, souce1, souce2, souce3, souce4} from "./partOfThePizzaClass.js";
import {createListPartOfThePizza} from "./createListPartOfThePizza.js";
import {disablesLi} from "./disabledLi.js";
import {whatToChangePlus, whatToChangeMinus} from "./whatToChange.js";
import {counter} from "./counterCheckedItem.js";
import {priceFormation} from "./priceFormation.js";
import {changeColorText} from "./scriptColorStyle.js";
import {buttomDisabled} from "./buttonDisabled.js";
import {loaderPizzaImage} from "./loaderPizzaImage.js";
import {orderPizza} from "./orderPizza.js";


const base = document.getElementById('base');
const ingredient1 = document.getElementById('ingredient1');
const ingredient2 = document.getElementById('ingredient2');
const souce = document.getElementById('souce');
const checkboxCollection = document.getElementsByClassName('checkboxClass');
const orderList = document.getElementById('order_list');
const ul = document.createElement('ul');
export const orderBtn = document.getElementById('order_button');


orderBtn.setAttribute('disabled', true);
orderList.append(ul);
let title;
let currentli;

base.append(createListPartOfThePizza([base1, base2, base3, base4]));
ingredient1.append(createListPartOfThePizza([ingredient11, ingredient12, ingredient13, ingredient14]));
ingredient2.append(createListPartOfThePizza([ingredient21, ingredient22, ingredient23, ingredient24]));
souce.append(createListPartOfThePizza([souce1, souce2, souce3, souce4]));

[...checkboxCollection].forEach(item => {
    item.addEventListener('click', function() {
        if(item.disabled === 'true') {
            changeColorText(item, 'gray', 'transparent');
        } else {
            changeColorText(item, 'white', 'tomato');
        }
        currentli = item;
        title = item.nextSibling.textContent;
        if(item.checked){
            const li = document.createElement('li');
            li.textContent = item.nextSibling.textContent;
            ul.append(li);
            changeColorText(item, 'red', 'red');
            priceFormation(true, item.nextSibling.nextSibling.textContent);
            whatToChangePlus(item);
            dasibleLiForChange(item.parentElement.parentElement.parentElement);
        } else {
            priceFormation(false, item.nextSibling.nextSibling.textContent);
            [...ul.children].forEach(itemli => {
                if(itemli.textContent === title) {
                    itemli.remove();
                    changeColorText(item, 'white', 'tomato');
                }
            });
            whatToChangeMinus(item);
        }
        buttomDisabled();
        loaderPizzaImage();
    });
});

function dasibleLiForChange (block) {
    [...block.children[1].children].forEach(item => {
        item.addEventListener('change', function() {
            if(block === base) {
                disablesLi(base, counter.baseCounter, 1);
            } else if(block === ingredient1) {
                disablesLi(ingredient1, counter.ingredient1Counter, 2);
            } else if(block === ingredient2) {
                disablesLi(ingredient2, counter.ingredient2Counter, 2);
            } else if(block === souce) {
                disablesLi(souce, counter.souceCounter, 1);
            }
        });
    });
}

orderBtn.addEventListener('click', orderPizza);