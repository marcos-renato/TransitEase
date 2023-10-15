const estadoControler = require('../controllers/EstadoControler')
  module.exports = (app) => {
     app.post('/estado', estadoControler.post);
     app.put('/estado', estadoControler.put);
     app.delete('/estado', estadoControler.delete);
     app.get('/estado', estadoControler.get);
     app.get('/estado/:id', estadoControler.getById);
  }
