const Services = require('../services/Services')
const materiasServices = new Services('Materias')

class MateriaController{

    static async getAllMaterias(req, res){
        try {
            const getAllMaterias = await materiasServices.getAllRecords()

            return res.status(200).json(getAllMaterias)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async getByIdMateria(req, res){
        const { id } = req.params
        try {
            const byIdMateria = await materiasServices.getByIdRecords({ id })
            return res.status(200).json(byIdMateria);
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async createMateria(req, res){
        const newInfo = req.body
        try {
            const newMateriaCriada = await materiasServices.createRecords(newInfo)

            return res.status(200).json(newMateriaCriada)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async updateMateria(req, res){
        const { id } = req.params
        const novasInfos = req.body
        try {
            await materiasServices.updateRecords(novasInfos, id)
            const infosAtualizada = await materiasServices.getByIdRecords({id})

            return res.status(200).json(infosAtualizada)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async deleteMateria(req, res){
        const { id } = req.params
        try {
            await materiasServices.deleteRecords(id)
            return res.status(200).json({mensage: `Id ${id} apagado ;-; `})
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = MateriaController