const  PruebaN1Controller = require('../../src/controller/pruebaN1Controller');
const chai = require('chai');
const sinonChai = require('sinon-chai');
const expect = chai.expect;

chai.use(sinonChai)

const pruebaN1Controller = new PruebaN1Controller(3,3);
describe("Pruebas unitarias sobre Controller",()=>{
    test(`Debe existir un objecto PruebaN1Business`,()=>{
        expect(pruebaN1Controller).to.be.instanceof(PruebaN1Controller);
    })

    test(`propiedades pruebaN1Business PruebaN1Business`,()=>{
        expect(pruebaN1Controller).to.has.property("pruebaN1Business");
    })

    test(`El objecto pruebaN1Business debe responder al metodo`,()=>{
        expect(pruebaN1Controller).respondsTo("create");
    })

    test(`verifica que la opcion create no se ha nula`,()=>{
        expect(pruebaN1Controller.create).is.not.null;
    })
})