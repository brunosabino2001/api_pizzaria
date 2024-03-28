//CONFGIGURAÇÃO DO BANCO DE DADOS MYSQL

const mysql=require('mysql');//IMPORTANDO O MYSQL

//CONFIGURANDO UMA CONEXÃO COM O  BANCO DE DADOS
const db=mysql.createConnection({
host:'localhost',
port:3306,
user: 'root',
password:'root',
database: 'pizzariam',
})

//Testar a conexão com o MySQL
db.connect((err) =>{
 if(err){
console.error('Erro ao conectar ao MySQL',err);
 }else{
  console.log('conectando ao MySQL');
 }
});

module.exports =db;
//AQUI DECLARAMOS QUE ESTA CONSTRUÇÃO SERÁ UM MÓDULO E QUE IREMOS EXPORTAR PARA SER USADO. SEQUIR INDEX.