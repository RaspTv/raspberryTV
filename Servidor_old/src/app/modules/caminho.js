
const fs = require('fs')
//const pathh = __dirname; 
//const pathh = "../../public";

function lerDir() {

    const pathh = __dirname;   
    console.log(pathh);
    const ler = fs.readdirSync(pathh);
    console.log("dentro do caminhos   " + ler)
    
    
    const pathh2 = "./src/app/public";
    console.log("teste de caminho " + pathh2)
    const ler2 = fs.readdirSync(pathh2);
    console.log("dentro dos caminhas " + ler2)

    return  ler2;
}

module.exports= lerDir;

