import { useEffect } from "react";

import { useSelector } from "react-redux";
import { RootState } from "app/store";

import { ReactComponent as Star } from "assets/star.svg";
import { ReactComponent as Copy } from "assets/copy.svg";

import "./profile.scss";

const Repositories = () => {
  const repositories: any = useSelector((state: RootState) => state.repository);

  useEffect(() => {
    if (repositories.data.length === 0) return;
  }, [repositories]);

  return (
    <div className="repositories">
      <h2>Repositories</h2>
      <ul>
        {repositories?.data.map((item: any, key: any) => (
          <li key={key}>
            <div className="name">
              <p>
                <a
                  href={item.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.name}
                </a>
              </p>
            </div>
            <div className="type">
              <p>{item.language}</p>
              <div>
                <Star />
                <p>{item.stargazers_count}</p>
              </div>
              <div>
                <Copy />
                <p>{item.forks_count}</p>
              </div>
              <p className="date">{item.updated_at}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Repositories;
