/*
    Constantes
*/
const next = document.querySelector('.btn-next');
const prev = document.querySelector('.btn-prev');
const steps = document.querySelectorAll('.step');
const bar = document.querySelector('.bar');

/*
    Passo atual. Será utilizado para calcular a
    porcentagem da barrinha.
*/
let passoAtual = 1;

/*
    Clique do "next".

    Quando ele clica, ele incrementa o passoAtual em + 1,
    e checa pra ver se o passo é maior que
    a quantidade de círculos (STEPS).
    Se for, ele freia e seta um valor máximo que é
    a quantidade de círculos.

    Aí chama a função "atualiza".
*/
next.addEventListener('click', () => {
    passoAtual++;

    if (passoAtual > steps.length) {
        passoAtual = steps.length;
    }

    atualiza();
});

/*
    Clique do "prev".

    A ideia é a mesma que a do "next",
    só que ele diminui o valor em 1, e
    quando o passoAtual for menor que 1,
    ele seta um valor mínimo para 1.

    Aí chama a função "atualiza".
*/
prev.addEventListener('click', () => {
    passoAtual--;

    if (passoAtual < 1) {
        passoAtual = 1;
    }

    atualiza();
});



/*
    Função que atualiza a barrinha.

    ÍNDICE | PROPÓSITO
       1   | ForEach que passa por cada círculo e verifica
           | se o index dele é menor que o passoAtual.
           | Isto é, todos os itens que tiverem, por exemplo,
           | menores que o passo 3 (1 e 2) vão cair nessa condicional.
           | Se for, ele adiciona a classe "active".
           | Se não, remove-a.
---------------------------------------------------------------------------
       2   | Declarando variável que pega a quantidade de círculos ativos.
---------------------------------------------------------------------------
       3   | Determinando o tamanho da barrinha de acordo com o progresso.
           | O JS pega a quantidade de ativos - 1, a quantidade total
           | de círculos - 1, os divide, multiplica por 100 e seta isso
           | como a width do elemento.
           |
           | Desta forma, se o passoAtual é 2, por exemplo, e vai pro 3,
           | deve ativar o terceiro círculo, e a conta seria:
           | 
           | ativos.length = 2 (3 - 1)
           | steps.length = 3 (4 - 1)
           |  
           | Logo, temos:
           |
           | (2 / 3 ) * 100
           | 0,66 * 100
           | 66%.
---------------------------------------------------------------------------
       4   | Condicional que verifica se o passoAtual é 1.
           | Se for, o JS desabilita o botão "prev" e cancela a função.
---------------------------------------------------------------------------
       5   | Condicional que verifica se o passoAtual é igual à
           | quantidade de círculos.
           | 
           | Se for, o JS desabilita o botão "next" e cancela a função.
---------------------------------------------------------------------------
       6   | Aqui removemos quaisquer "disabled" que houver nos
           | botões de "prev" e "next", se o valor da "passoAtual"
           | não cair nas condicionais acima.
---------------------------------------------------------------------------
*/
const atualiza = () => {

    //1
    steps.forEach((item, index) => {
        if (index < passoAtual) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });

    //2
    const ativos = document.querySelectorAll('.active').length

    //3
    bar.style.width = ((ativos - 1) / (steps.length - 1)) * 100 + "%"

    //4
    if (passoAtual === 1) {
        prev.disabled = true;
        return;
    }

    //5
    if (passoAtual === steps.length) {
        next.disabled = true;
        return;
    }

    //6
    prev.disabled = false;
    next.disabled = false;
}