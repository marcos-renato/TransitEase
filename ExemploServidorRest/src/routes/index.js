
const SequenceRouter = require('./sequenceRouter');
//const PaisRouter = require('./paisRouter');
module.exports = (app) => {
    SequenceRouter(app);
    //PaisRouter(app);
};
