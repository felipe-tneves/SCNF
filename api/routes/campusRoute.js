const { Router } = require('express')
const CampiController = require('../controllers/campiController') 

const router = Router()

router
.get('/campus', CampiController.getAllCampus)
.get('/campus/:id', CampiController.getByIdCampi)
.post('/campus', CampiController.createCampi)
.put('/campus/:id', CampiController.updateCampi)
.delete('/campus/:id', CampiController.deleteCampi)

module.exports = router