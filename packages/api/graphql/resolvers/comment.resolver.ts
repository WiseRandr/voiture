import { ApolloError } from "apollo-server-express";
import CommentHelper from "helpers/comment/comment.helper";
import UserHelper from "helpers/user/user.helper";
import { CommentAddInput, CommentData } from "interface/comment.int";
import Context from "interface/context.int";
import { Args, Authorized, Ctx, Mutation, Resolver } from "type-graphql";

@Resolver()
export default class CommentResolver {
  _user: UserHelper = new UserHelper();
  _comment: CommentHelper = new CommentHelper();
  
  @Mutation(returns => CommentData)
  @Authorized()
  async commentVoiture(@Args() data: CommentAddInput, @Ctx() context: Context) {
    try {
      const user = await this._user.findById(context.data.id);

      if(!user) throw new Error(`Must be authorized to create a comment. User not found ${context.data.name}(${context.data.username})`);
      return this._comment.commentVoiture(data, user);
    } catch(e) {
      throw new ApolloError(e.message);
    }
  }
}