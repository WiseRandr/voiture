import { ObjectType, Field, ArgsType } from "type-graphql";

@ObjectType()
export class CommentData {
  @Field()
  id: string;

  @Field()
  voitureid: string;

  @Field()
  comment: string;

  @Field()
  createdAt: string;

  @Field()
  updatedAt: string;
}

@ArgsType()
export class CommentAddInput {
  @Field()
  voitureid: string;

  @Field()
  comment: string;
}
