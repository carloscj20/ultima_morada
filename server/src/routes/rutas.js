const router = require('express').Router();
const conexion = require('../conexion');

//Asignar todas las rutas (y peticiones de cliente):
//Cada router.get() equivale a una query de mysql
//---------------------------------------------------

//Listar todos los tipos de piedra (READ):
router.get('/', (req, res) => {
    let sql = 'SELECT * FROM tipo_piedra ORDER BY id_tipo_piedra'
    conexion.query(sql, (err, rows, fields) => {
        if (err) throw err;
        else {
            res.json(rows)
        }
    })
})

//Listar un tipo de piedra (segun su id):
router.get('/:id', (req, res) => {
    const { id } = req.params
    let sql = 'SELECT * FROM tipo_piedra WHERE id_tipo_piedra = ?'
    conexion.query(sql, [id], (err, rows, fields) => {
        if (err) throw err;
        else {
            res.json(rows)
        }
    })
})

//agregar piedra (UPDATE):
router.post('/', (req, res) => {
    const { id_tipo_piedra, nombre_piedra } = req.body
    let sql = `INSERT INTO tipo_piedra (id_tipo_piedra, nombre_piedra) VALUES ('${id_tipo_piedra}', '${nombre_piedra}');`
    conexion.query(sql, (err, rows, fields) => {
        if (err) throw err;
        else {
            res.json({ status: 'Tipo de  piedra agregada!' })
        }
    })
})

//Eliminar tipo de piedra (DELETE):
router.delete('/:id', (req, res) => {
    const { id } = req.params
    let sql = `DELETE FROM tipo_piedra WHERE id_tipo_piedra = '${id}';`
    conexion.query(sql, (err, rows, fields) => {
        if (err) throw err;
        else {
            res.json({ status: 'Equipo eliminado!' })
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