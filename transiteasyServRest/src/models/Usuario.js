const sequelize = require('sequelize');

const Usuario = sequelize.define('Usuario', {
  
  idUsuario: sequelize.INTEGER,
  cpf: sequelize.STRING,
  celPessoal: sequelize.STRING,
  celProfissional: sequelize.STRING,
  nome: sequelize.STRING,
  numRg: sequelize.INTEGER,
  orgaoExpedidorRg: sequelize.STRING,
  habilitacao: sequelize.STRING,
  imgFoto:sequelize.BLOB,
  dtNascimento: sequelize.DATE,
  email: sequelize.STRING,
  idCidade: sequelize.INTEGER,
  bairro: sequelize.STRING,
  referencia: sequelize.STRING

});

module.exports = Usuario;
