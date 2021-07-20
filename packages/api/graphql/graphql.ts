import "reflect-metadata";
import { ApolloServer } from "apollo-server-express";
import { Application } from "express";
import { buildSchema } from "type-graphql";
import VoitureResolver from "./resolvers/voiture.resolver";
import UserResolver from "./resolvers/user.resolver";
import AuthHelper from "helpers/auth/auth.helper";
import Context from "interface/context.int";


export default class GraphqlHandler {
  private path: string = '/graphql';
  
  async build(app: Application) {
    const server = new ApolloServer({ schema: await this.buildSchema(), introspection: true, context: this.context});
    await server.start();
    server.applyMiddleware({ app, path: this.path, cors: { origin: "*" } });

    return server;
  }
  
  async buildSchema() {
    return await buildSchema({ resolvers: [ VoitureResolver, UserResolver ], authChecker: (arg) => AuthHelper.verifyToken(arg.context?.token) })
  }

  context({ req, connection }: any): Context | null {
    if(connection) return connection.context;
      
      const token = req.headers.authorization || "";

      if(!token) return null;
      
      return { token, data: AuthHelper.parseToken(token) };

  }
}
