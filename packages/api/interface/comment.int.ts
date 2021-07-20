import { ObjectType, Field, ArgsType, Int } from "type-graphql";

@ObjectType()
export class CommentList {
  @Field(type => [CommentData])
  items: CommentData[];

  @Field(type => Int)
  total: number;
}

@ObjectType()
export class CommentData {
  @Field()
  id: string;

  @Field()
  voitureid: string;

  @Field()
  userid: string;

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
