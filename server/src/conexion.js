//Configuracion para conectarse con mysql

const mysql = require('mysql')
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'pokemon',
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