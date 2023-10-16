
const SequenceRouter = require('./sequenceRouter');
const PaisRouter = require('./paisRouter');
const EstadoRouter = require('./estadoRouter')
module.exports = (app) => {
    SequenceRouter(app);
    PaisRouter(app);
    EstadoRouter(app);
};
