import React, { useState } from "react";
import View from "./view";
export default function Index() {
  const [create, setCreate] = useState(false);
  return <View create={create} setCreate={setCreate} />;
}
