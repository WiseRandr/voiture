import VoitureHelper from "helpers/voiture/voiture.helper";
import { VoitureList } from "interface/voiture.int";
import { Resolver, Query } from "type-graphql";

@Resolver()
export default class VoitureResolver {
  _voitures: VoitureHelper = new VoitureHelper();
  
  @Query(returns => VoitureList)
  async voitures() {
    const items = await this._voitures.find();
    return { items, total: items.length };
  }
}
