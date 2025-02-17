import React from "react";
import { Link } from "react-router-dom";
import { useSearch } from "../context/SearchContext";

const Navbar = () => {
  const { searchQuery, setSearchQuery } = useSearch();
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/posts">Posts</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <input
            type="text"
            placeholder="Cerca un post..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
