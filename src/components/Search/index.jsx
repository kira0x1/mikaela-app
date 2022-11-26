import "./index.scss";
import React, { useState } from "react";
import useUserSearch from "../../hooks/useUserSearch";
import UserBox from "../UserBox";

export default function Search() {
  const [query, setQuery] = useState("");
  const [pageNumber, setPageNumber] = useState(1);

  const { loading, users } = useUserSearch(query, pageNumber);

  function handleSearch(e) {
    setQuery(e.target.value);
    setPageNumber(1);
  }

  return (
    <div className="search-page">
      <input type="text" onChange={handleSearch}></input>
      <div className="results-container">
        <div>{loading && "Loading..."}</div>
        {users.map((u) => {
          return <UserBox key={`id_${u.id}`} user={u} />;
        })}
      </div>
    </div>
  );
}
