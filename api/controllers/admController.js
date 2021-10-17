const Services = require('../services/Services')
const AdmsServices = new Services('Adms')

class AdmController{

    static async getAllAdms(req, res){
        try {
            const allAdms = await AdmsServices.getAllRecords()

            return res.status(200).json(allAdms)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async getByIdAdm(req, res){
        const { id } = req.params
        try {
            const byIdAdm = await AdmsServices.getByIdRecords({ id })
            return res.status(200).json(byIdAdm);
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async createAdm(req, res){
        const newInfo = req.body
        try {
            const newAdmCriada = await AdmsServices.createRecords(newInfo)

            return res.status(200).json(newAdmCriada)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async updateAdm(req, res){
        const { id } = req.params
        const novasInfos = req.body
        try {
            await AdmsServices.updateRecords(novasInfos, id)
            const infosAtualizada = await AdmsServices.getByIdRecords({id})

            return res.status(200).json(infosAtualizada)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async deleteAdm(req, res){
        const { id } = req.params
        try {
            await AdmsServices.deleteRecords(id)
            return res.status(200).json({mensage: `Id ${id} apagado ;-; `})
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = AdmController