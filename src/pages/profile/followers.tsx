import React, { useState, useEffect } from "react";

import { useSelector } from "react-redux";
import { RootState } from "app/store";

import "./profile.scss";

const Followers = () => {
  const followers: any = useSelector((state: RootState) => state.follower);

  useEffect(() => {
    if (followers.data.length === 0) return;
  }, [followers]);

  return (
    <div className="followers">
      <h2>Followers</h2>
      <ul>
        {followers?.data.map((item: any, key: any) => (
          <li key={key}>
            <a href={item.html_url} target="_blank" rel="noopener noreferrer">
              <div>
                <img src={item.avatar_url} alt="follower" />
              </div>
              <p>{item.login}</p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Followers;
