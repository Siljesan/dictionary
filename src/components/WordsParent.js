import React from "react";
import Meaning from "./Meaning";

function WordsParent({ object }) {
  const meaning = object.meanings;
  console.log(object);
  return (
    <>
      <h2>{object.word}</h2>
      <p>{object.phonetic}</p>
      {meaning.map((meaning, idx) => {
        return <Meaning key={idx} object={meaning} />;
      })}
    </>
  );
}

export default WordsParent;
