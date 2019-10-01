
function imprimeLista(){

   var itens, textoHtml, QtdItensArr, i;

   itens = [ 'bpmn posto.PNG',
   'desktop.ini',
   'login.txt',
   'Microsoft Edge.lnk',
   'resolucao exercicio 6.xlsx',
   'Sem título.png',
   'Sem título.xcf',
   'servidorExpress',
   'teste',
   'teste.png',
   'teste3' ]

   QtdItensArr = itens.length;

   textoHtml = "<ul>";
   for (i = 0; i < QtdItensArr; i++) {
     textoHtml += "<li><a href='carousel.html'>" + itens[i] + "</a></li>";
   }
   textoHtml += "</ul>";



   document.querySelector("#lista").innerHTML = textoHtml;

   document.querySelector("#lista2").innerHTML = {lista:itens} ;
  
   
   return textoHtml;
   
}

function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      //document.getElementById("#lista3").innerHTML = this.statusText;
      //document.querySelector("#lista3").innerHTML =this.responseText;
      texto=imprimeLista2(this.response)
      document.querySelector("#lista3").innerHTML =texto;
    }
  };
  xhttp.open("GET", "http://localhost:3300/listar", true);

  console.log("dentro do loadDoc")
  xhttp.send();

  console.log('fechou')
}


function imprimeLista2(listaE){

  var itens, textoHtml, QtdItensArr, i;

  itens=JSON.parse(listaE);

  QtdItensArr = itens.Lista.length;

  textoHtml = "<ul>";
  for (i = 0; i < QtdItensArr; i++) {
    textoHtml += "<li><a href='" + itens.Lista[i] + "'>" + itens.Lista[i] + "</a></li>";
  }
  textoHtml += "</ul>";
  
  return textoHtml;
  
}
