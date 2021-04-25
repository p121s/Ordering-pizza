function translit(str) {
    var space = '_';
    let resStr;
    var transl = {
        'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'ё': 'e', 'ж': 'zh',
        'з': 'z', 'и': 'i', 'й': 'j', 'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n',
        'о': 'o', 'п': 'p', 'р': 'r','с': 's', 'т': 't', 'у': 'u', 'ф': 'f', 'х': 'h',
        'ц': 'c', 'ч': 'ch', 'ш': 'sh', 'щ': 'sh','ъ': space,
        'ы': 'y', 'ь': space, 'э': 'e', 'ю': 'yu', 'я': 'ya', ' ': space
    };
if (str !== ''){
    str = str.toLowerCase();
    resStr = str.split('').map(item => transl[item]).join('');

}
 


    return resStr;
}

export {translit};