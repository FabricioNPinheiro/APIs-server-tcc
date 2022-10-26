import mongoose from "mongoose";

const connectToDatabase = async () => {
  await mongoose.connect(
    `mongodb://user:qwe123@localhost:27017/ecommerce?authSource=admin&directConnection=true`,
    (error) => {
      if (error) {
        return console.log(
          "Ocorreu um erro ao se conectar com o banco de dados: ",
          error
        );
      }
      return console.log("Conexão ao banco de dados realizada com sucesso!");
    }
  );
};

module.exports = connectToDatabase;
