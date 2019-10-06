
const lerDir=require("../modules/listarDiretorios");

module.exports = (app) => {
  
     // roteamento para a chamada get para o servidor 
  app.get("/listar", function(req,res){
     console.log("dentro do rotamento vou chamar o LerDir")
      res.send(lerDir());
     console.log("saindo do rotas " )
  });

};
