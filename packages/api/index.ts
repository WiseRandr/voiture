import express, { Application } from "express";
import GraphqlHandler from "graphql/graphql";

const port = process.env.PORT || 8000;
const path: string = "/graphql";

async function Boot() {
  const app: Application = express();
  const graphql = new GraphqlHandler();
  
  await graphql.build(app);

  app.get('/', (_, res) => { res.status(200).send(`Welcome to voiture API`) });
  
  app.listen(port, () => {
    console.log(`🚀 API running on port ${port}`);
    console.log(`🚀 GRAPHQL path ${path}`);
  });
}

Boot();