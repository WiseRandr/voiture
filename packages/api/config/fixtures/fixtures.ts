import VoitureHelper from "helpers/voiture/voiture.helper";
import VoitureMarqueHelper from "helpers/voiture/voituremarque.helper";

export default async function loadFixtures() {
  const voiture = new VoitureHelper();

  if((await voiture.find()).length  === 0) {
    console.log(`Loading voiture fixtures`);
    const voituremarque = new VoitureMarqueHelper();
    const marque = await voituremarque.create({ name: 'Tesla', slug: 'tesla', by: 'Tesla, Inc.' });
    
    await voiture.createMultiple([
      { name: 'Tesla Black', price: 35000.00, color: '#000', marque: marque.id, images: ['/tesla-black-1.jpg', '/tesla-black-2.jpg', '/tesla-black-3.jpg'] },
      { name: 'Tesla White', price: 30000.00, color: '#fff', marque: marque.id, images: ['/tesla-white-1.jpeg', '/tesla-white-2.jpeg', '/tesla-white-3.png'] }
    ]);
  }
}