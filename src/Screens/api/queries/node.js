import { gql } from "@apollo/client";

export const NODE_GET_MANY = gql`
  query getMyNodes {
    node {
      id
      label
      description
    }
  }
`;
export default {
  "node.get.many": NODE_GET_MANY,
};
