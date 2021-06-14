import React, { useState } from "react";
import View from "./view";
export default function Index({ refQuery, typesQuery }) {
  const [create, setCreate] = useState(false);
  return (
    <View
      create={create}
      setCreate={setCreate}
      refQuery={refQuery}
      typesQuery={typesQuery}
    />
  );
}
