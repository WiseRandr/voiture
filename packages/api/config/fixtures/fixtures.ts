import VoitureHelper from "helpers/voiture/voiture.helper";
import VoitureMarqueHelper from "helpers/voiture/voituremarque.helper";

export default async function loadFixtures() {
  const voiture = new VoitureHelper();

  if((await voiture.find()).length  === 0) {
    console.log(`Loading voiture fixtures`);
    const voituremarque = new VoitureMarqueHelper();
    const marque = await voituremarque.create({ name: 'Tesla', slug: 'tesla', by: 'Tesla, Inc.' });
    
    await voiture.createMultiple([
      { name: 'Tesla Black', price: 35000.00, color: '#000', marque: marque.id },
      { name: 'Tesla White', price: 30000.00, color: '#fff', marque: marque.id }
    ]);
  }
}