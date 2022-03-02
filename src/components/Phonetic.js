import React from "react";
import { StyledLink } from "./navigation/StyledLink";

function Phonetic({ object }) {
  const audio = new Audio(object.audio);
  const start = () => {
    audio.play();
  };
  return (
    <>
      <h3>Phonetic: {object.text}</h3>
      <StyledLink as={"button"} onClick={start}>
        Listen
      </StyledLink>
    </>
  );
}

export default Phonetic;
