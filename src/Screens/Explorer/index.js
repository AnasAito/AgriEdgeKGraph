import React from "react";
import Graph from "./Components/Graph";
const gdata = {
  nodes: [
    {
      id: "id1",
      name: "name1",
      val: 1,
    },
    {
      id: "id2",
      name: "name2",
      val: 1,
    },
    {
      id: "id3",
      name: "name2",
      val: 1,
    },
    {
      id: "id4",
      name: "name2",
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
export default function index() {
  return (
    <div>
      <Graph gdata={gdata} />
    </div>
  );
}