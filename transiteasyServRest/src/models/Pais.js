const  Sequelize  = require('sequelize');
const database = require('../models/db');

const Pais = database.define('pais', {
  idPais: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  nmPais: {
    type: Sequelize.STRING(100),
    allowNull: false
  },
  snAtivo: {type: Sequelize.STRING(1)}
});

module.exports = Pais;
