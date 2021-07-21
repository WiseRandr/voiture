import { PropsWithChildren } from "react";
import Carousel from "src/component/carousel/carousel";
import { VoitureInterface } from "src/interface/voiture.int";
import { API_HOST, CURRENCY } from "src/utils/constant";
import Comments from "../comments/comments";
import { VoitureSelfContainer, VoitureSelfCarouselImg, VoitureSelfPrice } from "./voitureself.style";

export default function VoitureSelf({ voiture }: PropsWithChildren<{voiture: VoitureInterface}>) {
  return <VoitureSelfContainer>
    <Carousel>
      {voiture.images.map(src => (<div key={src}><VoitureSelfCarouselImg src={API_HOST + src} /></div>))}
    </Carousel>

    <div className="d-flex justify-content-between align-items-center w-75 mx-auto mt-5">
      <div />
      <div className="h1">{voiture.name}</div>
      <VoitureSelfPrice>{CURRENCY} {voiture.price.toLocaleString("fr")}</VoitureSelfPrice>
    </div>

    <Comments voitureid={voiture.id} />
  </VoitureSelfContainer>;
}