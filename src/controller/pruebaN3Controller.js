const PruebaN3Business = require('../business/pruebaN3Business');
module.exports = class pruebaN3Controller {

    constructor(f,c){ 
        this.pruebaN3Business = new PruebaN3Business(f,c);
    }
    async create() {
        let res = await this.pruebaN3Business.create();
        return res;
    }
}