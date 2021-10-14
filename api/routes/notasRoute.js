const { Router } = require('express')
const NotaController = require('../controllers/notaController')

const router = Router()

router
 .get('/notas', NotaController.getAllNotas)
 .get('/notas/:id', NotaController.getByIdNotas)
 .post('/notas', NotaController.createNotas)
 .put('/notas/:id', NotaController.updateNotas)
 .delete('/notas/:id', NotaController.deleteNotas)


module.exports = router