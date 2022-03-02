import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Meaning from "../components/Meaning";
import Phonetic from "../components/Phonetic";
import { BASE_URL } from "../utils/utils";

function Details() {
  const { location } = useParams();
  const [word, setWord] = useState({});
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get(BASE_URL + location);
      setWord(data.data[0]);
    };
    fetchData().catch((error) => setError(error));
  }, [location]);

  if (error) {
    return (
      <div>
        <h1>Something went wrong</h1>
        <p>{error.message}</p>
      </div>
    );
  }

  if (!word.hasOwnProperty("word")) {
    return <div>{location} Loading...</div>;
  }

  return (
    <>
      <h1>{word.word}</h1>
      {word.phonetics.map((phonetic, idx) => {
        return <Phonetic key={idx} object={phonetic} />;
      })}
      {word.meanings.map((meaning, idx) => {
        return <Meaning key={idx} object={meaning} />;
      })}
    </>
  );
}

export default Details;
