const AutenticacionBisinnes = require('../business/autenticacionBusinnes');
module.exports = class AutenticacionController {

    constructor(body){ 
        this.autenticacionBisinnes = new AutenticacionBisinnes(body);
    }
    async create() {
        let res = await this.autenticacionBisinnes.create();
        return res;
    }
}