const search = document.querySelector('.search-button');
const input = document.querySelector('.input')

search.addEventListener('click', function() {
    this.closest(".search").classList.toggle("ativo");
    
    if (input.value) {
        input.value = "";
    }

    input.focus();
})