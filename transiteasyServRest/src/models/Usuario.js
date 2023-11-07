const sequelize = require('sequelize');
const database = require('../models/db');
const Usuario = sequelize.define('Usuario', {
  
  idUsuario: {
    type:sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  cpf: {
    type:sequelize.STRING,
    allowNull: false},
  celPessoal: {type:sequelize.STRING},
  celProfissional: {type:sequelize.STRING},
  nome: {
    type:sequelize.STRING,
    allowNull: false},
  numRg: {
    type:sequelize.INTEGER,
    allowNull: false},
  orgaoExpedidorRg: {
    type:sequelize.STRING,
    allowNull: false},
  habilitacao: {
    type:sequelize.STRING},
  imgFoto:{type:sequelize.BLOB},
  dtNascimento: {
    type:sequelize.DATE,
    allowNull: false},
  email: {
    type:sequelize.STRING,
    allowNull: false},
  idCidade: {
    type:sequelize.INTEGER,
    allowNull: false},
  bairro: {
    type:sequelize.STRING,
    allowNull: false},
  referencia: {
    type:sequelize.STRING,
    allowNull: false}
});

module.exports = Usuario;
