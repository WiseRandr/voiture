import { gql } from "@apollo/client";

export const CREATE_TOKEN = gql`
  mutation CREATE_TOKEN($username: String!, $password: String!) {
    createToken(username: $username, password: $password)
  }
`;