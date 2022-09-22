import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import { ReactComponent as Delete } from "assets/recyle.svg";
import { removeLocalStorage, getItemLocalStorage } from "utils/storage";

import "./history.scss";

import { useDispatch } from "react-redux";
import { fetchUser } from "feature/profile";
import { fetchRepos } from "feature/repository";
import { fetchUsers } from "feature/follower";
import { AppDispatch } from "app/store";

const History = () => {
  const [history, setHistory] = useState<Array<any>>([]);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  useEffect(() => {
    let history = getItemLocalStorage("history");
    setHistory(history);
  }, []);

  const remove = (arg: number) => {
    history.splice(arg, 1);
    console.log(history);
    setHistory([...history]);
    removeLocalStorage(arg, "history");
  };


  const research = (arg: string) => {
    navigate("/");
    dispatch(fetchUser(arg));
    dispatch(fetchRepos(arg));
    dispatch(fetchUsers(arg));
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
