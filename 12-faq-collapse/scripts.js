const perguntas = document.querySelectorAll('.pergunta-link');

perguntas.forEach((item) => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        item.closest(".faq-pergunta").classList.toggle("ativa");
    });
})