
const lerDir=require("../modules/listarDiretorios");

module.exports = (app) => {
     // roteamento para a chamada get para o servidor 
  
   app.get("/listar", function(req,res){
      
     console.log("dentro do rotamento vou chamar o LerDir")
      res.send(lerDir('public/'));
     console.log("saindo do rotas " )
  });
  app.get("/public/", function(req,res){
      
      console.log("dentro do rotamento vou chamar o LerDir")
      res.send(lerDir('public/'));
      console.log("saindo do rotas " )
   });

  app.get("/public/*", function(req,res){
   console.log(req['_parsedOriginalUrl']['pathname'])
   console.log("dentro do rotamento vou chamar o LerDir")
    res.send(lerDir(req['_parsedOriginalUrl']['pathname']));
   console.log("saindo do rotas " )
});
app.get("/lis", function(req,res){
      
   console.log(req)
    res.send(req);
   console.log("saindo do rotas " )
});
  
};
