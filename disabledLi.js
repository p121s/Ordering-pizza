export function disablesLi(block, counter, quantity) {
    if(quantity === 1){
        if(counter === 1){
        [...block.children[1].children].forEach(item => {
            if(item.children[0].checked === false) {
                item.children[0].setAttribute('disabled', true);
            }
        });
        } else if (counter === 0) {
            [...block.children[1].children].forEach(item => {
                item.children[0].disabled = false;
            });
        }
    } else if(quantity === 2) {
        if(counter >= 2){
            [...block.children[1].children].forEach(item => {
                if(item.children[0].checked === false) {
                    item.children[0].setAttribute('disabled', true);
                }
            });
            } else if (counter < 2) {
                [...block.children[1].children].forEach(item => {
                    item.children[0].disabled = false;
                });
            }
    }
}
