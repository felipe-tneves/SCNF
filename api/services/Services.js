const database = require('../models')

class Services {
    constructor(modelName) {
        this.modelName = modelName
    }

    async getAllRecords(where = {}) {
        return database[this.modelName].findAll({where: {...where}})
    }

    async getByIdRecords(where = {}) {
        return database[this.modelName].findOne({where: {...where}})
    }

    async createRecords(dados){
        return database[this.modelName].create(dados)
    }

    async updateRecords(dadosAtualizados, id){
        return database[this.modelName].update(dadosAtualizados, {where: {id: id}})
    }

    async deleteRecords(id){
        return database[this.modelName].destroy({where: {id: id}})
    }
}

module.exports = Services