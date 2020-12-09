const boxes = document.querySelectorAll('.box');
const height = window.innerHeight;

const calcula = () => {
    boxes.forEach((item) => {
        const rect = item.getBoundingClientRect().top;
        
        if (rect < height - 100) {
            item.classList.add("ativo")
        } else {
            item.classList.remove("ativo")
        }
    });
}

window.addEventListener('scroll', calcula);

calcula();