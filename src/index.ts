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
  const PORT = process.env.PORT || 4000;
  const MONGO_URI = process.env.MONGO_URI;

  try {
    await ConnectDB(MONGO_URI);
    await server.start();
    server.applyMiddleware({ app });
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
  } catch (err) {
    console.error(err);
  }
};
startServer();
