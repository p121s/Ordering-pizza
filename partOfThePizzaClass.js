class PartPizza {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
}

const base1 = new PartPizza('Основа стандартная', 5);
const base2 = new PartPizza('Основа со слоеным тестом', 7);
const base3 = new PartPizza('Основа с сырным бортом', 9);
const base4 = new PartPizza('Основа с хот-дог бортом', 12);
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

export {base1, base2, base3, base4, ingredient11, ingredient12, ingredient13, ingredient14, ingredient21, ingredient22, ingredient23, ingredient24, souce1, souce2, souce3, souce4};