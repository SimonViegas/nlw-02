import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('classes', table => {
    table.increments('id').primary();
    table.string('subject').notNullable();
    table.decimal('cost').notNullable();

    table.integer('user_id')
      .notNullable()
      .references('id')
      .inTable('users')
      .onUpdate('CASCADE') //se atualiza o id, atualiza as dependências
      .onDelete('CASCADE'); //se deleta o id, deleta as dedendências
  })
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('classes');
}
