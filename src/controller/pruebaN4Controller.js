const PruebaN4Business = require('../business/pruebaN4Businnes');
module.exports = class pruebaN4Controller {

    constructor(f,c){ 
        this.ruebaN4Business = new PruebaN4Business(f,c);
    }
    async create() {
        let res = await this.ruebaN4Business.create();
        return res;
    }
}