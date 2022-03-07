import axios from "axios";
import { useEffect, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import WordsParent from "../components/WordsParent";
import { SearchSchema } from "../utils/Schema";
import { BASE_URL } from "../utils/utils";
import { useForm } from "react-hook-form";

function Home() {
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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(SearchSchema) });

  if (word === "") {
    return <div>Loading...</div>;
  }

  const handleFiltering = (e) => {
    setFilter(e.target.value);
  };
  const onSubmit = () => {
    setQuery(filter);
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("search")}
            type={"text"}
            placeholder={"Search..."}
            value={filter}
            onChange={handleFiltering}
          ></input>
          {errors.search && <span>{errors.search.message}</span>}
          <button>send</button>
        </form>
        <WordsParent object={word} />
      </div>
    </>
  );
}

export default Home;
