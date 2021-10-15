const { Router } = require('express')
const MateriaController = require('../controllers/materiaController')

const router = Router()

router
 .get('/materias', MateriaController.getAllMaterias)
 .get('/materias/:id', MateriaController.getByIdMateria)
 .post('/materias', MateriaController.createMateria)
 .put('/materias/:id', MateriaController.updateMateria)
 .delete('/materias/:id', MateriaController.deleteMateria)


module.exports = router