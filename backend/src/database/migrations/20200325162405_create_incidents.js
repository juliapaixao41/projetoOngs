exports.up = function(knex) {
    return knex.schema.createTable('incidents', function (table) {
        table.increments();
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();

        //referenciando uma tabela 
        table.string('ong_id').notNullable();

        //criando chave primaria 
        table.foreign('ong_id').references('id').inTable('ongs');
    });
  
};

exports.down = function(knex) {
  return knex.schema.dropTable('incidents');
};