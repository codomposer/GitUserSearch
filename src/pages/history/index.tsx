import React, { useEffect, useState } from "react";

import { ReactComponent as Delete } from "assets/recyle.svg";
import { removeLocalStorage, getItemLocalStorage } from "utils/storage";

import "./history.scss";

const History = () => {
  const [history, setHistory] = useState<Array<any>>([]);

  useEffect(() => {
    let history = getItemLocalStorage("history");
    setHistory(history);
  }, []);

  const remove = (arg: number) => {
    history.splice(arg, 1);
    console.log(history);
    setHistory(history);
    removeLocalStorage(arg, "history");
  };

  const research = (arg: string) => {
    alert(arg);
  };

  return (
    <div className="container">
      <div className="history-content">
        <ul>
          {history.map((_history, index) => (
            <li key={"li" + index}>
              <p className="time">{_history.date}</p>
              <p
                className="search"
                onClick={() => {
                  research(_history.search);
                }}
              >
                {_history.search}
              </p>
              <Delete
                className="delete"
                onClick={() => {
                  remove(index);
                }}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default History;
