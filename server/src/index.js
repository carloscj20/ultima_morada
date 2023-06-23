require('./conexion');

var express = require('express');
var port = (process.env.port || 3000); //Recupera el puerto donde esta trabajando el servidor

//Configurar el express
var app = express();

//Configurar puerto:
app.set('port', port);

//Configurar tipos de datos admitidos (para la query insert into):
app.use(express.json())

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

//Para iniciar el server con la db conectada, posicionarse en:
//C:\Users\Usuario\Desktop\html-css\angular-project\server\src>
//Luego hacer un node .\index.js (se puede hacer con tab)

//Al iniciar angular con ng serve -o, la direccion del localhost es 4200.
//Usar http://localhost:3000/api/?