import React from "react";
import View from "./view";
import { get } from "lodash";
import { useQuery } from "@apollo/client";
import Queries from "../api/queries/index";
export default function Index() {
  const { loading: loading_node, data: nodes } = useQuery(
    Queries["node.get.many"],
    {
      variables: { limit: 5, order_by: { created_at: "desc" } },
    }
  );

  const feedNodes = get(nodes, "node", []).map((n) => {
    return { id: n.id, label: n.label, description: n.description };
  });
  console.log(feedNodes);
  return (
    <View
      feedNodes={feedNodes}
      refQuery={Queries["node.get.many"]}
      typesQuery={Queries["type.get.many"]}
    />
  );
}
