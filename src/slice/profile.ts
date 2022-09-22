import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { githubApi } from "api/git";
import { toast } from "react-toastify";

export const fetchUser = createAsyncThunk("users/", async (user: string) => {
  try {
    const res = await githubApi.get(`/users/${user}`);
    return res.data;
  } catch (err: any) {
    console.log(err);
    toast.error(err.response.data.message);
  }
});

const initialState = {};

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
      return state;
    });
    builder.addCase(fetchUser.rejected, (state) => {
      // Add user to the state array
      state = {};
      return state;
    });
  },
});

// Action creators are generated for each case reducer function
export const { setValue, initValue } = valueSlice.actions;

export default valueSlice.reducer;
