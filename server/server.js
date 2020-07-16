const express = require("express");
const bodyParser = require("body-parser");
const compression = require("compression");
const cors = require("cors");
const helmet = require("helmet");
const path = require("path");

// Import route
const productsRouter = require("./routes/products-route");

// Set default port for express app
const PORT = process.env.PORT || 4001;

// Create express app
const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "build")));

app.use(cors());
app.use(helmet());
app.use(compression());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// product route
app.use("/products", productsRouter);

// 500 error route
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send("Sorry, an error has occurred. Please try again.");
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/build/index.html"));
});

// 404 error route
app.use(function (req, res, next) {
  res.status(404).send("Sorry, this page does not exist. Please go back.");
});

// Start express app
app.listen(PORT, function () {
  console.log(`Server is running on: ${PORT}`);
});

module.exports = app;
