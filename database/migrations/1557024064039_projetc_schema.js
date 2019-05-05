'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProjetcSchema extends Schema {
  up() {
    this.create('projetcs', (table) => {
      table.increments()
      table
        .integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('SET NULL')
      table.string('title').notNullable()
      table.text('description').notNullable()
      table.timestamps()
    })
  }

  down() {
    this.drop('projetcs')
  }
}

module.exports = ProjetcSchema
