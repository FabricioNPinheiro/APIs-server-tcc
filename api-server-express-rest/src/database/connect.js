const mongoose = require("mongoose");

const connectToDatabase = async () => {
  await mongoose.connect(`mongodb://localhost:27017/ecommerce`, (error) => {
    if (error) {
      return console.log(
        "Ocorreu um erro ao se conectar com o banco de dados: ",
        error
      );
    }
    return console.log("Conexão ao banco de dados realizada com sucesso!");
  });
};

module.exports = connectToDatabase;
