const  sequelize  = require('sequelize');
const database = require('../models/db');
const veiculo = database.define('veiculo', {

  idVeiculo:{ 
    type: sequelize.INTEGER(11),
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  dsVeiclo: {
    type: sequelize.STRING(100),
  },
  dtCriacao: {
    type: sequelize.DATE,
  },
  idUsuario: {
    type: sequelize.INTEGER(11),
  },
  imgVeiclo: {
    type: sequelize.BLOB,
  },
  idTipoVeiculo: {
    type: sequelize.INTEGER(11),
  },
  dsAno: {
    type: sequelize.STRING(9),
  },
  idCor: {
    type: sequelize.INTEGER(11),
  },
  dsModelo: {
    type: sequelize.STRING(100),
  },
  dsPlaca: {
    type: sequelize.STRING(10),
  },
  snAtivo: {
    type: sequelize.STRING(1),
  }

});

module.exports = veiculo;
