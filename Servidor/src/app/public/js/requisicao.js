
// esta função faz a requisição para o servidor

function loadDoc(path) {
    var xhttp = new XMLHttpRequest();
  
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        texto=imprimeLista(path,this.response)
        document.querySelector("body").innerHTML =texto;
      }
    };
    xhttp.open("GET", "http://localhost:3300/"+path, true,);
    xhttp.send();
  }
