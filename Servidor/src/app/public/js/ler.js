

// esta função faz a requisição para o servidor

function loadDoc() {
  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      texto=imprimeLista2(this.response)
      document.querySelector("#lista3").innerHTML =texto;
    }
  };
  xhttp.open("GET", "http://localhost:3300/listar", true);

  xhttp.send();
}


function imprimeLista2(listaE){

  var itens, textoHtml, QtdItensArr, i;

 
  itens=JSON.parse(listaE);

  QtdItensArr = itens.Lista.length;

  textoHtml = "<ul>";
  for (i = 0; i < QtdItensArr; i++) {
    textoHtml += "<li><a href='public/" + itens.Lista[i] + "'>" + itens.Lista[i] + "</a></li>";
  }
  textoHtml += "</ul>";

  return textoHtml;
  
}
