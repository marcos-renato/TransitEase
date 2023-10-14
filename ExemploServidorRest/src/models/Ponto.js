const sequelize = require('sequelize');

const Ponto = sequelize.define('Ponto', {
  
  idPonto: sequelize.INTEGER,
  dsPonto: sequelize.STRING,
  imgPonto: sequelize.BLOB,
  idUsuario: sequelize.INTEGER,
  dtCriacao: sequelize.DATE,
  idTipoLocal: sequelize.INTEGER,
  idCidade: sequelize.INTEGER,
  snBairro: sequelize.STRING,
  referencia: sequelize.STRING,
  idHorario: sequelize.INTEGER

});

module.exports = Ponto;
