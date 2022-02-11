import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Query {
    getAllUsers: [user]!
    getUser(userId: ID!): user
  }
  type Mutation {
    createUser(
      name: String!
      email: String!
      password: String!
      profilePic: String
      department: String
      branch: String
      batch: String
    ): user
  }
  type user {
    _id: ID
    name: String!
    email: String!
    profilePic: String
    department: String
    branch: String
    batch: String
    createdAt: String
    updatedAt: String
  }
`;
