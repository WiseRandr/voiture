import { useQuery } from "@apollo/client";
import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { VOITURE } from "src/graphql/voiture/voiture.query";
import { VoitureInterface } from "src/interface/voiture.int";

export default function VoiturePageSingle() {
  const params = useParams();
  const { data, loading } = useQuery(VOITURE, { variables: { id: (params as any)?.voitureid } });
  const voiture = useMemo<VoitureInterface | undefined>(() => data?.voiture, [data]);
  
  return <div>
    {typeof voiture !== "undefined" && <div>
      <div>{voiture.name}</div>
    </div>}
  </div>;
}