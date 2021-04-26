import {counter} from "./counterCheckedItem.js";

const imgSlicePizzaColl = document.getElementsByClassName('slice_of_pizza');

export function loaderPizzaImage() {
    if(counter.baseCounter > 0) {
        imgSlicePizzaColl[0].style.background = "url('./images/PartPizza1.png') center / 150px 150px no-repeat";
    } else {
        imgSlicePizzaColl[0].style.background = "none";
    }
    if(counter.ingredient1Counter > 0) {
        imgSlicePizzaColl[1].style.background = "url('./images/PartPizza2.png') center / 150px 150px no-repeat";
    } else {
        imgSlicePizzaColl[1].style.background = "none";
    }
    if(counter.ingredient2Counter > 0) {
        imgSlicePizzaColl[2].style.background = "url('./images/PartPizza4.png') center / 150px 150px no-repeat";
    } else {
        imgSlicePizzaColl[2].style.background = "none";
    }
    if(counter.souceCounter > 0) {
        imgSlicePizzaColl[3].style.background = "url('./images/PartPizza3.png') center / 150px 150px no-repeat";
    } else {
        imgSlicePizzaColl[3].style.background = "none";
    }
}