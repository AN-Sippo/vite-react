import React from "react";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    console.log("Hello world Again!!!");
  });
  return <p>Hello world</p>;
};

export default App;
