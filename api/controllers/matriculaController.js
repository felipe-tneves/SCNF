const Services = require('../services/Services')
const matriculasServices = new Services('Matriculas')

class MatriculaController{

    static async getAllMatriculas(req, res){
        try {
            const getAllMatriculas = await matriculasServices.getAllRecords()

            return res.status(200).json(getAllMatriculas)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async getByIdMatricula(req, res){
        const { id } = req.params
        try {
            const byIdMatricula = await matriculasServices.getByIdRecords({ id })
            return res.status(200).json(byIdMatricula);
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async createMatricula(req, res){
        const newInfo = req.body
        try {
            const newMatriculaCriada = await matriculasServices.createRecords(newInfo)

            return res.status(200).json(newMatriculaCriada)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async updateMatricula(req, res){
        const { id } = req.params
        const novasInfos = req.body
        try {
            await matriculasServices.updateRecords(novasInfos, id)
            const infosAtualizada = await matriculasServices.getByIdRecords({id})

            return res.status(200).json(infosAtualizada)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async deleteMatricula(req, res){
        const { id } = req.params
        try {
            await matriculasServices.deleteRecords(id)
            return res.status(200).json({mensage: `Id ${id} apagado ;-; `})
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = MatriculaController