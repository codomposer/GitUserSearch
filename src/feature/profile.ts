import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { githubApi } from "api/git";

export interface profileStore {
  name: string;
  login: string;
  bio: string;
  company: string;
  location: string;
  blog: string;
  followers: number;
  following: number;
  public_repos: number;
}

export const fetchUser = createAsyncThunk("users/", async (user: string) => {
  const response = await githubApi.get(`/users/${user}`);
  return response.data;
});

const initialState: profileStore = {
  name: "",
  login: "",
  bio: "",
  company: "",
  location: "",
  blog: "",
  followers: 0,
  following: 0,
  public_repos: 0,
};

export const valueSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setValue: (state, action) => {
      state = { ...action.payload };
      return state;
    },
    initValue: (state) => {
      state = initialState;
      return state;
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      // Add user to the state array
      state = { ...action.payload };
      // Object.entries(state).forEach(([key, value]) => {
      //   console.log(key, value);
      //   value = action.payload.temp;
      // });
      return state;
    });
  },
});

// Action creators are generated for each case reducer function
export const { setValue, initValue } = valueSlice.actions;

export default valueSlice.reducer;
