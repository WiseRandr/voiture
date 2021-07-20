import { PropsWithChildren } from "react";
import { Link } from "react-router-dom";
import { VoitureInterface } from "src/interface/voiture.int";

export default function Voiture({ voiture }: PropsWithChildren<{ voiture: VoitureInterface }>) {
  return <Link to={`/voitures/${voiture.id}`}>
    <div>{voiture.name}</div>
    <div>{voiture.price.toLocaleString('fr')}</div>
  </Link>;
}