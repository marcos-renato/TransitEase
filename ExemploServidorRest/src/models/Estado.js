const sequelize = require('sequelize');

const Estado = sequelize.define('Estado', {
  
  idEstado: sequelize.INTEGER,
  nmEstado: sequelize.STRING,
  idPais: sequelize.INTEGER,
  uf: sequelize.STRING,
  snAtivo: sequelize.STRING

});

module.exports = Estado;
