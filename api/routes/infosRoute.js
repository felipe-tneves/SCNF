const { Router } = require('express')
const InfosController = require('../controllers/infoController')

const router = Router()

router
 .get('/infos', InfosController.getAllInfos)
 .get('/infos/:id', InfosController.getByIdInfos)
 .post('/infos', InfosController.createInfos)
 .put('/infos/:id', InfosController.updateInfos)
 .delete('/infos/:id', InfosController.deleteInfos)


module.exports = router