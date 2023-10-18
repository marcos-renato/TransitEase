const { Sequelize } = require('sequelize');
const database = require('../models/db'); // Certifique-se de que o caminho para a instância do Sequelize está correto
const Pais = require('../models/Pais');
//await database.sync();

// Função para executar a consulta SQL e retornar resultados
const consultarPaises = async (req, res) => {
  try {
    const query = 'select p.idPais ,p.nmPais from transiteasydb.pais p ';
    const results = await database.query(query, { type: Sequelize.QueryTypes.SELECT });

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
        const novoPais = await Pais.create(req.body);
        res.status(201).json(novoPais);
      } catch (error) {
        next(error);
      }
  };

   

// Sua lógica de atualização aqui
const atualizarPais = async (req, res, next) => {
  const idPais = req.params.id; // Supondo que você passa o ID do país como parte da URL.
  try {
    await Pais.update(req.body, {
      where: { idPais },
    });
    res.status(200).json({ message: 'País atualizado com sucesso.' });
  } catch (error) {
    next(error);
  };


};

const excluirPais = (req, res, next) => {
  // Sua lógica de exclusão aqui
  const excluirPais = async (req, res, next) => {
    const id = req.params.id; // Supondo que você passa o ID do país como parte da URL.
    try {
      await Pais.destroy({
        where: { 
          idPais:id 
        },
      });
      res.status(200).json({ message: 'País excluído com sucesso.' });
    } catch (error) {
      next(error);
    }
  };
};

const listarPaises = async (req, res, next) => {
  // Sua lógica para listar todos os países aqui
  try {
    const query = 'select p.idPais ,p.nmPais from transiteasydb.pais p ';
    const results = await database.query(query, { type: Sequelize.QueryTypes.SELECT });

    // Enviar os resultados como resposta
    res.json(results);
  } catch (error) {
    console.error('Erro ao executar a consulta:', error);
    res.status(500).json({ error: 'Erro ao executar ao listar os paises.' });
  }
};

const obterPaisPorId = async (req, res, next) => {
  // Sua lógica para obter um país por ID aqui
  let id = req.params.id;
  try {
    const query = `select p.idPais ,p.nmPais, p.snAtivo from transiteasydb.pais p where p.idPais=${id}`;
    const results = await database.query(query, { type: Sequelize.QueryTypes.SELECT });

    // Enviar os resultados como resposta
    res.json(results);
  } catch (error) {
    console.error('Erro ao executar a consulta:', error);
    res.status(500).json({ error: 'Erro ao executar ao listar os paises.' });
  }
};

module.exports = {
  consultarPaises,
  criarPais,
  atualizarPais,
  excluirPais,
  listarPaises,
  obterPaisPorId,
};