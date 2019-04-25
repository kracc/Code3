var mongoose = require("mongoose");

var esquema = new mongoose.Schema(
    {
        correo : String,
        nombre : String,
        contraseña:String,
        cuenta : mongoose.Schema.Types.Mixed,
    }
);

module.exports = mongoose.model('usuarios',esquema);