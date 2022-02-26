'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('BlogPosts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },

      title: {
        type: Sequelize.STRING,
      },

      content: {
        type: Sequelize.TEXT,
        allowNull: false,
      },

      userId: {
        type: Sequelize.INTEGER,
        foreignKey: true,
        allowNull: false,
        references: {
          model: 'Users', //Nome da table
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },

      published: {
        type: Sequelize.DATE,
        allowNull: false,
      },

      updated: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('BlogPosts');
  }
};
