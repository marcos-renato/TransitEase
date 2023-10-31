const  sequelize  = require('sequelize');
const database = require('../models/db');

const Pais = database.define('pais', {
  idPais: {
    type: sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  nmPais: {
    type: sequelize.STRING(100),
    allowNull: false
  },
  snAtivo: {type: sequelize.STRING(1)},
  createdAt:{
    type: sequelize.DATE,
    allowNull:false,
  },
  updatedAt:{
    type: sequelize.DATE,
    allowNull:false,
  },

});

module.exports = Pais;
