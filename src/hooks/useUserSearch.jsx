import { useEffect, useState } from "react";
import UserData from "../users.json";
import Fuse from "fuse.js";

const searchOptions = {
  // isCaseSensitive: false,
  // includeScore: false,
  shouldSort: true,
  // includeMatches: false,
  // findAllMatches: false,
  // minMatchCharLength: 1,
  location: 0,
  threshold: 0.1,
  distance: 100,
  // useExtendedSearch: false,
  // ignoreLocation: false,
  // ignoreFieldNorm: false,
  // fieldNormWeight: 1,
  keys: ["username"],
};

const searchIndex = Fuse.createIndex(["username"], UserData);
const userSearch = new Fuse(UserData, searchOptions, searchIndex);

export default function useUserSearch(query, pageNumber) {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setLoading(true);

    const res = query ? userSearch.search(query, { limit: 10 }) : [];
    const data = query ? [] : UserData;

    for (const u of res) {
      data.push(u.item);
    }

    setUsers(data);
    setLoading(false);
    console.log(data);
  }, [query, pageNumber]);

  return { loading, users };
}
