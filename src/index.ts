import { ApolloServer } from "apollo-server-express";
import * as express from "express";
import { typeDefs } from "./graphql/types";
import { resolvers } from "./graphql/resolvers";
import { ConnectDB } from "./database/connection";
import * as dotenv from "dotenv";

dotenv.config();

const startServer = async () => {
  const app = express();
  const server = new ApolloServer({ typeDefs, resolvers });
  await ConnectDB();
  await server.start();
  server.applyMiddleware({ app });
  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
};
startServer();
