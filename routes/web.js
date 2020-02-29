'use strict'

const express = require('express');
const api = express.Router();
const tareaCtrl = require('../controllers/tarea');

//index tarea
api.get('/', (req, res) => res.sendFile('/public/index.html', { root: '.' }));

//Routes tareas....
api.get('/tareas', tareaCtrl.obtenerTareas);
api.post('/nuevaTarea', tareaCtrl.nuevaTarea);
api.put('/modificarTarea', tareaCtrl.modificarTarea);
api.delete('/borrarTarea', tareaCtrl.borrarTarea);

module.exports = api; 