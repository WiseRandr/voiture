import { useQuery } from "@apollo/client"
import { useMemo } from "react";
import { VOITURES } from "src/graphql/voiture/voiture.query"
import { VoitureInterface } from "src/interface/voiture.int";
import Voiture from "../voiture/voiture";

export default function Voitures() {
  const { data } = useQuery(VOITURES);
  const voitures = useMemo<Array<VoitureInterface>>(() => data?.voitures?.items || [], [data]);
  
  return <div>
    <div className="row">
      {voitures.map(voiture => <div className="col-md-3" key={voiture.id}>
        <Voiture voiture={voiture} />
      </div>)}
    </div>
  </div>
}