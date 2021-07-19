import Database from "database/database";

export default async function registerCollection() {
  await Database.registerCollection('voituremarque');
  await Database.registerCollection('voiture');
  await Database.registerCollection('user');
}