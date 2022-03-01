import React from "react";
import Definition from "./Definition";

function Meaning({ object }) {
  const definition = object.definitions;
  return (
    <>
      <p>{object.partOfSpeech}</p>
      {definition.map((definition, idx) => {
        return <Definition key={idx} object={definition} />;
      })}
    </>
  );
}

export default Meaning;
