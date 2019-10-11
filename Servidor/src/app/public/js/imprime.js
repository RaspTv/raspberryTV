

function imprimeLista(path,listaE){

  var itens, textoHtml, QtdItensArr, i;
   itens=JSON.parse(listaE);
  QtdItensArr = itens.Lista.length;

  textoHtml = "<div class=\"containerFlex\" id='recursiveContainer'><ul>";
  for (i = 0; i < QtdItensArr; i++) {
    //textoHtml += "<li><a href='public/" + itens.Lista[i] + "'>" + itens.Lista[i] + "</a></li>";
    textoHtml += '<li><h3 onclick="loadDoc(\'' +path+itens.Lista[i] + '/\')">' + itens.Lista[i] + '</h3></li>';
    console.log(textoHtml)
  }
  textoHtml += "</ul></div>";

  return textoHtml;
  
}
