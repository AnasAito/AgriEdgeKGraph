import React, { useState } from "react";
import View from "./view";
import { useQuery } from "@apollo/client";
import { get } from "lodash";
export default function Index({ setCreate, refQuery, typesQuery }) {
  const [search, setSearch] = useState("");
  // get types enum

  const { loading: loading_type, data: typesData } = useQuery(typesQuery);
  let types = get(typesData, "type", []);
  // get nodes to be referred
  const { loading: loading_node, data: nodes } = useQuery(refQuery, {
    variables: { where: { label: { _ilike: `%${search}%` } } },
    skip: search == "",
  });
  let nodesSearch = get(nodes, "node", []).map((node) => {
    return { label: node.label, id: node.id, type: node.type };
  });

  const onSubmit = (object) => {
    console.log(object);
    // todo
    // create node (name , link , description )
    // create tags  if not existing
    // create nodetags
    // create edges
  };
  console.log("types", types);
  return (
    <View
      setCreate={setCreate}
      setSearch={setSearch}
      nodesSearch={nodesSearch}
      types={types}
      onSubmit={onSubmit}
    />
  );
}
//
