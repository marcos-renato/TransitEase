const sequelize = require('sequelize');

const Veiculo = sequelize.define('Veiculo', {

  idVeiculo: sequelize.INTEGER,
  dsVeiclo: sequelize.STRING,
  dtCriacao: sequelize.DATE,
  idUsuario: sequelize.INTEGER,
  imgVeiclo: sequelize.BLOB,
  idTipoVeiculo: sequelize.INTEGER,
  dsAno: sequelize.STRING,
  idCor: sequelize.INTEGER,
  dsModelo: sequelize.STRING,
  dsPlaca: dequelize.STRING,
  snAtivo: sequelize.STRING

});

module.exports = Veiculo;
