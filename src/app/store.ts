import { configureStore } from "@reduxjs/toolkit";
import ProfileReducer from "feature/profile";
import RepositoryReducer from "feature/repository";
import FollowerReducer from "feature/follower";

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
