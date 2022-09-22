// @flow

import axios from "axios";
// import assignAll from "lodash/fp/assignAll";
// import parseLinkHeader from "parse-link-header";

export const PER_PAGE = 42;

export const githubApi = axios.create({
  baseURL: "https://api.github.com/",
});

export const token = process.env.USER_SEARCH_OAUTH;
if (token) {
  githubApi.defaults.headers.common.Authorization = `token ${token}`;
}

export const searchUsers = async (params: Object) => {
  const defaultParams = {
    per_page: PER_PAGE,
    ...params,
  };
  let res = await githubApi.get("/search/users", {
    params: defaultParams,
  });
  return res;
};

export const getProfile = (username: string) => {
  return githubApi.get(`/users/${username}`);
};
