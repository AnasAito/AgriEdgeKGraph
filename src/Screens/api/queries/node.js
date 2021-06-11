import { gql } from "@apollo/client";

export const NODE_GET_MANY = gql`
  query node(
    $where: node_bool_exp
    $order_by: [node_order_by!]
    $limit: Int
    $offset: Int
  ) {
    node(where: $where, order_by: $order_by, limit: $limit, offset: $offset) {
      id
      label
      description
      type
      score
      node_tags {
        tag {
          label
        }
      }
      link
      created_at
    }
  }
`;

export const NODE_GET_ONE = gql`
  query node_by_pk($id: uuid!) {
    node_by_pk(id: $id) {
      id
      label
      description
      type
      score
      node_tags {
        tag {
          label
        }
      }
      link
      created_at
    }
  }
`;
export default {
  "node.get.many": NODE_GET_MANY,
  "node.get.one": NODE_GET_ONE,
};
