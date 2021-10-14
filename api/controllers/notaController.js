const Services = require('../services/Services')
const notasServices = new Services('Notas')

class NotaController{

    static async getAllNotas(req, res){ 
        try {
            const allNotas = await notasServices.getAllRecords()

            return res.status(200).json(allNotas);
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async getByIdNotas(req, res){
        const { id } = req.params
        try {
            const byIdNotas = await notasServices.getByIdRecords({id})
            return res.status(200).json(byIdNotas);
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async createNotas(req, res){
        const newNota = req.body
        try {
            const newNotaCriada = await notasServices.createRecords(newNota)

            return res.status(200).json(newNotaCriada)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async updateNotas(req, res){
        const { id } = req.params
        const novasInfos = req.body
        try {
            await notasServices.updateRecords(novasInfos, id)
            const notasAtualizada = await notasServices.getByIdRecords({id})

            return res.status(200).json(notasAtualizada)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async deleteNotas(req, res){
        const { id } = req.params
        try {
            await notasServices.deleteRecords(id)
            return res.status(200).json({mensage: `Id ${id} apagado ;-; `})
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

}

module.exports = NotaController