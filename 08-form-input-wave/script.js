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