const sequelize = require('sequelize');

const Pais = sequelize.define('Pais', {
  
  idPais: sequelize.INTEGER,
  nmPais: sequelize.STRING,
  snAtivo: sequelize.STRING

});

module.exports = Pais;
