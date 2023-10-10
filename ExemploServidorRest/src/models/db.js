const mysql = require('mysql2');
const connection = mysql.createConnection({
  host:'172.17.0.2',
  user: 'root',
  password:'12345678',
  database: 'transiteasydb'
});

connection.query("select idCidade, idEstado, nmCidade, snAtivo from cidades", function(err,rows,fields){
  if(!err){
    console.log("Resultado:",rows);
  }else{
    console.log('erro: Consulta não realizada com sucesso||');
  }
})

connection.connect(function(err){
  console.log("Conexão realizada com sucesso!");
});