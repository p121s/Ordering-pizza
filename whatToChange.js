import {counter} from "./counterCheckedItem.js";

export function whatToChangePlus(item) {
    if(item.parentElement.parentElement.parentElement.id === 'base') {
        console.log(counter.checkCounter(true, 1));
    } else if(item.parentElement.parentElement.parentElement.id === 'ingredient1') {
        console.log(counter.checkCounter(true, 2));
    } else if(item.parentElement.parentElement.parentElement.id === 'ingredient2') {
        console.log(counter.checkCounter(true, 3));
    } else if(item.parentElement.parentElement.parentElement.id === 'souce') {
        console.log(counter.checkCounter(true, 4));
    }
}

export function whatToChangeMinus (item) {
    if(item.parentElement.parentElement.parentElement.id === 'base') {
        console.log(counter.checkCounter(false, 1));
    } else if(item.parentElement.parentElement.parentElement.id === 'ingredient1') {
        console.log(counter.checkCounter(false, 2));
    } else if(item.parentElement.parentElement.parentElement.id === 'ingredient2') {
        console.log(counter.checkCounter(false, 3));
    } else if(item.parentElement.parentElement.parentElement.id === 'souce') {
        console.log(counter.checkCounter(false, 4));
    }
}