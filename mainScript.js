import {BaPartPizzase} from "./partOfThePizzaClass.js"

const base = document.getElementById('base');
const ingredient1 = document.getElementById('ingredient1');
const ingredient2 = document.getElementById('ingredient2');
const souce = document.getElementById('souce');

const base1 = new BaPartPizzase('Стандартная', 5, "Основа");
const base4 = new BaPartPizzase('Слоеное тесто', 7, "Основа");
const base2 = new BaPartPizzase('С сырным бортом', 9, "Основа");
const base3 = new BaPartPizzase('С хот-дог бортом', 12, "Основа");
const ingredient11 = new BaPartPizzase('Помидор', 3, 'Ингредиент 1');
const ingredient12 = new BaPartPizzase('Огурец', 3, 'Ингредиент 1');
const ingredient13 = new BaPartPizzase('Болгарский перец', 5, 'Ингредиент 1');
const ingredient14 = new BaPartPizzase('Ананас', 4, 'Ингредиент 1');
const ingredient21 = new BaPartPizzase('Куриное филе', 6, 'Ингредиент 2');
const ingredient22 = new BaPartPizzase('Говядина', 8, 'Ингредиент 2');
const ingredient23 = new BaPartPizzase('Колбаса салями', 5, 'Ингредиент 2');
const ingredient24 = new BaPartPizzase('Ветчина', 7, 'Ингредиент 2');
const souce1 = new BaPartPizzase('Кетчуп', 2, 'Соус');
const souce2 = new BaPartPizzase('Майонез', 2, 'Соус');
const souce3 = new BaPartPizzase('Барбекю', 2, 'Соус');
const souce4 = new BaPartPizzase('Сырный', 2, 'Соус');