//Elementos
let jokeElement = document.querySelector('.joke')
const jokeBtn = document.querySelector('.joke-btn')
const loading = document.querySelector('.loading');

//Listener pra clique do botão de pegar nova piada.
jokeBtn.addEventListener('click', () => {
    toggleLoading();
    pegaPiada();
});

//Ativa/desativa loading
const toggleLoading = () => {
    loading.classList.toggle("d-none");
}

/*
    Objeto de configuração que passaremos para o fetch.
    No caso, pedimos para que aceite apenas no "headers" conteúdos em JSON.
*/
const config = {
    headers: {
        Accept: 'application/json'
    }
}

/*
    Função ASYNC que pega a piada.
    Passamos o conteúdo de configuração, e tratamos com promises.
    
    Dentro dela, criamos uma variável RES que espera (AWAIT) o fetch
    e faz todas as validações antes de mostrar na tela.
*/
async function pegaPiada () {
    const res = await fetch ('https://icanhazdadjoke.com', config).then(response => {
        if (response.status === 200) {
            response.json().then(data => {
                toggleLoading();
                jokeElement.textContent = data.joke;
            });
        } else {
            throw new Error ("Deu Ruim");
        }
    }).catch(error => {
        alert(`Erro: ${error}`);
    })
}

pegaPiada();