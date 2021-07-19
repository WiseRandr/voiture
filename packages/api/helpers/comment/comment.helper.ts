import Database from "database/database";

export default class CommentHelper extends Database {
  constructor() {
    super('comment');
  }
}