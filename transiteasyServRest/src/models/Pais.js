const { DataTypes } = require('sequelize');
const sequelize = require('./db'); 

const Pais = sequelize.define('paises', {
  idPais: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nmPais: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  snAtivo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Pais;
