const  PruebaN1Business = require('../../src/business/pruebaN1Business');
const chai = require('chai');
const sinonChai = require('sinon-chai');
const expect = chai.expect;

chai.use(sinonChai)

const pruebaN1Business = new PruebaN1Business(3,3);
describe("Pruebas unitarias sobre Businness",()=>{
    test(`Debe existir un objecto PruebaN1Business`,()=>{
        expect(pruebaN1Business).to.be.instanceof(PruebaN1Business);
    })

    test(`propiedades contador,rowArr,letras PruebaN1Business`,()=>{
        expect(pruebaN1Business).to.has.property("contador");
        expect(pruebaN1Business).to.has.property("rowArr");
        expect(pruebaN1Business).to.has.property("letras");
    })

    test(`El objecto pruebaN1Business debe responder al metodo`,()=>{
        expect(pruebaN1Business).respondsTo("create");
    })

    test(`verifica que la opcion create no se ha nula`,()=>{
        expect(pruebaN1Business.create).is.not.null;
    })
})