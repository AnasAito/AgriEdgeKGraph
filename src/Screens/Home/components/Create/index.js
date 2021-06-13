import React, { useState } from "react";
import View from "./view";
import { useQuery } from "@apollo/client";
import { get } from "lodash";
export default function Index({ setCreate, refQuery }) {
  const [search, setSearch] = useState("");
  const { loading: loading_node, data: nodes } = useQuery(refQuery, {
    variables: { where: { label: { _ilike: `%${search}%` } } },
    skip: search == "",
  });
  //console.log("refs", nodes);
  let nodesSearch = get(nodes, "node", []).map((node) => {
    return { label: node.label, id: node.id, type: node.type };
  });
  return (
    <View
      setCreate={setCreate}
      setSearch={setSearch}
      nodesSearch={nodesSearch}
    />
  );
}
//
