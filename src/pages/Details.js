import React, { useState } from "react";
import { useParams } from "react-router-dom";

function Details(props) {
  const { location } = useParams();
  const [word, setWord] = useState({});

  if (!word.hasOwnProperty("word")) {
    return <div>{location} Loading...</div>;
  }

  return (
    <>
      <h1>Word here</h1>
    </>
  );
}

export default Details;
