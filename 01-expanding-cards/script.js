let cards = document.querySelectorAll('.cards .card');
cards = Array.from(cards);

cards.forEach((item) => {
    item.addEventListener('click', () => {

        cards.find((item) => {
            if (item.classList.contains('active')){
                item.classList.remove('active');
            };
        });
        
        item.classList.toggle('active');
    });
});