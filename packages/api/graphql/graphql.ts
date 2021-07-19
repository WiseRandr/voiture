import "reflect-metadata";
import { ApolloServer } from "apollo-server-express";
import { Application } from "express";
import { buildSchema } from "type-graphql";
import VoitureResolver from "./resolvers/voiture.resolver";
import UserResolver from "./resolvers/user.resolver";


export default class GraphqlHandler {
  private path: string = '/graphql';
  
  async build(app: Application) {
    const server = new ApolloServer({ schema: await this.buildSchema(), introspection: true});
    await server.start();
    server.applyMiddleware({ app, path: this.path, cors: { origin: "*" } });

    return server;
  }
  
  async buildSchema() {
    return await buildSchema({ resolvers: [ VoitureResolver, UserResolver ] })
  }
}
