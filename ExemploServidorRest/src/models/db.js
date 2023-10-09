const mysql = require('mysql2');
const connection = mysql.createConnection({
  host:'172.17.0.2',
  user: 'root',
  password:'12345678',
  database: 'transiteasydb'
});

connection.connect(function(err){
  console.log("Conexão realizada com sucesso!");
});