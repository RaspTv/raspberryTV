
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
 
   //  QtdItensArr = itens.length;
   
   //  textoHtml = "<ul>";
   //  for (i = 0; i < QtdItensArr; i++) {
   //    textoHtml += "<li>" + itens[i] + "</li>";
   //  }
   //  textoHtml += "</ul>";
   
   //  document.querySelector("#lista").innerHTML = textoHtml;
 
   //  document.querySelector("#lista2").innerHTML = {lista:itens} ;
   
    
    return {lista: itens};
    
 }

 module.exports= imprimeLista;