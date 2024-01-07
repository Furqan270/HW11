'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  await queryInterface.bulkInsert('Todos', [
    {
    title: "Buy groceries",
    status:"active",
    createdAt : new Date(),
    updatedAt : new Date()
    },
    {
      title: "Take out the trash",
      status:"active",
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      title: "Clean the house",
      status:"active",
      createdAt : new Date(),
      updatedAt : new Date()
    }
  ], {})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
