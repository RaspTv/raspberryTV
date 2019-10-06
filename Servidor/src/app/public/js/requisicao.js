
// esta função faz a requisição para o servidor

function loadDoc() {
    var xhttp = new XMLHttpRequest();
  
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        texto=imprimeLista(this.response)
        document.querySelector("#listar").innerHTML =texto;
      }
    };
    xhttp.open("GET", "http://localhost:3300/listar", true,);
    xhttp.send();
  }
  