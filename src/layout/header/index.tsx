import React, { useState } from "react";

import { ReactComponent as GitIcon } from "assets/git.svg";
import { ReactComponent as Search } from "assets/search.svg";

import "./header.scss";

const Header = () => {
  const [search, setSearch] = useState<string>("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("search", search);
  };

  const handleChange = (e: any) => {
    setSearch(e.target.value);
  };

  return (
    <header>
      <div className="container">
        <div className="logo">
          <div>
        <GitIcon />
        <h6>GitHub User Search</h6>

          </div>
          <p>
            Browse users and their profiles via the{" "}
            <a href="https://developer.github.com/v3/">GitHub API</a>
          </p>
        </div>
        <form className="search" onSubmit={handleSubmit}>
          <input
            type="text"
            className=""
            name="search"
            placeholder="Search for a user, e.g. gitakileus"
            onChange={handleChange}
          />
          <button type="submit">
            <Search />
          </button>
        </form>
      </div>
    </header>
  );
};

export default Header;
