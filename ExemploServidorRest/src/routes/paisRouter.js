const PaisControler = require('../controllers/PaisControler')
  module.exports = (app) => {
     app.post('/pais', PaisControler.post);
     app.put('/pais', PaisControler.put);
     app.delete('/pais', PaisControler.delete);
     app.get('/pais', PaisControler.get);
     app.get('/pais/:id', PaisControler.getById);
  }
