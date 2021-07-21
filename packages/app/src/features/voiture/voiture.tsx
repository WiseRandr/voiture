import { PropsWithChildren } from "react";
import { Link } from "react-router-dom";
import Carousel from "src/component/carousel/carousel";
import { VoitureInterface } from "src/interface/voiture.int";
import { CURRENCY } from "src/utils/constant";
import { VoitureCardContainer, VoitureCardImg, VoitureCardName, VoitureCardPrice } from "./voiture.style";

export default function Voiture({ voiture }: PropsWithChildren<{ voiture: VoitureInterface }>) {
  return <VoitureCardContainer>
    <Carousel showThumbs={false} showStatus={false}>
      {voiture.images.map(src => (
        <div key={src}>
          <VoitureCardImg src={`http://localhost:4000` + src} />
        </div>
      ))}
    </Carousel>
      <VoitureCardName to={`/voitures/${voiture.id}`} className="h3">{voiture.name}</VoitureCardName>
    <VoitureCardPrice>{CURRENCY} {voiture.price.toLocaleString('fr')}</VoitureCardPrice>
  </VoitureCardContainer>
}