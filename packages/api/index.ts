import registerCollection from "config/collection.register";
import loadFixtures from "config/fixtures/fixtures";
import express, { Application } from "express";
import GraphqlHandler from "graphql/graphql";

const port = process.env.PORT || 8000;
const path: string = "/graphql";

async function Boot() {
  await registerCollection();
  await loadFixtures();
  const app: Application = express();
  const graphql = new GraphqlHandler();
  
  await graphql.build(app);

  app.use(express.static('public'))

  app.get('/', (_, res) => { res.status(200).send(`Welcome to voiture API`) });
  
  app.listen(port, () => {
    console.log(`🚀 API running on port ${port}`);
    console.log(`🚀 GRAPHQL path ${path}`);
  });
}

Boot();