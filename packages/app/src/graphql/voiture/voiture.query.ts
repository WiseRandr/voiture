import { gql } from "@apollo/client";

export const VOITURES = gql`
  query VOITURES {
    voitures {
      items {
        id
        name
        color
        price
        images
        createdAt
        updatedAt
      }
      total
    }
  }
`;

export const VOITURE = gql`
  query VOITURE($id: String!) {
    voiture(id: $id) {
      id
      name
      color
      price
      images
      createdAt
      updatedAt
    }
  }
`;