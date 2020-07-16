const knex = require("./../db");

// select all
// /products/all
exports.productsAll = async (req, res) => {
  knex
    .select("*")
    .from("products")
    .then((userData) => {
      res.json(userData);
    })
    .catch((err) => {
      res.json({ message: `There was an error retrieving products: ${err}` });
    });
};

// create new
// /products/create
exports.productsCreate = async (req, res) => {
  knex("products")
    .insert({
      product_name: req.body.product_name,
      category: req.body.category,
      size: req.body.size,
      status: req.body.status,
      colour: req.body.colour,
      customers_initials: req.body.customers_initials,
      product_image: req.body.product_image,
    })
    .then(() => {
      res.json({
        message: `Product \'${req.body.product_name}\' by ${req.body.product_name} created.`,
      });
    })
    .catch((err) => {
      res.json({
        message: `There was an error creating product ${req.body.product_name}: ${err}`,
      });
    });
};

// delete specific one
// /products/delete
exports.productsDelete = async (req, res) => {
  knex("products")
    .where("id", req.body.id)
    .del()
    .then(() => {
      res.json({ message: `Product ${req.body.id} deleted.` });
    })
    .catch((err) => {
      res.json({
        message: `There was an error deleting ${req.body.id} product: ${err}`,
      });
    });
};

// delete all
// /products/reset
exports.productsReset = async (req, res) => {
  knex
    .select("*")
    .from("products")
    .truncate()
    .then(() => {
      res.json({ message: "Product list cleared" });
    })
    .catch((err) => {
      res.json({
        message: `There was an error resetting product list: ${err}.`,
      });
    });
};
