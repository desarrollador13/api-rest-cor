const AutenticacionController = require('../controller/autenticacionController');
module.exports = class AutenticacionRouter {

    constructor(app) { 
        this.endPoint = '/autenticacion';
        app.post(this.endPoint,async (req,res) => {
            let controller = new AutenticacionController(req.body);
            let response = await controller.create();
            res.status(response.code).json(response);
        })
    }
}