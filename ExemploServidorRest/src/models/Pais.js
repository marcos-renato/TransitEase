const sequelize = require('sequelize');

const pais = sequelize.define('pais', {
  
  idPais: sequelize.INTEGER,
  nmPais: sequelize.STRING,
  snAtivo: sequelize.STRING

});

module.exports = pais;
