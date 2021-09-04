const PruebaN1Controller = require('../controller/pruebaN1Controller')
module.exports = class PruebaN1Router {

    constructor(app) { 
        this.endPoint = '/prueba-n1';
        this.controller = new PruebaN1Controller(3,3);
        app.get(this.endPoint,async (req,res) =>{
            let code = 200;
            let response = await this.controller.create();
            res.status(code).json(response);
        })
    }
}