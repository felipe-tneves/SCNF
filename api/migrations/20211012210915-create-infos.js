'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Infos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        type: Sequelize.STRING
      },
      cpf: {
        type: Sequelize.STRING
      },
      rg: {
        type: Sequelize.STRING
      },
      endereco: {
        type: Sequelize.STRING
      },
      cep: {
        type: Sequelize.STRING
      },
      sexo: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      emailInst: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },
      telefone: {
        type: Sequelize.STRING
      },
      dataNascimento: {
        type: Sequelize.DATEONLY
      },
      tituloEleitor: {
        type: Sequelize.STRING
      },
      reservista: {
        type: Sequelize.STRING
      },
      deletedAt: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Infos');
  }
};