var mongoose = require("mongoose");

var esquema = new mongoose.Schema(
    {
        nombre : String,
        descripcion : String,
        caratula:String,
        compartido:Boolean,
        calificacion: Boolean,
        js: String,
        html: String,
        css: Array,
        autor: String,

    }
);

module.exports = mongoose.model('proyectos', esquema);