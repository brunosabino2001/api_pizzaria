//CRIAÇÃO DE UMA APLICAÇÃO EXPRESS

const express = require('express');//IMPORTANDO EXPRESS
const path = require('path'); //IMPORTANDO PATH

// O PATH RETORMA O CAMINHO DE FORMA DINAMICA

const app=express();

const router =express.Router()

//ISSO PERMITE QUE A GENTE CRIE DIFERENTES URLs E ENDPOINTs 

router.get("/",(req,res)=>{ //REQ =REQUISICAO /RES =RESPOSTA
res.sendFile(path.join(__dirname +'/pages/home.html'))

})

//DENTRO DO GET JÁ DEFINIMOS UMA FUNÇÃO ANÔNIMA CALLBACK, QUE

app.use(router);
//APÓS DECLARAR ROTAS, AQUI FALAMOS PARA NOSSO APP USAR router COMO REFERENCIA

app.listen(3333, ()=>{
console.log('Servidor rodando');

})