var pgp = require('pg-promise')(/* options */);
var db = pgp('postgres://postgres:root@localhost:5432/tasks');// Configurar servidor base de datos.

/**
 * Metodo para la conección con la BD
 *
 * @returns
 */
const conexionBD = () => {

    db.one('SELECT $1 AS value', 123)
        .then((data) => {
            console.log('Database pg conectada!');
        })
        .catch((error) => {
            console.log('Error en la conexion!', error);
        });
    return db;
}

module.exports = conexionBD();