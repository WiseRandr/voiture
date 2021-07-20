import Database from "database/database";
import VoitureHelper from "helpers/voiture/voiture.helper";
import { CommentAddInput, CommentData } from "interface/comment.int";
import { UserData } from "interface/user.int";

export default class CommentHelper extends Database {
  _voiture: VoitureHelper = new VoitureHelper();
  
  constructor() {
    super('comment');
  }

  async userHasPermission(user: UserData) {
    // We can add more conditions here
    return Boolean(user);
  }

  async commentVoiture(data: CommentAddInput, user: UserData): Promise<CommentData> {
    if(!this.userHasPermission(user)) throw new Error(`Not allowed to create a comment`);

    const voiture = await this._voiture.findById(data.voitureid);
    if(!voiture) throw new Error(`Voiture ${data.voitureid} was not found`);

    const comment = await this.create({ voitureid: voiture.id, comment: data.comment, userid: user.id });
    return comment;
  }

  async getComments(voitureid: string, user: UserData) {
    if(!this.userHasPermission(user)) throw new Error(`Not allowed to create a comment`);

    const voiture = await this._voiture.findById(voitureid);
    if(!voiture) throw new Error(`Voiture ${voitureid} was not found`);

    const comments = await this.find();

    return comments.filter(c => c.voitureid === voiture.id);
  }
}