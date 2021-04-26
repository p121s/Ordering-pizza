export function messageCompleteOdrder() {
    const divMessage = document.createElement('div');
    const parMessage = document.createElement('p');
    parMessage.textContent = 'Ваш заказ успешно завершен';
    divMessage.style.cssText = `
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 100px;
    background: white;
    border: 1px solid tomato;
    text-align: center;
    `;
    parMessage.style.cssText = `
    color: green;
    font-size: 40px
    `;
    divMessage.append(parMessage);
    document.body.append(divMessage);
}