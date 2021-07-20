import VoitureHelper from "helpers/voiture/voiture.helper";
import { VoitureData, VoitureList } from "interface/voiture.int";
import { Resolver, Query, Arg } from "type-graphql";

@Resolver()
export default class VoitureResolver {
  _voitures: VoitureHelper = new VoitureHelper();
  
  @Query(returns => VoitureList)
  async voitures() {
    const items = await this._voitures.find();
    return { items, total: items.length };
  }

  @Query(returns => VoitureData)
  async voiture(@Arg('id') id: string) {
    const attempt = this._voitures.findById(id);
    return attempt;
  }
}
