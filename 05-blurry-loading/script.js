//Constantes
const container = document.querySelector('.container');
const elProgress = document.querySelector('.progress');

/*
    Função de Progresso.
    Adaptado de: https://stackoverflow.com/questions/47285198/fetch-api-download-progress-indicator

    Ela recebe dois parâmetros, a quantidade carregada, e o total.
    Aí faz um Math.round para arredondar o valor que vier dividido entre o carregado e o total,
    multiplicado por 100. Esse valor então é atribuído ao elemento elProgress.

    Além disso, há um efeito de opacidade proporcional à quantidade baixada.
    Quanto mais conteúdo baixado, menor a opacidade do elemento elProgress.
*/
function progress({loaded, total}) {
    const percentage = Math.round((loaded/total)*100);
    elProgress.innerHTML = `${percentage}%`;
    elProgress.style.opacity = (100 - percentage) / 100;
}

/*
    Função de loading.
    Adaptado de: https://stackoverflow.com/questions/47285198/fetch-api-download-progress-indicator

    Começa com a variável RESPONSE, que faz um fetch na API do Unsplash.
    Aí pegamos a quantidade de dados da response (headers.get(content-length)).
    Depois a transformamos em número usando parseInt, e em decimal (10).

    Aí o resto estou tentando entender, pra falar a verdade.
    Atualizo aqui quando for o caso.
*/
async function load() {
    const response = await fetch('//source.unsplash.com/random/1920x1080');
    const contentLength = response.headers.get('content-length');
    const total = parseInt(contentLength, 10);
    let loaded = 0;
  
    const res = new Response(new ReadableStream({
      async start(controller) {
        const reader = response.body.getReader();
        while(true) {
          const {done, value} = await reader.read();
          if (done) break;
          loaded += value.byteLength;
          progress({loaded, total})
          controller.enqueue(value);
        }
        controller.close();
      },
    }));

    const blob = await res.blob();
    const image = URL.createObjectURL(blob);
    container.style.backgroundImage = "url('" + image + "')";
  }

  load();