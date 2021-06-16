import React from "react";
import View from "./view";
export default function Index({ node }) {
  console.log("side node", node);
  return <View node={node} />;
}
