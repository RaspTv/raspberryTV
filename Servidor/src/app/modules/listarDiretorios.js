let path = 'public/'
const fs = require('fs')
//const pathh = __dirname; diretori atual
//const pathh = "../../public";npm start

function lerDir(path) {
   
    const pathh = "./src/app/"+path;
    console.log("teste de caminho " + pathh)
    const diretorios = fs.readdirSync(pathh);
    console.log("dentro dos caminhas " + path+diretorios)
    return  {Lista: diretorios};
    
}

module.exports= lerDir;

