const express =require('express'); //IMPORTANDO O EXPRESS
const path=require('path'); //IMPORTANDO O PATH
//O PATH RETORNA O CAMINHO DE FORMA DINÂMICA

const router = express.Router();
//ISSO PERMITE QUE A GENTE CRIE DIFERENTES URLs e ENDPOINTs PARA QUE O FRONTEND POSSA FAZER CHAMADAS

router.get("/",(req,res)=>{ //REQ =REQUISICAO /RES =RESPOSTA
    res.sendFile(path.join(__dirname +'/pages/home.html'))   
    })

    const clientecontroller = require('./clienteController');
    //CHAMANDO O ARQUIVO QUE CONTROLA O CLIENTE

    router.get('/clientes', clientecontroller.listaClientes);

    module.exports = router;