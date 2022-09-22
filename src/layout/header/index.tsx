import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { ReactComponent as GitIcon } from "assets/git.svg";
import { ReactComponent as Search } from "assets/search.svg";

import "./header.scss";

import { useDispatch } from "react-redux";
import { fetchUser } from "feature/profile";
import { fetchRepos } from "feature/repository";
import { fetchUsers } from "feature/follower";

const Header = () => {
  const dispatch = useDispatch();

  const [search, setSearch] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = (e: any) => {
    navigate('/');
    e.preventDefault();
    // @ts-ignore
    dispatch(fetchUser(search));
    // @ts-ignore
    dispatch(fetchRepos(search));
    // @ts-ignore
    dispatch(fetchUsers(search));
  };

  const handleChange = (e: any) => {
    setSearch(e.target.value);
  };

  return (
    <header>
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <div>
              <GitIcon />
              <Link to="/">
                <h6>GitHub User Search</h6>
              </Link>
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
      </div>
    </header>
  );
};

export default Header;
