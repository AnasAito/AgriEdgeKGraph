import React from "react";

import { useQuery } from "@apollo/client";
import Queries from "../api/queries/index";

export default function Index() {
  const { loading, error, data } = useQuery(Queries["node.get.many"]);
  console.log(data, error);
  return <div>home</div>;
}
