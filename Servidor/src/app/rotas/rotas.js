const lerDir=require("../modules/listarDiretorios");
module.exports = (app) => {



    app.get("/public/*", function (req, res) {
        console.log(req['_parsedOriginalUrl']['pathname'])
        console.log("dentro do rotamento vou chamar o LerDir")
        res.send(lerDir(req['_parsedOriginalUrl']['pathname']));
        console.log("saindo do rotas ")
    });
    
};