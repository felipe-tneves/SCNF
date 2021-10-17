const { Router } = require('express')
const TurmasController = require('../controllers/turmaController')

const router = Router()

router
 .get('/turmas', TurmasController.getAllTurmas)
 .get('/turmas/:id', TurmasController.getByIdTurma)
 .post('/turmas', TurmasController.createTurma)
 .put('/turmas/:id', TurmasController.updateTurma)
 .delete('/turmas/:id', TurmasController.deleteTurma)


 module.exports = router 