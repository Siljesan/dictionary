import axios from "axios";
import { useEffect, useState } from "react";
import WordsParent from "./components/WordsParent";
import { globalStyle } from "./utils/globalStyle";
import { BASE_URL } from "./utils/utils";

function App() {
  const [words, setWords] = useState([]);
  const [query, setQuery] = useState("Discovery");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get(BASE_URL + query);
      setWords(data.data);
    };
    fetchData().catch(console.error);
  }, [query]);

  if (words.length <= 0) {
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
    <>
      <globalStyle />
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type={"text"}
            placeholder={"Search..."}
            value={filter}
            onChange={handleFiltering}
          ></input>
        </form>
        {words.map((word, idx) => {
          return <WordsParent key={idx} object={word} />;
        })}
      </div>
    </>
  );
}

export default App;
