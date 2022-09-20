import React from "react";

import { ReactComponent as Delete } from "assets/recyle.svg";

import "./history.scss";

const History = () => {
  return (
    <div className="container">
      <div className="history-content">
        <ul>
          <li>
            <input type="checkbox" />
            <p className="time">5:20 pm</p>
            <p className="search">gitakileus</p>
            <Delete className="delete" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default History;
