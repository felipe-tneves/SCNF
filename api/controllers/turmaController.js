const Services = require('../services/Services')
const turmasServices = new Services('Turmas')

class TurmaController{

    static async getAllTurmas(req, res){
        try {
            const allTurmas = await turmasServices.getAllRecords()

            return res.status(200).json(allTurmas)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async getByIdTurma(req, res){
        const { id } = req.params
        try {
            const byIdTurma = await turmasServices.getByIdRecords({ id })
            return res.status(200).json(byIdTurma);
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async createTurma(req, res){
        const newTurma = req.body
        try {
            const newTurmaCriada = await turmasServices.createRecords(newTurma)

            return res.status(200).json(newTurmaCriada)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async updateTurma(req, res){
        const { id } = req.params
        const novasInfos = req.body
        try {
            await turmasServices.updateRecords(novasInfos, id)
            const turmaAtualizada = await turmasServices.getByIdRecords({id})

            return res.status(200).json(turmaAtualizada)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async deleteTurma(req, res){
        const { id } = req.params
        try {
            await turmasServices.deleteRecords(id)
            return res.status(200).json({mensage: `Id ${id} apagado ;-; `})
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = TurmaController