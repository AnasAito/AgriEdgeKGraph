import React from "react";
import Graph from "./Components/Graph";
import { get } from "lodash";
import { useQuery } from "@apollo/client";
import Queries from "../api/queries/index";
const gdata = {
  nodes: [
    {
      id: "id1",
      name: "name1",
      val: 0.1,
    },
    {
      id: "id2",
      name: "name2",
      val: 0,
    },
    {
      id: "id3",
      name: "name3",
      val: 0.5,
    },
    {
      id: "id4",
      name: "name4",
      val: 1,
    },
  ],
  links: [
    {
      source: "id1",
      target: "id2",
    },
    {
      source: "id2",
      target: "id3",
    },
    {
      source: "id4",
      target: "id1",
    },
  ],
};
export default function Index() {
  const { loading: loading_node, data: nodes } = useQuery(
    Queries["node.get.many"]
  );
  const { loading: loading_edge, data: edges } = useQuery(
    Queries["edge.get.many"]
  );

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
  console.log("server", gdata);
  return (
    <div>
      <Graph gdata={gdata} />
    </div>
  );
}
