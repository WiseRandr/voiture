import { gql } from "@apollo/client";

export const COMMENTS = gql`
  query COMMENTS($voitureid: String!) {
    comments(voitureid: $voitureid) {
      items {
        id
        comment
        userid
        createdAt
        updatedAt
      }
      total
    }
  }
`;