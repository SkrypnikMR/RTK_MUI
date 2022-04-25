import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { postsApi, additionalPostsInfoReducer, additionalPostsInfoReducerName } from "../services";

export const store = configureStore({
    reducer: {
        [postsApi.reducerPath] : postsApi.reducer,
        [additionalPostsInfoReducerName]: additionalPostsInfoReducer,
    },

    middleware: (getDefaultMiddleware => getDefaultMiddleware().concat(postsApi.middleware))
});

setupListeners(store.dispatch);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
export type IPostsState = ReturnType<typeof postsApi.reducer>;
