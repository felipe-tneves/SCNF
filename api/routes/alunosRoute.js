const { Router } = require('express')
const AlunoController = require('../controllers/alunoController')

const router = Router()

router
.get('/alunos', AlunoController.getAllAlunos)
.get('/alunos/:id', AlunoController.getByIdAluno)
.post('/alunos', AlunoController.createAluno)
.put('/alunos/:id', AlunoController.updateAluno)
.delete('/alunos/:id', AlunoController.deleteAluno)

module.exports = router