import React from "react";
import { Texti } from "./demo";

export default function Fern() {
  return (
    <Texti.Consumer>
      {(data) => (
        <>
          <h1>{data.name}</h1>
          <h2>{true}</h2>
        </>
      )}
    </Texti.Consumer>
  );
}
