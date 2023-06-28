//Configuracion para conectarse con mysql

var mysql = require('mysql')
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'ultimamorada',
    port: 3306
})

connection.connect((err) => {
    if (err) {
        console.log('hubo un error: ', err)
    }
    else {
        console.log('db conectada!')
    }
})

module.exports = connection;

// connection.query('SELECT 1 + 1 AS solution', (err, rows, fields) => {
//   if (err) throw err

//   console.log('The solution is: ', rows[0].solution)
// })
