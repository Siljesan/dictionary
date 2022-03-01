import React from "react";

function Definition({ object }) {
  return (
    <>
      <p>Definition: {object.definition}</p>
      <p>Example: {object.example}</p>
    </>
  );
}

export default Definition;
