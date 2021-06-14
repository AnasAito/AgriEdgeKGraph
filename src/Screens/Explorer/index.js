import React, { useState, useMemo, useEffect } from "react";

import { get } from "lodash";
import { useQuery } from "@apollo/client";
import Queries from "../api/queries/index";

import View from "./view";
export default function Index() {
  const getNodesFromTags = (data) => {
    const list_2d = get(data, "tag", []).map((tag) => tag.tag_nodes);
    console.log("from tags");
    return [].concat(...list_2d).map((tag) => tag.node.id);
  };
  // search query
  const [search, setSearch] = useState("");
  const { loading: loading_node_search, data: nodesSearch } = useQuery(
    Queries["node.get.many"],
    {
      variables: { where: { label: { _ilike: `%${search}%` } } },
      skip: search == "",
    }
  );
  const { loading: loading_tags_search, data: tagsSearch } = useQuery(
    Queries["tag.get.many"],
    {
      variables: { where: { label: { _ilike: `%${search}%` } } },
      skip: search == "",
    }
  );
  // set selected node data

  const [node, setNode] = useState(null);

  // get graph data
  const { loading: loading_node, data: nodes } = useQuery(
    Queries["node.get.many"]
  );
  const { loading: loading_edge, data: edges } = useQuery(
    Queries["edge.get.many"]
  );
  const selectedNodes = get(nodesSearch, "node", []).map((n) => n.id);
  const selectedFromTags = useMemo(
    () => getNodesFromTags(tagsSearch),
    [tagsSearch]
  );
  const selected = selectedNodes.concat(selectedFromTags);
  // prepare graph data schema for ui graph
  const prepare_gdata = (loading_node, loading_edge, nodes, edges) => {
    // prepare data on loading condition
    if (loading_node == true || loading_edge == true) {
      return { nodes: [], links: [] };
    } else {
      let node_list = get(nodes, "node", []).map((n) => {
        return {
          id: n.id,
          name: n.label,
          score: n.score / 10,
          description: n.description,
          type: n.type,
          createdAt: n.created_at,
          tags: n.node_tags.map((node_tag) => node_tag.tag.label),
          link: n.link,
          isSelect: selected.includes(n.id),
        };
      });
      let edge_list = get(edges, "edge", []).map((e) => {
        return { source: e.node_from.id, target: e.node_to.id };
      });
      //setNode(node_list[0]);
      return { nodes: node_list, links: edge_list };
    }
  };
  //const gdata = prepare_gdata(loading_node, loading_edge, nodes, edges);
  const gdata = useMemo(
    () => prepare_gdata(loading_node, loading_edge, nodes, edges),
    [nodes, edges, selected]
  );
  console.log(gdata["nodes"]);
  return (
    <View
      gdata={gdata}
      node={node}
      setNode={setNode}
      // search={search}
      selected={selected}
      setSearch={setSearch}
    />
  );
}
