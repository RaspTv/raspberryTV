function mostrar() {
    if ('baixo'.clicked = true) {
        document.getElementById('menu-principal').style.display = 'block';
        document.getElementById('header-1').style.display = 'block';
        document.getElementById('menu-principal').style.backgroundColor = '#7385da';
        document.getElementById('barra-pesquisa').style.display = 'block';
        document.getElementById('baixo').style.display = 'none';
        document.getElementById('cima').style.display = 'block';
    }
}
function esconder() {
    if ('cima'.clicked = true) {
        document.getElementById('menu-principal').style.display = 'none';
        document.getElementById('header-1').style.display = 'none';
        document.getElementById('menu-principal').style.backgroundColor = '#ffffff';
        document.getElementById('barra-pesquisa').style.display = 'none';
        document.getElementById('cima').style.display = 'none';
        document.getElementById('baixo').style.display = 'block';

    }
}
/* Ao clicar redireciona para outro destino.*/
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

/*Variaveis do Carousel. */
var imgs = [];
var slider;
var imgAtual;
var maxImg;
var tmp;



/* Realiza a leitura de dentro da pasta imgs*/
function preCarregamento() {
    var p = 1;
    for (var i = 0; i < 30; i++) {
        imgs[i] = new Image();
        if (i <= 9) {
            imgs[i].src = "imgs/A_page-00" + p + ".jpg";
        }
        else {

            imgs[i].src = "imgs/A_page-00" + p + ".jpg";
        }

        p++;
    }
}
function carregarImg(img) {
    slider.style.backgroundImage = "url('" + imgs[img].src + "')";
}
/* Inicia o carousel para o usuario, e através deste function podemos atribuir o tempo em que este carousel passará de forma automatica. */
function iniciar() {
    preCarregamento();
    imgAtual = 0;
    maxImg = imgs.length - 1;
    slider = document.getElementById("carousel");
    carregarImg(imgAtual);
    TempoTroca = 7000;
    tmp = setInterval(troca1, TempoTroca);
}
/* Realiza a troca da imagem, se estiver na imagem 01 ele passará para a 02. */
function troca1() {
    imgAtual++;
    if (imgAtual > maxImg) {
        imgAtual = 0;
    }
    carregarImg(imgAtual);
}
/* Realiza a troca da imagem, se estiver na imagem 02 ele passará para a 01.*/
function troca2() {
    imgAtual--;
    if (imgAtual > maxImg) {
        imgAtual = 0;
    }
    carregarImg(imgAtual);
}
window.addEventListener("load", iniciar);

/* Realiza a troca da imagem através da tecla 04 do teclado numerico. */
document.addEventListener("keydown", function (event) {
    var tecla = event.keyCode;
    if (tecla == 102) {
        troca1();
    }
    /* Se não... Realiza a troca da imagem através da tecla 06 do teclado numerico. */
    else if (tecla == 100) {
        troca2();
    }
});