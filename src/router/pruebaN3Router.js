const PruebaN3Controller = require('../controller/pruebaN3Controller')
module.exports = class PruebaN3Router {

    constructor(app) { 
        this.endPoint = '/prueba-n3';
        this.controller = new PruebaN3Controller(5,5);
        app.get(this.endPoint,async (req,res) =>{
            let code = 200;
            let response = await this.controller.create();
            res.status(code).json(response);
        })
    }
}