
const SequenceRouter = require('./sequenceRouter');
const PaisRouter = require('./paisRouter');
const EstadoRouter = require('./estadoRouter');
const CidadeRouter =require('./cidadeRouter');
//const PontoRouter =require('./pontoRouter');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json()); // Middleware para analisar o corpo das solicitações em formato JSON

// Outras configurações e rotas da sua aplicação



module.exports = (app) => {
    SequenceRouter(app);
    PaisRouter(app);
    EstadoRouter(app);
    CidadeRouter(app);
    //PontoRouter(app);
};
