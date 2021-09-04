const PruebaN1Business = require('../business/pruebaN1Business');
module.exports = class pruebaN1Controller {

    constructor(f,c){ 
        this.pruebaN1Business = new PruebaN1Business(f,c);
    }
    async create() {
        let res = await this.pruebaN1Business.create();
        return res;
    }
}





