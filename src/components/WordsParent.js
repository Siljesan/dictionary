import React from "react";

function WordsParent({ object }) {
  return (
    <>
      <h2>{object.word}</h2>
      <p>{object.phonetic}</p>
    </>
  );
}

export default WordsParent;
