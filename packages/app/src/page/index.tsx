import { useQuery } from "@apollo/client";
import { VOITURES } from "src/graphql/voiture/voiture.query";

export default function Home() {
  const { data } = useQuery(VOITURES);

  console.log(data)
  
  return <div>Home</div>;
}