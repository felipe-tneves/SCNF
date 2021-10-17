const Services = require('../services/Services')
const professoresServices = new Services('Professores')

class NotaController{

    static async getAllProfessores(req, res){ 
        try {
            const allProfessores = await professoresServices.getAllRecords()

            return res.status(200).json(allProfessores);
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async getByIdProfessor(req, res){
        const { id } = req.params
        try {
            const byIdProfessor = await professoresServices.getByIdRecords({id})
            return res.status(200).json(byIdProfessor);
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async createProfessor(req, res){
        const newProfessor = req.body
        try {
            const newProfessorCriada = await professoresServices.createRecords(newProfessor)

            return res.status(200).json(newProfessorCriada)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async updateProfessor(req, res){
        const { id } = req.params
        const novasInfos = req.body
        try {
            await professoresServices.updateRecords(novasInfos, id)
            const notasAtualizada = await professoresServices.getByIdRecords({id})

            return res.status(200).json(notasAtualizada)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async deleteProfessor(req, res){
        const { id } = req.params
        try {
            await professoresServices.deleteRecords(id)
            return res.status(200).json({mensage: `Id ${id} apagado ;-; `})
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

}

module.exports = NotaController