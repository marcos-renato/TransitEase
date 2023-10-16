const { Sequelize } = require('sequelize');
const sequelize = require('../models/db'); // Certifique-se de que o caminho para a instância do Sequelize está correto

// Função para executar a consulta SQL e retornar resultados
const consultarPaises = async (req, res) => {
  try {
    const query = 'select p.idPais ,p.nmPais from transiteasydb.pais p ';
    const results = await sequelize.query(query, { type: Sequelize.QueryTypes.SELECT });

    // Enviar os resultados como resposta
    res.json(results);
  } catch (error) {
    console.error('Erro ao executar a consulta:', error);
    res.status(500).json({ error: 'Erro ao executar a consulta.' });
  }
};

// Função para criar um novo registro de país
const criarPais = async (req, res, next) => {
  try {
    // Use o modelo para criar um novo registro
    const newPais = await Pais.create(req.body);
    res.status(201).json(newPais);
  } catch (error) {
    next(error);
  }
};

const atualizarPais = (req, res, next) => {
  // Sua lógica de atualização aqui
};

const excluirPais = (req, res, next) => {
  // Sua lógica de exclusão aqui
};

const listarPaises = async (req, res, next) => {
  // Sua lógica para listar todos os países aqui
  try {
    const query = 'select p.idPais ,p.nmPais from transiteasydb.pais p ';
    const results = await sequelize.query(query, { type: Sequelize.QueryTypes.SELECT });

    // Enviar os resultados como resposta
    res.json(results);
  } catch (error) {
    console.error('Erro ao executar a consulta:', error);
    res.status(500).json({ error: 'Erro ao executar ao listar os paises.' });
  }
};

const obterPaisPorId = (req, res, next) => {
  // Sua lógica para obter um país por ID aqui
};

module.exports = {
  consultarPaises,
  criarPais,
  atualizarPais,
  excluirPais,
  listarPaises,
  obterPaisPorId,
};