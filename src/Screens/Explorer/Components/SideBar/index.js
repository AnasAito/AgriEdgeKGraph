import React from "react";
import View from "./view";
export default function Index({
  node,
  refQuery,
  typesQuery,
  NodeCreate,
  EdgeCreate,
  tagsQuery,
  TagCreate,
  NodeTagCreate,
  NodeNeighbors,
}) {
  console.log("side node", node);

  return (
    <View
      node={node}
      refQuery={refQuery}
      typesQuery={typesQuery}
      NodeCreate={NodeCreate}
      EdgeCreate={EdgeCreate}
      tagsQuery={tagsQuery}
      TagCreate={TagCreate}
      NodeTagCreate={NodeTagCreate}
      NodeNeighbors={NodeNeighbors}
    />
  );
}
