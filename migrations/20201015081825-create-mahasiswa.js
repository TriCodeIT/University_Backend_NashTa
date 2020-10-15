'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Mahasiswa', {
      ID: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Nama: {
        type: Sequelize.STRING
      },
      Alamat: {
        type: Sequelize.STRING
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Mahasiswa');
  }
};