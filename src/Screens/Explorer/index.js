import React from "react";

import { get } from "lodash";
import { useQuery } from "@apollo/client";
import Queries from "../api/queries/index";
import View from "./view";
export default function Index() {
  // get graph data
  const { loading: loading_node, data: nodes } = useQuery(
    Queries["node.get.many"]
  );
  const { loading: loading_edge, data: edges } = useQuery(
    Queries["edge.get.many"]
  );
  // prepare graph data schema for ui graph
  const prepare_gdata = (loading_node, loading_edge, nodes, edges) => {
    // prepare data on loading condition
    if (loading_node == true || loading_edge == true) {
      return { nodes: [], links: [] };
    } else {
      let node_list = get(nodes, "node", []).map((n) => {
        return { id: n.id, name: n.label, score: n.score / 10 };
      });
      let edge_list = get(edges, "edge", []).map((e) => {
        return { source: e.node_from.id, target: e.node_to.id };
      });

      return { nodes: node_list, links: edge_list };
    }
  };
  let gdata = prepare_gdata(loading_node, loading_edge, nodes, edges);

  return <View gdata={gdata} />;
}
