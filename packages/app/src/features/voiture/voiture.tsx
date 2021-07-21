import { PropsWithChildren } from "react";
import { Link } from "react-router-dom";
import Carousel from "src/component/carousel/carousel";
import { VoitureInterface } from "src/interface/voiture.int";
import { VoitureCardContainer, VoitureCardName, VoitureCardPrice } from "./voiture.style";

export default function Voiture({ voiture }: PropsWithChildren<{ voiture: VoitureInterface }>) {
  return <VoitureCardContainer>
    <Carousel>
      {voiture.images.map(src => (
        <div key={src}>
          <img src={`http://localhost:4000` + src} />
        </div>
      ))}
    </Carousel>
    <Link to={`/voitures/${voiture.id}`}>
      <VoitureCardName>{voiture.name}</VoitureCardName>
    </Link>
    <VoitureCardPrice>{voiture.price.toLocaleString('fr')}</VoitureCardPrice>
  </VoitureCardContainer>
}