const { DataTypes } = require('sequelize');
const sequelize = require('./db');
const Pais = require('./Pais'); // Importe o modelo da tabela Pais

const Estado = sequelize.define('Estado', {
  idEstado: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nmEstado: {
    type: DataTypes.STRING,
    allowNull: false
  },
  idPais: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Pais, // Nome do modelo da tabela Pais
      key: 'idPais', // Nome do campo referenciado na tabela Pais
    },
  },
  uf: {
    type: DataTypes.STRING,
    allowNull: false
  },
  snAtivo: {
    type: DataTypes.STRING,
    allowNull: false
  },
});

module.exports = Estado;
