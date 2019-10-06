
const fs = require('fs')
//const pathh = __dirname; diretori atual
//const pathh = "../../public";

function lerDir() {
   
    const pathh = "./src/app/public";
    console.log("teste de caminho " + pathh)
    const diretorios = fs.readdirSync(pathh);
    console.log("dentro dos caminhas " + diretorios)
    return  {Lista: diretorios};
    
}

module.exports= lerDir;

