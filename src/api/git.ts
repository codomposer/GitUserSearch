// @flow

import axios from "axios";

export const githubApi = axios.create({
  baseURL: "https://api.github.com/",
});

export const token = process.env.USER_SEARCH_OAUTH;
if (token) {
  githubApi.defaults.headers.common.Authorization = `token ${token}`;
}
