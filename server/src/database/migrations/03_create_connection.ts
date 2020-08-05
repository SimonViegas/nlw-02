import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('connections', table => {
    table.increments('id').primary();

    table.integer('user_id')
      .notNullable()
      .references('id')
      .inTable('users')
      .onUpdate('CASCADE') //se atualiza o id, atualiza as dependências
      .onDelete('CASCADE'); //se deleta o id, deleta as dedendências

    table.timestamp('create_at')
      .defaultTo('now()')
      .notNullable();
  })
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('connections');
}
