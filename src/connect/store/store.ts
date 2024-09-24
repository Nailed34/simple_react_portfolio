import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import commentsReducer from './reducers/CommentsSlice';
import { postsApi } from "../postsApi/postsApi";

const rootReducer = combineReducers({
    commentsReducer,
    [postsApi.reducerPath]: postsApi.reducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(postsApi.middleware)
    })
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];