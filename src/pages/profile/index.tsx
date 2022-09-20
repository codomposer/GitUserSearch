import React from "react";

import { ReactComponent as Star } from "assets/star.svg";
import { ReactComponent as Copy } from "assets/copy.svg";

import "./profile.scss";

function Search() {
  return (
    <div className="container">
      <div className="profile-content">
        <div className="header">
          <div className="profile-avatar">
            <img
              src="https://avatars.githubusercontent.com/u/101377478?v=4"
              alt="avatar"
            />
          </div>
          <div className="profile-data">
            <div className="name">
              <h1>Profile name</h1>
              <a href="https://github.com/gitakileus">Profile Id</a>
            </div>
            <div className="bio">
              <p>Profile Bio</p>
            </div>
            <div className="detail">
              <ul>
                <li>Company</li>
                <li>Location</li>
                <li>Website</li>
                <li>Twitter</li>
              </ul>
            </div>
            <div className="vote">
              <div>
                <p className="count">132</p>
                <p>Followers</p>
              </div>
              <div>
                <p className="count">132</p>
                <p>Followers</p>
              </div>
              <div>
                <p className="count">132</p>
                <p>Followers</p>
              </div>
            </div>
          </div>
        </div>
        <div className="footer">
          <div className="repositories">
            <h2>Repositories</h2>
            <ul>
              <li>
                <div className="name">
                  <p>
                    <a href="https://github.com/gitakileus/-E-Commerce-Site">
                      -E-Commerce-Site
                    </a>
                  </p>
                </div>
                <div className="type">
                  <p>JavaScript</p>
                  <div>
                    <Star />
                    <p>0</p>
                  </div>
                  <div>
                    <Copy />
                    <p>0</p>
                  </div>
                  <p className="date">last push 2 days ago</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="followers">
            <h2>Followers</h2>
            <ul>
              <li>
                <a href="#/esin">
                  <div>
                    <img src="https://avatars.githubusercontent.com/u/69767?v=4&s=180" alt="follower"/>
                  </div>
                  <p>esin</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
