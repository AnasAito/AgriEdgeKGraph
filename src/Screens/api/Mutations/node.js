import gql from "graphql-tag";

export const CREATE_NODE_ONE = gql`
  mutation insert_node_one($object: node_insert_input!) {
    insert_node_one(object: $object) {
      id
    }
  }
`;

const schema = {
  "node.create.one": CREATE_NODE_ONE,
};
export default schema;
