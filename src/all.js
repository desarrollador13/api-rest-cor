'use strict';

const PruebaN1Router = require('./router/pruebaN1Router');
const PruebaN2Router = require('./router/pruebaN2Router');
const PruebaN3Router = require('./router/pruebaN3Router');
const PruebaN4Router = require('./router/pruebaN4Router');
const AutenticacionRouter = require('./router/autenticacionRouter');
module.exports = function(app) {
    new PruebaN1Router(app);
    new PruebaN2Router(app);
    new PruebaN3Router(app);
    new PruebaN4Router(app);
    new AutenticacionRouter(app);
}

//docker build -f Dockerfile -t api-prueba .
//docker build -f Dockerfile -t api-prueba .
//docker run --name api-prueba -p 3001:3001 api-prueba