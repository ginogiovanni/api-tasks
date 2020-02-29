'use strict'

/**
/   Este controller pertenece a User y solo a el,
/   se debe crear un controllador para cada entidad.
/   Respetar Esto. 
*/

const db = require('../connection');
const moment = require('moment')


/**
 * funcion que retora todas las tareas ordenadas de manera desendente por la fecha de la tarea
 *
 * @param {*} req
 * @param {*} res
 */
const obtenerTareas = (req, res) =>{

    let sql = "select * from tarea order by fecha_tarea desc";

    db.query(sql).then(data =>{
        return res.status(200).json(data);
    }).catch(error =>{
        return res.status(400).json(error);  
    });

}


/**
 * Funcion para crear una nueva tarea
 *
 * @param {*} req
 * @param {*} res
 */
function nuevaTarea(req, res){
    let body = req.body;

    const { titulo, 
            descripcion, 
            fecha_tarea
        } = body;

    let ahora = moment().format('YYYY-MM-DD h:mm:ss');

    db.query('INSERT INTO tarea(titulo_tarea, descripcion_tarea, fecha_tarea, fecha_creacion) VALUES (${titulo}, ${descripcion}, '+'${fecha_tarea}'+', '+'${ahora}'+') RETURNING *', {
        titulo,
        descripcion,
        fecha_tarea,
        ahora
    }).then(data =>{
        console.log(data)
        return res.status(200).json(data); 
    }).catch(error => {
        console.log(error)
        return res.status(400).json(error);  
    });
}


/**
 * Funcion para modificar una tarea.
 *
 * @param {*} req
 * @param {*} res
 */
const modificarTarea = (req, res) =>{
    
    let body = req.body;

    const { id,
            titulo, 
            descripcion, 
            fecha_tarea
        } = body;

    db.query('UPDATE tarea SET titulo_tarea = ${titulo}, descripcion_tarea = ${descripcion}, fecha_tarea = ${fecha_tarea} WHERE id = ${id} RETURNING id', {
        id,
        titulo, 
        descripcion, 
        fecha_tarea
    }).then(data =>{
        console.log('data: ', data );
        return res.status(200).json(data); 
    }).catch(error => {
        console.log('ERROR:', error); // print the error;
        return res.status(400).json(error);  
    });
}



/**
 * Funcion para eliminar una tarea.
 *
 * @param {*} req
 * @param {*} res
 */
const borrarTarea = (req, res) => {

    let body = req.body;

    const { id } = body;

    db.query('DELETE FROM tarea WHERE id = ${id} RETURNING id', {
        id
    }).then(data =>{
        console.log('data: ', data );
        return res.status(200).json(data); 
    }).catch(error => {
        console.log('ERROR:', error); // print the error;
        return res.status(400).json(error);  
    });

}

module.exports = {
    obtenerTareas,
    nuevaTarea,
    modificarTarea,
    borrarTarea
}