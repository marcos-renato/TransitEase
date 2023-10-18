const  Sequelize  = require('sequelize');
const database = require('./db'); 

const pais = database.define('pais', {
  idPais: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  nmPais: {
    type: Sequelize.STRING,
    allowNull: false
  },
  snAtivo: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = pais;
