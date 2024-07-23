# Github User Search [![Build Status](https://travis-ci.org/simonsmith/github-user-search.svg?branch=master)](https://travis-ci.org/simonsmith/github-user-search)

Search and view users via the Github API

Requests are cached in session storage to limit the use of the API.

## What is this?

A personal project built with React, Redux and other tools to search users and
view their profiles on Github. Nothing serious.

Feel free to open issues for questions/improvements!

### Libraries and tools

- moment
- Babel
- axios
- React
- React Router
- react-redux
- reduxjs/toolkit
- SUIT CSS
- Webpack
- lodash-fp
- typescript

## Running locally

1. Clone the repository
1. Install dependences `npm i`
1. Run the server `npm run start`
1. Visit `http://localhost:3000/`

### API limit

The Github API has a fairly strict limit (hence the indicator of your remaining
requests in the footer). When running the app locally you can export a [personal
access token](https://github.com/blog/1509-personal-api-tokens) and this will be
sent along in any API calls to increase the limit:

### .env

```
USER_SEARCH_OAUTH=""
```
