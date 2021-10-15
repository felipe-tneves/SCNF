const Services = require('../services/Services')
const transferenciasServices = new Services('Transferencias')

class InfosController{

    static async getAllTransferencias(req, res){
        try {
            const allTransferencias = await transferenciasServices.getAllRecords()

            return res.status(200).json(allTransferencias)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async getByIdTransferencias(req, res){
        const { id } = req.params
        try {
            const byIdTransferencias = await transferenciasServices.getByIdRecords({ id })
            return res.status(200).json(byIdTransferencias);
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async createTransferencias(req, res){
        const newTransferencias = req.body
        try {
            const newTransferenciasCriada = await transferenciasServices.createRecords(newTransferencias)

            return res.status(200).json(newTransferenciasCriada)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async updateTransferencias(req, res){
        const { id } = req.params
        const novasInfos = req.body
        try {
            await transferenciasServices.updateRecords(novasInfos, id)
            const transferenciaAtualizada = await transferenciasServices.getByIdRecords({id})

            return res.status(200).json(transferenciaAtualizada)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async deleteTransferencias(req, res){
        const { id } = req.params
        try {
            await transferenciasServices.deleteRecords(id)
            return res.status(200).json({mensage: `Id ${id} apagado ;-; `})
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = InfosController