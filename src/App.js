import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "./utils/utils";

function App() {
  const [word, setWord] = useState("");
  const [query, setQuery] = useState("Discovery");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get(BASE_URL + query);
      setWord(data.data[0]);
    };
    fetchData().catch(console.error);
  }, [query]);

  if (word === "") {
    return <div>Loading...</div>;
  }

  const handleFiltering = (e) => {
    setFilter(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(filter);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type={"text"}
          placeholder={"Search..."}
          value={filter}
          onChange={handleFiltering}
        ></input>
      </form>
      {word.word}
    </div>
  );
}

export default App;
