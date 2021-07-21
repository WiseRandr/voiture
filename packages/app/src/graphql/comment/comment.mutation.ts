import { gql } from "@apollo/client";

export const COMMENT_VOITURE = gql`
  mutation COMMENT_VOITURE($voitureid: String!, $comment: String!) {
    commentVoiture(voitureid: $voitureid, comment: $comment) {
      id
      comment
    }
  }
`;