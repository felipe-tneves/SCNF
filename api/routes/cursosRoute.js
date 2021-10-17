const { Router } = require('express')
const CursoController = require('../controllers/cursoController')

const router = Router()

router
.get('/cursos', CursoController.getAllCursos)
.get('/cursos/:id', CursoController.getByIdCurso)
.post('/cursos', CursoController.createCurso)
.put('/cursos/:id', CursoController.updateCurso)
.delete('/cursos/:id', CursoController.deleteCurso)

module.exports = router