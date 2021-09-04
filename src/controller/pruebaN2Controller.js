const PruebaN2Business = require('../business/pruebaN2Business');
module.exports = class pruebaN2Controller {

    constructor(f,c){ 
        this.pruebaN1Business = new PruebaN2Business(f,c);
    }
    async create() {
        let res = await this.pruebaN1Business.create();
        return res;
    }
}