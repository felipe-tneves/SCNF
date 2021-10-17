const { Router } = require('express')
const AdmController = require('../controllers/admController')

const router = Router()

router
.get('/adms', AdmController.getAllAdms)
.get('/adms/:id', AdmController.getByIdAdm)
.post('/adms', AdmController.createAdm)
.put('/adms/:id', AdmController.updateAdm)
.delete('/adms/:id', AdmController.deleteAdm)

module.exports = router