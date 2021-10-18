const Services = require('../services/Services')
const trancamentosServices = new Services('Trancamentos')

class TrancamentoController{

    static async getAllTrancamentos(req, res){ 
        try {
            const allTrancamentos = await trancamentosServices.getAllRecords()

            return res.status(200).json(allTrancamentos);
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async getByIdTrancamento(req, res){
        const { id } = req.params
        try {
            const byIdTrancamento = await trancamentosServices.getByIdRecords({id})
            return res.status(200).json(byIdTrancamento);
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async createTrancamento(req, res){
        const newTrancamento = req.body
        try {
            const newTrancamentoCriada = await trancamentosServices.createRecords(newTrancamento)

            return res.status(200).json(newTrancamentoCriada)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async updateTrancamento(req, res){
        const { id } = req.params
        const novasInfos = req.body
        try {
            await trancamentosServices.updateRecords(novasInfos, id)
            const notasAtualizada = await trancamentosServices.getByIdRecords({id})

            return res.status(200).json(notasAtualizada)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async deleteTrancamento(req, res){
        const { id } = req.params
        try {
            await trancamentosServices.deleteRecords(id)
            return res.status(200).json({mensage: `Id ${id} apagado ;-; `})
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

}

module.exports = TrancamentoController