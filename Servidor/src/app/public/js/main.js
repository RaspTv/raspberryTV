
function mostrar() {
    if (document.getElementById('topo').style.display = 'none') {
        document.getElementById('topo').style.display = 'block';
    }
}
function esconder() {
    if (document.getElementById('topo').style.display = 'block') {
        document.getElementById('topo').style.display = 'none';
    }
}

/*Variaveis. */
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
            imgs[i].src = "static/imgs/A_page-00" + p + ".jpg";
        }
        else {

            imgs[i].src = "static/imgs/A_page-00" + p + ".jpg";
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