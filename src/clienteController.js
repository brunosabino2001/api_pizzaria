const db = require('./db'); //IMPORTANDO O NOSSO MODULO DE CONEXÃO COM O BANCO.

const Joi = require('joi');
//JOI- valida se esta estrutura de dados atende a uma validação criada no banco, impedindo que o erro passe por aqui e chegue até o banco.

const bcrypt = require('bcrypt');
//BCRYPT é um meteodo de criptografia do tipo hash para senhas
//com ele iremos proteger a senha digitada pelo usuario

const clienteSchema = Joi.object({
    nome: Joi.string().required(),
    endereco: Joi.string().required(),
    bairro: Joi.string().required(),
    cep: Joi.string().required(),
    cpf: Joi.string().length(11).required(),
    login: Joi.string().required(),
    senha: Joi.string().min(6).required(),
});

//listar todos os clientes 
//QUERY acessa objeto de querystring da requisição
exports.listaClientes = (req, res) => {
    db.query('SELECT * FROM cliente', (err, result) => {
        if (err) {
            console.error('Erro ao buscar clientes:', err);
            res.status(500).json({ error: 'Erro interno de servidor' });
            return;
        }
        res.json(result);
    });
};