var jwt = require('jsonwebtoken');
var configJwt = require('../contrib/utils/configJwt');

module.exports = class AutenticacionBisinnes {

    constructor(data){ 
        this.data = data;
    }

    create() {
        if(this.data.usuario == "" || this.data.contrasena == "") 
            return { msg : "los campos son obligatorios.", code: 400 };
        if(this.data.usuario == "admin" && this.data.contrasena == "Admin19*") {
            let usuario = { id : 1, nombre: "Jonathan Pinto", usuario: "admin", contrasena: "Admin19*" };
            const token = jwt.sign(usuario, configJwt.SECRET, {
                expiresIn: 86400, // 24 hours
            })
            return { msg : "exitoso", token , code : 200 };
        }
        return { msg : "El usuario no existe", code : 419};   
    }
    
}