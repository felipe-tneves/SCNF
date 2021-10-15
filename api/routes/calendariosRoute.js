const { Router } = require('express')
const CalendarioController = require('../controllers/calendarioController')

const router = Router()

router
.get('/calendarios', CalendarioController.getAllCalendarios)
.get('/calendarios/:id', CalendarioController.getByIdCalendario)
.post('/calendarios', CalendarioController.createCalendario)
.put('/calendarios/:id', CalendarioController.updateCalendario)
.delete('/calendarios/:id', CalendarioController.deleteCalendario)

module.exports = router