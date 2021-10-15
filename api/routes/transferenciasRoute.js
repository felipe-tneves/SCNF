const { Router } = require('express')
const TransferenciasController = require('../controllers/transferenciaController')

const router = Router()

router
 .get('/transferencias', TransferenciasController.getAllTransferencias)
 .get('/transferencias/:id', TransferenciasController.getByIdTransferencias)
 .post('/transferencias', TransferenciasController.createTransferencias)
 .put('/transferencias/:id', TransferenciasController.updateTransferencias)
 .delete('/transferencias/:id', TransferenciasController.deleteTransferencias)


 module.exports = router 