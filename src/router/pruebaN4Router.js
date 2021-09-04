const pruebaN4Controller = require('../controller/pruebaN4Controller');
const validarToken = require('../contrib/middleware/validarToken');
module.exports = class PruebaN4Router {

    constructor(app) { 
        this.endPoint = '/prueba-n4';
        this.controller = new pruebaN4Controller(7,2);
        app.get(this.endPoint,validarToken,async (req,res) =>{
            let code = 200;
            let response = await this.controller.create();
            res.status(code).json(response);
        })
    }
}