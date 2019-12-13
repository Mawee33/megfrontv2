import React, { useState, useEffect } from "react";
import apiHandler from "../api/APIHandler";

export default function SearchBar(props) {
  const [search, setSearch] = useState("");

  function handleChange(e) {
    setSearch(e.target.value);
  }

  useEffect(() => {
    if (!search.length) return;
    props.searchClbk(search);
  }, [search]);
  // const handleChange = async e => {
  //   const string = e.target.value;
  //   if (string) {
  //     const apiRes = await apiHandler.get(`/search?q=${string}`);
  //     props.searchClbk(apiRes.data);
  //   } else props.searchClbk(undefined);
  // };

  return (
    <div className="search-bar">
      <input
        className="search"
        // className={`input ${!props.status ? "is-active" : ""}`}
        name="search-query"
        type="text"
        placeholder="rechercher"
        onChange={handleChange}
      />
    </div>
  );
}
