import { Field, Int, ObjectType } from "type-graphql";

@ObjectType()
export class VoitureList {
  @Field(type => [VoitureData])
  items: VoitureData[];

  @Field(type => Int)
  total: number;
}

@ObjectType()
export class VoitureData {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  type: string;

  @Field()
  price: number;

  @Field({ nullable: true })
  color: string;

  @Field()
  createdAt: string;

  @Field()
  updatedAt: string;
}