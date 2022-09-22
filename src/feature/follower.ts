import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { githubApi } from "api/git";

export const fetchUsers = createAsyncThunk(
  "follower/",
  async (user: string) => {
    const response = await githubApi.get(
      `/users/${user}/followers?per_page=8`
    );
    return response.data;
  }
);

const initialState: any = {
  data: [],
};

export const valueSlice = createSlice({
  name: "follower",
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
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      // Add user to the state array
      state = { data: [...action.payload] };
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
