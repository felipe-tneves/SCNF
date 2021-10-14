const Services = require('../services/Services')
const infosServices = new Services('Infos')

class InfosController{

    static async getAllInfos(req, res){
        try {
            const allInfos = await infosServices.getAllRecords()

            return res.status(200).json(allInfos)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async getByIdInfos(req, res){
        const { id } = req.params
        try {
            const byIdInfos = await infosServices.getByIdRecords({ id })
            return res.status(200).json(byIdInfos);
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async createInfos(req, res){
        const newInfo = req.body
        try {
            const newInfoCriada = await infosServices.createRecords(newInfo)

            return res.status(200).json(newInfoCriada)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async updateInfos(req, res){
        const { id } = req.params
        const novasInfos = req.body
        try {
            await infosServices.updateRecords(novasInfos, id)
            const infosAtualizada = await infosServices.getByIdRecords({id})

            return res.status(200).json(infosAtualizada)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async deleteInfos(req, res){
        const { id } = req.params
        try {
            await infosServices.deleteRecords(id)
            return res.status(200).json({mensage: `Id ${id} apagado ;-; `})
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = InfosController