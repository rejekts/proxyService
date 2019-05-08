exports.up = knex =>
  knex.schema.createTable("accounts", table => {
    table.increments("proxyServer_id");
    table.integer("user_id").notNullable();
    table.string("lanIP").notNullable();
    table.string("vpnIP").notNullable();
    table.string("proxyIP").notNullable();
    table.string("oldBrowserIP").notNullable();
    table.string("browserIP").notNullable();
    table.string("port").notNullable();
    table.string("carrier").notNullable();
    table.string("apn").notNullable();
    table.string("status").notNullable();
    table.string("resetURL").notNullable();
    table.string("createdAt").notNullable();
    table.string("proxyServerID").notNullable(); //this will be the primary(uuid)

    table.timestamps(true, true);
  });

exports.down = knex => knex.schema.dropTable("accounts");
