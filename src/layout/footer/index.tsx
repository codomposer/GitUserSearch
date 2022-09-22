import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import moment from "moment";

import "./footer.scss";
import { removeLocalStorage, getItemLocalStorage } from "utils/storage";

import { useSelector } from "react-redux";
import { RootState } from "app/store";

const Footer = () => {
  const [count, setCount] = useState<string>("0");
  const profile: any = useSelector((state: RootState) => state.profile);

  const getCount = () => {
    let count: any = localStorage.getItem("count")
      ? localStorage.getItem("count")
      : "0";
    setCount(count);
  };

  useEffect(() => {
    getCount();
  }, []);

  useEffect(() => {
    if (profile.login === "") return;

    let currentCount = localStorage.getItem("count");
    localStorage.setItem(
      "count",
      currentCount ? `${parseInt(currentCount) + 1}` : "0"
    );

    let history = getItemLocalStorage("history");
    let today = moment().format("MM-DD h:mm:ss");

    history.push({ date: today, search: profile.login });
    history.reverse();
    
    localStorage.setItem("history", JSON.stringify(history));
    getCount();
  }, [profile.login]);

  return (
    <footer>
      <div className="container">
        <Link to="/history">
          <span>History</span>
        </Link>

        <nav>
          <ul>
            <li>API requests</li>
            <li>
              <div className="result">
                Search: <span>{count}</span>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
