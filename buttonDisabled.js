import {counter} from "./counterCheckedItem.js";
import {orderBtn} from "./mainScript.js";

export function buttomDisabled() {
    if(counter.baseCounter > 0 && counter.ingredient1Counter > 0 && counter.ingredient2Counter > 0 && counter.souceCounter > 0)  {
        orderBtn.disabled = false;
    } else {
        orderBtn.disabled = true;
    }
}