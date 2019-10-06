
const lerDir=require("../modules/caminho");
const imprimeLista=require("../modules/caminho2");

module.exports = (app) => {
     // roteamento para a chamada get para o servidor 
  app.get("/listar", function(req,res){
     console.log("dentro do rotamento vou chamar o LerDir")
     //res.send(imprimeLista())
      res.send(lerDir());
     // res.send('tesste');  
     console.log("saindo do rotas " )
  });

//   app.get("/inicio2", function(req,res){
  app.get("/public", function(req,res){
   
    res.send(imprimeLista());
  
  
});

};
