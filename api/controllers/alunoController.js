const Services = require('../services/Services')
const AlunosServices = new Services('Alunos')

class AlunoController{

    static async getAllAlunos(req, res){
        try {
            const allAlunos = await AlunosServices.getAllRecords()

            return res.status(200).json(allAlunos)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async getByIdAluno(req, res){
        const { id } = req.params
        try {
            const byIdAlunos = await AlunosServices.getByIdRecords({ id })
            return res.status(200).json(byIdAlunos);
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async createAluno(req, res){
        const newInfo = req.body
        try {
            const newAlunoCriado = await AlunosServices.createRecords(newInfo)

            return res.status(200).json(newAlunoCriado)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async updateAluno(req, res){
        const { id } = req.params
        const novasInfos = req.body
        try {
            await AlunosServices.updateRecords(novasInfos, id)
            const infosAtualizada = await AlunosServices.getByIdRecords({id})

            return res.status(200).json(infosAtualizada)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async deleteAluno(req, res){
        const { id } = req.params
        try {
            await AlunosServices.deleteRecords(id)
            return res.status(200).json({mensage: `Id ${id} apagado ;-; `})
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = AlunoController