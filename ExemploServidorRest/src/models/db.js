const mysql = require('mysql2');
const connection = mysql.createConnection({
  host:'localhost',
  user: 'root',
  password:'12345678',
  database: 'transiteasydb'
});

connection.connect(function(err){
  console.log("Conexão realizada com sucesso!");
});