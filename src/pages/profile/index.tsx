import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./profile.scss";

import { useSelector } from "react-redux";
import { RootState } from "app/store";

import Repositories from "./repositories";
import Followers from "./followers";

function Search() {
  const profile: any = useSelector((state: RootState) => state.profile);

  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    if (Object.keys(profile).length === 0) {
      setShow(false);
      return;
    }
    setShow(true);
  }, [profile]);

  return (
    <div className="container">
      <ToastContainer />
      {show && (
        <div className="profile-content">
          <div className="header">
            <div className="profile-avatar">
              <img src={profile?.avatar_url} alt="avatar" />
            </div>
            <div className="profile-data">
              <div className="name">
                <h1>{profile?.name}</h1>
                <a href="https://github.com/gitakileus">@{profile?.login}</a>
              </div>
              <div className="bio">
                <p>{profile?.bio}</p>
              </div>
              <div className="detail">
                <ul>
                  <li>{profile?.company}</li>
                  <li>{profile?.location}</li>
                  <li>{profile?.blog}</li>
                  <li>{profile?.twitter_username}</li>
                </ul>
              </div>
              <div className="vote">
                <div>
                  <p className="count">{profile?.following}</p>
                  <p>Following</p>
                </div>
                <div>
                  <p className="count">{profile?.followers}</p>
                  <p>Followers</p>
                </div>
                <div>
                  <p className="count">{profile?.public_repos}</p>
                  <p>Repos</p>
                </div>
              </div>
            </div>
          </div>
          <div className="footer">
            <Repositories />
            <Followers />
          </div>
        </div>
      )}
    </div>
  );
}

export default Search;
