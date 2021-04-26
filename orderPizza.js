import {priceBlock} from "./priceFormation.js";
import {messageCompleteOdrder} from "./messageCompleteOrder.js";

const orderPizzaFinish = {};


export function orderPizza () {
    const order = document.getElementById('order_list').children[2].children;
    [...order].forEach((item, i) => {
        orderPizzaFinish[`part${i}`] = item.textContent;
    });
    orderPizzaFinish.priseFinish = priceBlock.textContent;
    console.log(orderPizzaFinish);
    messageCompleteOdrder();
}