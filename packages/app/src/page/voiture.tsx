import { useQuery } from "@apollo/client";
import { useMemo } from "react";
import { useParams } from "react-router-dom";
import VoitureSelf from "src/features/voitureself/voitureself";
import { VOITURE } from "src/graphql/voiture/voiture.query";
import { VoitureInterface } from "src/interface/voiture.int";

export default function VoiturePageSingle() {
  const params = useParams();
  const { data } = useQuery(VOITURE, { variables: { id: (params as any)?.voitureid } });
  const voiture = useMemo<VoitureInterface | undefined>(() => data?.voiture, [data]);
  
  return <div className="mt-3">
    {typeof voiture !== "undefined" && <VoitureSelf voiture={voiture} />}
  </div>;
}