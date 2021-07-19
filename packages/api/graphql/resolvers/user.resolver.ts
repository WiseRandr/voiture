import { ApolloError } from "apollo-server-express";
import UserHelper from "helpers/user/user.helper";
import { UserAddInput, UserData } from "interface/user.int";
import { Args, Mutation, Resolver } from "type-graphql";

@Resolver()
export default class UserResolver {
  _user: UserHelper = new UserHelper();
  
  @Mutation(returns => UserData, { nullable: true })
  async createUser(@Args() data: UserAddInput) {
    try {
      return this._user.createUser(data);
    } catch(e) {
      throw new ApolloError(e.message);
    }
  }
}