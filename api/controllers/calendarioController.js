const Services = require('../services/Services')
const calendarioServices = new Services('Calendarios')

class CalendarioController{

    static async getAllCalendarios(req, res){
        try {
            const allCalendario = await calendarioServices.getAllRecords()

            return res.status(200).json(allCalendario)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async getByIdCalendario(req, res){
        const { id } = req.params
        try {
            const byIdCalendario = await calendarioServices.getByIdRecords({ id })
            return res.status(200).json(byIdCalendario);
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async createCalendario(req, res){
        const newInfo = req.body
        try {
            const newCalendarioCriada = await calendarioServices.createRecords(newInfo)

            return res.status(200).json(newCalendarioCriada)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async updateCalendario(req, res){
        const { id } = req.params
        const novasInfos = req.body
        try {
            await calendarioServices.updateRecords(novasInfos, id)
            const infosAtualizada = await calendarioServices.getByIdRecords({id})

            return res.status(200).json(infosAtualizada)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async deleteCalendario(req, res){
        const { id } = req.params
        try {
            await calendarioServices.deleteRecords(id)
            return res.status(200).json({mensage: `Id ${id} apagado ;-; `})
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = CalendarioController