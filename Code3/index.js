//Importar el modulo express para crear el servidor web
var express = require("express");
//Crear una aplicacion de nodejs con express
var app = express();
//method override
var methodOverride = require('method-override');
// express session
var expressSession = require('express-session');
// mongoose
var mongoose =require('mongoose');
//path
const path =require('path');
// Handlebar
const hbsex = require('express-handlebars');

bodyParser  = require("body-parser"),
methodOverride = require("method-override");
//definir una carpeta como publica para que los usuarios puedan acceder a su contenido
app.use(express.static("public"));

 
//Levantar el servidor en el puerto 3333
app.listen(3333, function(){
    console.log("Servidor levantado en el puerto 3333");
})

app.set('public', path.join(__dirname, 'public'));
app.set('editor', path.join(__dirname, 'public/editor'));

//Inializaciones
require('./database')
//Configuración

//Middleware
app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.use(expressSession({
    secret: 'secreto',
    resave: true,
    saveUninitialized:true
}));

//routes
app.use(require('./Backend/routes/index'));
app.use(require('./Backend/routes/crear'));
app.use(require('./Backend/routes/users'));
