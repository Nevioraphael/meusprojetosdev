/*
[] variaveis:
   É um pedaço da memória do computador, onde podemos guardar alguma informação.
   Mas, temos que identificar esse pedaço com um nome.

   let + um nome = variável

[] funções:

[] "tempo"
*/

let imagem = document.querySelector(".troca-imagem");

const trocaImagem = () => {
    imagem.style.opacity == 0 ? imagem.style.opacity = 1 : imagem.style.opacity = 0;
}

setInterval(trocaImagem, 3000);