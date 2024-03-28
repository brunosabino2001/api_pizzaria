//CRIAÇÃO DE UMA APLICAÇÃO EXPRESS

const express = require('express');//IMPORTANDO EXPRESS
const path = require('path'); //IMPORTANDO PATH

// O PATH RETORMA O CAMINHO DE FORMA DINAMICA

//***configuração do banco de dados MYSQL****
const db=require('.//db'); //IMPORTANDO O NOSSO MÓDULO DE CONEXÃO COM O BANCO

const app=express();
// O APP IRÁ RECEBER O EXPRESS E TODAS AS SUAS DEPENDÊNCIAS

const router =express.Router()

//***configuração de rotas****
const routes=require('./routes'); //chamando o modulo de rotas

//ISSO PERMITE QUE A GENTE CRIE DIFERENTES URLs E ENDPOINTs 
//DENTRO DO GET JÁ DEFINIMOS UMA FUNÇÃO ANÔNIMA CALLBACK, QUE

app.use(express.json());//AQUI TRANSFORMAMOS OS DADOS QUE CHEGAM COM O BINARIO EM JSON

app.use('/',routes);// 
//APÓS DECLARAR ROTAS, AQUI FALAMOS PARA NOSSO APP USAR router COMO REFERENCIA

app.listen(3333, ()=>{
console.log('Servidor rodando');

})



