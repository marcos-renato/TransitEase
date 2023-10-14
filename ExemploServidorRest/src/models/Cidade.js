const sequelize = require('sequelize');

const Cidade = sequelize.define('Cidade', {

  idCidade: sequelize.INTEGER,
  nmCidade: sequelize.STRING,
  idEstado: sequelize.INTEGER,
  snAtivo: sequelize.STRING

});

module.exports = Cidade;
