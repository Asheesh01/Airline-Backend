'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint('Airpots',{
      type:'FOREIGN KEY',
      fields:['cityId'],
      name:'city_fkey_constraint_name',
      references:{
        table:'Cities',
        field:'id'
      }, 
      onUpdate:'CASCADE',
      onDelete:'CASCADE'
    });
  },  

  async down (queryInterface, Sequelize) {
        await queryInterface.removeConstraint('Airpots','city_fkey_constraint_name');
  }
};
