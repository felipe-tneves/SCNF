'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Matriculas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      statusMatricula: {
        type: Sequelize.BOOLEAN
      },
      dataInicioCurso: {
        type: Sequelize.DATEONLY
      },
      dataTerminoCurso: {
        type: Sequelize.DATEONLY
      },
      observacoes: {
        type: Sequelize.STRING
      },
      id_campus: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Campuses',
          key: 'id'
        }
      },
      id_cursos: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Cursos',
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
    await queryInterface.dropTable('Matriculas');
  }
};