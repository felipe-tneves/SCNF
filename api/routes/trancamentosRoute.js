const { Router } = require('express')
const TrancamentoController = require('../controllers/trancamentoController')

const router = Router()

router
 .get('/trancamentos', TrancamentoController.getAllTrancamentos)
 .get('/trancamentos/:id', TrancamentoController.getByIdTrancamento)
 .post('/trancamentos', TrancamentoController.createTrancamento)
 .put('/trancamentos/:id', TrancamentoController.updateTrancamento)
 .delete('/trancamentos/:id', TrancamentoController.deleteTrancamento)


 module.exports = router 