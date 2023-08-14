const SequenceRoute = require('./sequenceRouter')
module.exports = (app) => {
    SequenceRoute(app)
};
const sequelize = require('./models/db');

sequelize.sync({ force: false }) // Use true para recriar as tabelas a cada reinicialização
  .then(() => {
    console.log('Database synced');
  })
  .catch((error) => {
    console.error('Error syncing database:', error);
  });
