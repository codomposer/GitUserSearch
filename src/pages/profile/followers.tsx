import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";
import { RootState } from "app/store";

import "./profile.scss";

import { useDispatch } from "react-redux";
import { fetchUser } from "slice/profile";
import { fetchRepos } from "slice/repository";
import { fetchUsers } from "slice/follower";
import { AppDispatch } from "app/store";

const Followers = () => {
  const followers: any = useSelector((state: RootState) => state.follower);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  useEffect(() => {
    if (followers.data.length === 0) return;
  }, [followers]);

  const research = (arg: string) => {
    navigate("/");
    dispatch(fetchUser(arg));
    dispatch(fetchRepos(arg));
    dispatch(fetchUsers(arg));
  };

  return (
    <div className="followers">
      <h2>Followers</h2>
      <ul>
        {followers?.data.map((item: any, key: number) => (
          <li key={`follower-${key}`}>
            <div
              className="item"
              onClick={() => {
                research(item.login);
              }}
            >
              <div>
                <img src={item.avatar_url} alt="follower" />
              </div>
              <p>{item.login}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Followers;
