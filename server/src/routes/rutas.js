const rutas = require('express').Router();

//Asignar todas rutas:
rutas.get('/', function (req, res) {
    res.send('conectado desde rutas/inicio :D')
});

//Exportar la ruta:
module.exports = rutas;