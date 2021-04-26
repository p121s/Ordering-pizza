export function changeColorText(text, color1, color2) {
    text.nextSibling.style.color = color1;
    text.nextSibling.nextSibling.style.color = color2;
}