'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Notas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      np1: {
        type: Sequelize.FLOAT
      },
      np2: {
        type: Sequelize.FLOAT
      },
      trabalhos: {
        type: Sequelize.FLOAT
      },
      exame: {
        type: Sequelize.FLOAT
      },
      sub: {
        type: Sequelize.FLOAT
      },
      projIntegrador: {
        type: Sequelize.FLOAT
      },
      media: {
        type: Sequelize.FLOAT
      },
      observacoes: {
        type: Sequelize.STRING
      },
      id_alunos: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Alunos',
          key: 'id'
        }
      },
      id_materias: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Materias',
          key: 'id'
        }
      },
      id_professores: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Professores',
          key: 'id'
        }
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
    await queryInterface.dropTable('Notas');
  }
};