import { ArgsType, Field, ObjectType } from "type-graphql";

@ObjectType()
export class UserData {
  password: string;

  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  username: string;

  @Field()
  dateofbirth: string;

  @Field()
  role: string;

  @Field()
  createdAt: string;

  @Field()
  updatedAt: string;
}

@ArgsType()
export class UserAddInput {
  @Field()
  name: string;

  @Field()
  username: string;
  
  @Field()
  dateofbirth: string;

  @Field()
  password: string;

  @Field()
  repeatpassword: string;

  @Field({ nullable: true })
  role?: string;
}