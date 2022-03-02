import React from "react";
import Meaning from "./Meaning";
import { StyledLink } from "./navigation/StyledLink";

function WordsParent({ object }) {
  const meaning = object.meanings;
  console.log(object);
  return (
    <>
      <h2>{object.word}</h2>
      <h3>{object.phonetic}</h3>
      <StyledLink to={`/${object.word}`}>Click me</StyledLink>
    </>
  );
}

export default WordsParent;
