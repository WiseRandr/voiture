import { ApolloError } from "apollo-server-express";
import UserHelper from "helpers/user/user.helper";
import { UserAddInput, UserData } from "interface/user.int";
import { Arg, Args, Authorized, Ctx, Mutation, Query, Resolver } from "type-graphql";
import Context from "interface/context.int";

@Resolver()
export default class UserResolver {
  _user: UserHelper = new UserHelper();
  
  @Query(returns => UserData)
  @Authorized()
  async getAuthorizedUser(@Ctx() context: Context) {
    return this._user.findById(context.data.id);
  }

  @Mutation(returns => UserData, { nullable: true })
  async createUser(@Args() data: UserAddInput) {
    try {
      return this._user.createUser(data);
    } catch(e) {
      throw new ApolloError(e.message);
    }
  }

  @Mutation(returns => String)
  async createToken(@Arg('username') username: string, @Arg('password') password: string) {
    return this._user.login(username, password);
  }
}