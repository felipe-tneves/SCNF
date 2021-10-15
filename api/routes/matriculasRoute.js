const { Router } = require('express')
const MatriculaController = require('../controllers/matriculaController')

const router = Router()

router
.get('/matriculas', MatriculaController.getAllMatriculas)
.get('/matriculas/:id', MatriculaController.getByIdMatricula)
.post('/matriculas', MatriculaController.createMatricula)
.put('/matriculas/:id', MatriculaController.updateMatricula)
.delete('/matriculas/:id', MatriculaController.deleteMatricula)

module.exports = router