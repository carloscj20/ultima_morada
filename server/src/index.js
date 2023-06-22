require('./conexion');

var express = require('express');
var port = (process.env.port || 3000); //Recupera el puerto donde esta trabajando el servidor

//Configurar el express
var app = express();

//Configurar puerto:
app.set('port', port);

//Configurar rutas:
app.use('/api', require('./routes/rutas'));

//Iniciar express:
app.listen(port, (error) => {
    if (error) {
        console.log('Hubo un error al iniciar el servidor :(');
    } else {
        console.log('Servidor iniciado en el puerto:', port);
    }
});