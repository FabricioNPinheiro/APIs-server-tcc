const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
// eslint-disable-next-line no-unused-vars
const connectToDatabase = require("./database/connect");

const app = express();

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ limit: "5mb" }));
app.use(express.json());
dotenv.config();
connectToDatabase();

// Carregando Rotas
const Routes = require("./modules/routes");

app.use("/api", Routes);

module.exports = app;
