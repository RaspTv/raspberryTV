function redirecionar() {
    if ('retorna'.clicked = true) {
        window.location.href = "index.html";
    }
}
/* Ao clicar no botao da pesquisa, esta função pega o que estiver dentro da pesquisa e armazena dentro de uma variavel */
function cliquePesquisa() {

    if ('botao-pesquisa'.clicked = true) {
        var ValorInput = document.getElementById('input').value;
        console.log(ValorInput);

    }
}