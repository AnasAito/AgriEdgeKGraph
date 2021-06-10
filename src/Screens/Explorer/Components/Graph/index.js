import React from "react";
import View from "./view.js";

export default function index({ gdata, setNode }) {
  console.log("to graph comp", gdata);
  return <View data={gdata} setNode={setNode} />;
}
