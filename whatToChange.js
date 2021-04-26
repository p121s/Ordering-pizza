import {counter} from "./counterCheckedItem.js";

export function whatToChangePlus(item) {
    if(item.parentElement.parentElement.parentElement.id === 'base') {
        counter.checkCounter(true, 1);
    } else if(item.parentElement.parentElement.parentElement.id === 'ingredient1') {
        counter.checkCounter(true, 2);
    } else if(item.parentElement.parentElement.parentElement.id === 'ingredient2') {
        counter.checkCounter(true, 3);
    } else if(item.parentElement.parentElement.parentElement.id === 'souce') {
        counter.checkCounter(true, 4);
    }
}

export function whatToChangeMinus (item) {
    if(item.parentElement.parentElement.parentElement.id === 'base') {
        counter.checkCounter(false, 1);
    } else if(item.parentElement.parentElement.parentElement.id === 'ingredient1') {
        counter.checkCounter(false, 2);
    } else if(item.parentElement.parentElement.parentElement.id === 'ingredient2') {
        counter.checkCounter(false, 3);
    } else if(item.parentElement.parentElement.parentElement.id === 'souce') {
        counter.checkCounter(false, 4);
    }
}