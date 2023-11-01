const sequelize = require('sequelize');
const database = require('../models/db');
const Ponto = database.define('Pontos', {
  
  idPonto: {
    type: sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  dsPonto:{
    type: sequelize.STRING,
    allowNull: false,
  },
  imgPonto: {
    type:sequelize.BLOB,
  },
  idUsuario: {
    type:sequelize.INTEGER,
    allowNull: false,
  },
  dtCriacao: {
    type:sequelize.DATE,
    allowNull: false,
  },
  idTipoLocal: {
    type:sequelize.INTEGER,
    allowNull: false,
  },
  idCidade: {
    type:sequelize.INTEGER,
    allowNull: false,
  },
  snBairro: {
    type:sequelize.STRING,
    allowNull: false,
  },
  referencia: {
    type:sequelize.STRING,
  },
  idHorario: {
    type:sequelize.INTEGER,},

});

module.exports = Ponto;
