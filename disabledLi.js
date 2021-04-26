export function disablesLi(block, counter) {
    if(counter >= 1){
        console.log('Block');
        [...block.children[1].children].forEach(item => {
            if(item.children[0].checked === false) {
                item.children[0].setAttribute('disabled', true);
            }
        });
    } else if (counter < 1) {
        console.log('Not Block');
        [...block.children[1].children].forEach(item => {
            item.children[0].disabled = false;
        });
    }
}
