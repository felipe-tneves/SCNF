const { Router } = require('express')
const ProfessorController = require('../controllers/professorController')

const router = Router()

router
 .get('/professores', ProfessorController.getAllProfessores)
 .get('/professores/:id', ProfessorController.getByIdProfessor)
 .post('/professores', ProfessorController.createProfessor)
 .put('/professores/:id', ProfessorController.updateProfessor)
 .delete('/professores/:id', ProfessorController.deleteProfessor)


module.exports = router