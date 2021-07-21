import { gql } from "@apollo/client";

export const GET_AUTHORIZED_USER = gql`
  query GET_AUTHORIZED_USER {
    getAuthorizedUser {
      id
      name
      username
      role
      dateofbirth
      createdAt
      updatedAt
    }
  }
`;