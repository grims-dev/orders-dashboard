const path = require("path");

let dbPath;
if (process.env.NODE_ENV === "test") {
  dbPath = new sqlite3.Database(":memory:");
} else {
  dbPath = path.resolve(__dirname, "db/database.sqlite");
}

const knex = require("knex")({
  client: "sqlite3",
  connection: {
    filename: dbPath,
  },
  useNullAsDefault: true,
});

knex.schema
  .hasTable("products")
  .then((exists) => {
    if (!exists) {
      return knex.schema
        .createTable("products", (table) => {
          table.increments("id").primary();
          table.string("product_name");
          table.string("category");
          table.string("size");
          table.string("status");
          table.string("colour");
          table.string("customers_initials");
          table.string("product_image");
          table.timestamp("created_at").defaultTo(knex.fn.now());
        })
        .then(() => {
          console.log("Table 'Products' created");
        })
        .catch((error) => {
          console.error(`There was an error creating table: ${error}`);
        });
    }
  })
  .then(() => {
    // Log success
    console.log("done");
  })
  .catch((error) => {
    console.error(`There was an error setting the database ${error}`);
  });

// Export the database
module.exports = knex;
