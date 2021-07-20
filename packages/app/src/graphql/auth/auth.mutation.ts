import { gql } from "@apollo/client";

export const CREATE_TOKEN = gql`
  mutation CREATE_TOKEN($username: String!, $password: String!) {
    createToken(username: $username, password: $password)
  }
`;

export const CREATE_USER = gql`
  mutation CREATE_USER($name: String!, $username: String!, $password: String!, $repeatpassword: String!, $dateofbirth: String!) {
    createUser(name: $name, username: $username, password: $password, repeatpassword: $repeatpassword, dateofbirth: $dateofbirth) {
      id
      name
      username
      createdAt
    }
  }
`;