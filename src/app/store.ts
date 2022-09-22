import { configureStore } from "@reduxjs/toolkit";
import ProfileReducer from "slice/profile";
import RepositoryReducer from "slice/repository";
import FollowerReducer from "slice/follower";

export const store = configureStore({
  reducer: {
    profile: ProfileReducer,
    repository: RepositoryReducer,
    follower: FollowerReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
