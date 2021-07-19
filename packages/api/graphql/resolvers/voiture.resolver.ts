import { Resolver, Query } from "type-graphql";

@Resolver()
export default class VoitureResolver {
  @Query(returns => String)
  voitures() {
    return 'liste des voitures';
  }
}
