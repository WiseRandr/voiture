import Database from "database/database";

export default class VoitureHelper extends Database {
  constructor() {
    super('voiture');
  }
}