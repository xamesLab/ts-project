import { configureStore } from "@reduxjs/toolkit";
import { usersReducer, userReducer } from "./reducers/userReducer";
import { modalReducer } from "./reducers/modalReducer";
import { themeReducer } from "./reducers/themeReducers";

export const store = configureStore({
    reducer: { usersReducer, modalReducer, userReducer, themeReducer },
    devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
