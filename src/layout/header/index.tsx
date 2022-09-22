import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";

import { fetchUser } from "slice/profile";
import { fetchRepos } from "slice/repository";
import { fetchUsers } from "slice/follower";
import { AppDispatch } from "app/store";

import { ReactComponent as GitIcon } from "assets/git.svg";
import { ReactComponent as Search } from "assets/search.svg";

import "./header.scss";

const Header = () => {
  const dispatch = useDispatch<AppDispatch>();

  const [search, setSearch] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (search === "") {
      toast.warning("Please input user name to search!");
      return;
    }
    navigate("/");
    dispatch(fetchUser(search));
    dispatch(fetchRepos(search));
    dispatch(fetchUsers(search));

    setSearch("");
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
              value={search}
              placeholder="Search for a user"
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
