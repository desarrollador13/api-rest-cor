const express = require('express');
const Application = express();
const PruebaN1Router = require('../../src/router/pruebaN1Router');
const pruebaN1Router =  new PruebaN1Router(Application);
const  PruebaN1Controller = require('../../src/controller/pruebaN1Controller');
const chai = require('chai');
const expect = chai.expect;

describe("Crear endpoint para prueba numero 4",()=>{
    test(`el objecto PruebaN1Router debe contener las propiedades del endpoint`,()=>{
        expect(pruebaN1Router).to.be.instanceof(PruebaN1Router);
    })

    test(`el objecto PruebaN1Router debe contener las propiedades endPoint, controller`,()=>{
        expect(pruebaN1Router).to.has.property("endPoint").to.be.a("string");
        expect(pruebaN1Router).to.has.property("controller").to.be.an.instanceof(PruebaN1Controller);
    })

    test(`se debe establecer el valor de /prueba-n1`,()=>{
        expect(pruebaN1Router).to.has.property("endPoint").to.be.eq("/prueba-n1");
    })
})