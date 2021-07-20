import { ApolloError } from "apollo-server-express";
import CommentHelper from "helpers/comment/comment.helper";
import UserHelper from "helpers/user/user.helper";
import { CommentAddInput, CommentData, CommentList } from "interface/comment.int";
import Context from "interface/context.int";
import { Arg, Args, Authorized, Ctx, Mutation, Query, Resolver } from "type-graphql";

@Resolver()
export default class CommentResolver {
  _user: UserHelper = new UserHelper();
  _comment: CommentHelper = new CommentHelper();

  @Query(returns => CommentList)
  @Authorized()
  async comments(@Arg("voitureid") voitureid: string, @Ctx() context: Context) {
    try {
      const user = await this._user.findById(context.data.id);

      if(!user) throw new Error(`Must be authorized to create a comment. User not found ${context.data.name}(${context.data.username})`);
      const items = await this._comment.getComments(voitureid, user);

      return { items, total: items.length };
    } catch(e) {
      throw new ApolloError(e.message);
    }
  }
  
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