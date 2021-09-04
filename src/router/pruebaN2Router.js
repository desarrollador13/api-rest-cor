const PruebaN1Controller = require('../controller/pruebaN2Controller')
module.exports = class PruebaN2Router {

    constructor(app) { 
        this.endPoint = '/prueba-n2';
        this.controller = new PruebaN1Controller(1,10);
        app.get(this.endPoint,async (req,res) =>{
            let code = 200;
            let response = await this.controller.create();
            res.status(code).json(response);
        })
    }
}