const Services = require('../services/Services')
const cursosServices = new Services('Cursos')

class CursoController{

    static async getAllCursos(req, res){
        try {
            const allCursos = await cursosServices.getAllRecords()

            return res.status(200).json(allCursos)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async getByIdCurso(req, res){
        const { id } = req.params
        try {
            const byIdCurso = await cursosServices.getByIdRecords({ id })
            return res.status(200).json(byIdCurso);
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async createCurso(req, res){
        const newInfo = req.body
        try {
            const newCursoCriada = await cursosServices.createRecords(newInfo)

            return res.status(200).json(newCursoCriada)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async updateCurso(req, res){
        const { id } = req.params
        const novasInfos = req.body
        try {
            await cursosServices.updateRecords(novasInfos, id)
            const infosAtualizada = await cursosServices.getByIdRecords({id})

            return res.status(200).json(infosAtualizada)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async deleteCurso(req, res){
        const { id } = req.params
        try {
            await cursosServices.deleteRecords(id)
            return res.status(200).json({mensage: `Id ${id} apagado ;-; `})
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = CursoController