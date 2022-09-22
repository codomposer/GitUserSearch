import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { githubApi } from "api/git";

export const fetchRepos = createAsyncThunk(
  "repository/",
  async (user: string) => {
    const response = await githubApi.get(
      `/users/${user}/repos?per_page=8&sort=updated`
    );
    return response.data;
  }
);

const initialState: any = {
  data: [],
};

export const valueSlice = createSlice({
  name: "repository",
  initialState,
  reducers: {
    setValue: (state, action) => {
      state = { data: [...action.payload] };
      return state;
    },
    initValue: (state) => {
      state = initialState;
      return state;
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchRepos.fulfilled, (state, action) => {
      // Add user to the state array
      state = { data: [...action.payload] };
      return state;
    });
    builder.addCase(fetchRepos.rejected, (state) => {
      // Add user to the state array
      state = { data: [] };
      return state;
    });
  },
});

// Action creators are generated for each case reducer function
export const { setValue, initValue } = valueSlice.actions;

export default valueSlice.reducer;
