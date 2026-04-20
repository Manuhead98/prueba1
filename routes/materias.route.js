const {Router} = require('express');
const {getMaterias,getMateriaById} = require('../controladores/materia.controller')


const route = Router();

route.get('/materia', getMaterias)
//route.get('/materia/:id', getMateriaById)


module.exports =route;