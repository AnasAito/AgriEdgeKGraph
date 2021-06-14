import React from "react";
import Header from "./Components/Header";
import Graph from "./Components/Graph";
import SideBar from "./Components/SideBar";
export default function View({
  gdata,
  setNode,
  node,
  search,
  setSearch,
  selected,
}) {
  return (
    <div class="bg-white h-screen">
      <div class=" fixed top-0 w-full z-30  ">
        <Header setSearch={setSearch} />
      </div>
      <div class="  flex flex-row    z-10">
        {/* content */}
        <div class="w-3/4">
          {" "}
          <Graph gdata={gdata} setNode={setNode} selected={selected} />
        </div>
        <div class=" z-20 mt-12 px-4 py-6 w-1/4 bg-white flex   ">
          {" "}
          <SideBar node={node} />
        </div>
      </div>
    </div>
  );
}
