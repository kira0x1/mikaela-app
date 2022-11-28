import "./index.scss";
import React, { useState } from "react";
import useUserSearch from "../../hooks/useUserSearch";
import UserBox from "../UserBox";

export default function Search() {
  const [query, setQuery] = useState("");

  const { loading, users } = useUserSearch(query);

  function handleSearch(e) {
    setQuery(e.target.value);
  }

  return (
    <div className="search-page">
      <div className="search-container">
        <input
          type="text"
          className="search-bar"
          onChange={handleSearch}
        ></input>
        <div className="results-text">results: {users.length}</div>
      </div>
      <div className="results-container">
        <div>{loading && "Loading..."}</div>
        {users
          .sort((a, b) => b.favorites.length - a.favorites.length)
          .map((u) => {
            return <UserBox key={`id_${u.id}`} user={u} />;
          })}
      </div>
    </div>
  );
}
