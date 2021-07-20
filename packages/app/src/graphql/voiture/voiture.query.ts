import { gql } from "@apollo/client";

export const VOITURES = gql`
  query VOITURES {
    voitures {
      items {
        id
        name
        color
        price
        createdAt
        updatedAt
      }
      total
    }
  }
`;