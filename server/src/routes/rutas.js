const router = require('express').Router();
const conexion = require('../conexion');

//Asignar todas las rutas (y peticiones de cliente):
//Cada router.get() equivale a una query de mysql
//---------------------------------------------------

//Listar todos los tipos de empleado:
router.get('/', (req, res) => {
    let sql = 'SELECT * FROM empleado ORDER BY Antiguedad'
    conexion.query(sql, (err, rows, fields) => {
        if (err) throw err;
        else {
            res.json(rows)
        }
    })
})

/*Listar un tipo de piedra (segun su id):
router.get('/:id', (req, res) => {
    const { id } = req.params
    let sql = 'SELECT * FROM tipo_piedra WHERE id_tipo_piedra = ?'
    conexion.query(sql, [id], (err, rows, fields) => {
        if (err) throw err;
        else {
            res.json(rows)
        }
    })
})*/

//agregar Empleado (insert):
router.post('/', (req, res) => {
    const { RUT, Nombre, Apellido, Direccion, Telefono, Antiguedad, Sueldo, Tipo_trabajo } = req.body
    let sql = `INSERT INTO empleado (RUT, Nombre, Apellido, Direccion, Telefono, Antiguedad, Sueldo, Tipo_trabajo)
                VALUES ('${RUT}', '${Nombre}','${Apellido}'),'${Direccion}','${Telefono}','${Antiguedad}','${Sueldo}','${Tipo_trabajo}';`
    conexion.query(sql, (err, rows, fields) => {
        if (err) throw err;
        else {
            res.json({ status: 'Empleado agregado pe causita!' })
        }
    })
})

//Eliminar Empleado(DELETE):
router.delete('/:id', (req, res) => {
    const { rut } = req.params
    let sql = `DELETE FROM empleado WHERE RUT = '${rut}';`
    conexion.query(sql, (err, rows, fields) => {
        if (err) throw err;
        else {
            res.json({ status: 'Empleado eliminado o despedio!' })
        }
    })
})

//Modificar un dato de la tabla tipo_piedra(UPDATE):
router.put('/:id', (req, res) => {
    const { id } = req.params;
    
    const nombrePiedra = req.body.Dato[0][0].nombre_piedra;
    console.log(nombrePiedra); //Esto devuelve Piedra trueno
    Z
    console.log(req.params) //Eso funciona bien, devuelve el id

    
    // let sql = `UPDATE tipo_piedra
    //             SET id_tipo_piedra = ${req.params},
    //                 nombre_piedra = ${Dato.nombre_piedra}
    //             WHERE id_tipo_piedra = ${id};`
    // conexion.query(sql, (err, rows, fields) => {
    //     if (err) throw err;
    //     else {
    //         res.json({ status: 'Tabla modificada exitosamente!' })
    //     }
    // })
})

//Exportar la ruta:
module.exports = router;
