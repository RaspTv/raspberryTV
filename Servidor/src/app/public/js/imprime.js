

function imprimeLista(listaE){

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
