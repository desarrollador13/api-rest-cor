var jwt = require('jsonwebtoken');
var configJwt = require('../../contrib/utils/configJwt');

module.exports = (req, res, next) => {
	let bearerHeader = null;
	let bearerToken = null;
	let decoded = null;
	bearerHeader = req.headers["authorization"];
    try {
        if (!bearerHeader) return res.status(403).json({status: 403, msg: "token invalido"});
        bearerToken = bearerHeader.split(' ')[1];
        decoded = jwt.verify(bearerToken, configJwt.SECRET);
        console.log(decoded)
        if(decoded.usuario == "admin" && decoded.contrasena == "Admin19*") {
            next();
        }else {
            return res.status(401).json({status:401, msg: "No autorizado"});
        }
    }catch(error) {
        return res.status(401).json({status:401, msg: "No autorizado"})
    }
}