const PaisControler = require('../controllers/PaisControler')
  module.exports = (app) => {
     app.post('/pais', PaisControler.criarPais);
     app.put('/pais', PaisControler.atualizarPais);
     app.delete('/pais', PaisControler.excluirPais);
     app.get('/pais', PaisControler.listarPaises);
     app.get('/pais/:id', PaisControler.obterPaisPorId);
  }
  
