

function imprimeLista(path,listaE){

  var itens, textoHtml, QtdItensArr, i;
   itens=JSON.parse(listaE);
  qtdItensArr = itens.Lista.length;
  
  textoHtml ='<div id="apresentar" ><button id="apresentar" type="submit" onclick="callSlider()">Apresentar</button> </div>'
  
  textoHtml += '<div id="lii" ><ul>';
  for (i = 0; i < qtdItensArr; i++) {
     textoHtml += '<li ><h3 onclick="loadDoc(\'' +path+itens.Lista[i] + '/\')">' + itens.Lista[i] + '</h3></li>';
  }
  textoHtml += "</ul></div>";

  //imprime o botão com o path na chamada "onclick"

  document.querySelector("#lista").innerHTML =textoHtml;

  path=path.replace("public/","");

  sessionStorage.setItem("lista", path );
  sessionStorage.setItem("tamanho", qtdItensArr );

  //console.log(textoHtml);
  //return textoHtml;
  
}
