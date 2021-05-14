import "./App.css";
import React, { useState, useEffect } from "react";
import Articles from "./Components/Articles";
import Title from "./Components/Title";
import Search from "./Components/Search";

function App() {
  const [search, setSearch] = useState("");

  const [articles, setArticles] = useState([]);

  const [query, setQuery] = useState("election");

  const API_KEY = "sample_key";

  const getArticle = async () => {
    const res = await fetch(
      `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&api-key=${API_KEY}`
    );
    const data = await res.json();
    setArticles(data.response.docs);
  };

  useEffect(() => {
    getArticle();
    // eslint-disable-next-line
  }, [query]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const clickSubmit = (e) => {
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="App">
      <Title />
      <Search
        search={search}
        handleSearch={handleSearch}
        clickSubmit={clickSubmit}
      />
      <Articles articles={articles} />
    </div>
  );
}

export default App;
