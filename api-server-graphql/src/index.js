import startServer from "../bin/server";
import typeDefs from "./graphql/typeDefs";
import resolvers from "./graphql/resolvers";
import dotenv from "dotenv";

import connectToDatabase from "./database/connect";
dotenv.config();
connectToDatabase();

startServer({ typeDefs, resolvers });
