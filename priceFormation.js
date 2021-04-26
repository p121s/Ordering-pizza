const priceBlock = document.getElementById('price').children[0].children[0];

export function priceFormation (AddOrSubtract, price) {
        let textInNum = +priceBlock.textContent;
        console.log(textInNum, price);
        AddOrSubtract ? priceBlock.textContent = textInNum + +price : priceBlock.textContent = textInNum - +price;
    }