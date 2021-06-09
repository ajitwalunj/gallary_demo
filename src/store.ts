import { configureStore } from '@reduxjs/toolkit'
import gallaryReducer from './Views/Gallary/reducers/gallaryReducer';
import commonReducer from './common/reducers/commonReducer';

export const store = configureStore({
  reducer: {
    common: commonReducer,
    gallary: gallaryReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch