const Services = require('../services/Services')
const campusServices = new Services('Campus')

class CampiController{

    static async getAllCampus(req, res){
        try {
            const allCampus = await campusServices.getAllRecords()

            return res.status(200).json(allCampus)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async getByIdCampi(req, res){
        const { id } = req.params
        try {
            const byIdCampi = await campusServices.getByIdRecords({ id })
            return res.status(200).json(byIdCampi);
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async createCampi(req, res){
        const newInfo = req.body
        try {
            const newCampiCriada = await campusServices.createRecords(newInfo)

            return res.status(200).json(newCampiCriada)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async updateCampi(req, res){
        const { id } = req.params
        const novasInfos = req.body
        try {
            await campusServices.updateRecords(novasInfos, id)
            const infosAtualizada = await campusServices.getByIdRecords({id})

            return res.status(200).json(infosAtualizada)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async deleteCampi(req, res){
        const { id } = req.params
        try {
            await campusServices.deleteRecords(id)
            return res.status(200).json({mensage: `Id ${id} apagado ;-; `})
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = CampiController