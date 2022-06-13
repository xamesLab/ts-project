import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { userReducer, authReducer } from "./reducers/userReducer";
import { modalReducer } from "./reducers/modalReducer";
//import thunk from "redux-thunk";

//export const store = createStore({}, applyMiddleware(thunk));

const middleware = getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false,
    thunk: true,
});

export const store = configureStore({
    reducer: { userReducer, modalReducer, authReducer },
    middleware,
    devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
