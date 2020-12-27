let labelField = document.querySelectorAll('.labelInput');
labelField = Array.from(labelField);

labelField.forEach((item) => {
    const data = item.dataset.label;
    const arrayLetras = data.split("");

    arrayLetras.forEach((letra, index) => {
        const spanLetra = document.createElement('span');
        spanLetra.classList.add(`item-${index}`);
        spanLetra.textContent = letra;
        item.appendChild(spanLetra);
    });
});

//Efeito de caixas
const caixa1 = document.querySelector('.caixa');
const caixa2 = document.querySelector('.caixa2');
const SPEED = 2;

document.addEventListener('mousemove', (e) =>{
    mexeCaixa(e, caixa1, SPEED);
    mexeCaixa(e, caixa2, SPEED);
});

const mexeCaixa = (e, elemento, velocidade) => {
    let x = (window.innerWidth - e.pageX * velocidade) / 50;
    let y = (window.innerHeight - e.pageY * velocidade) / 50;

    elemento.style.transform = `translateX(${x}px) translateY(${y}px)`
}