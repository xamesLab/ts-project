import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUsersDataState, IUserState } from "../../types/users";
import { getUserDataLocal } from "../../utils";

const initialUsersState: IUsersDataState = {
    users: [],
    loading: false,
    error: null,
};

const initialUserState: IUserState = {
    user: { _id: "", username: "" },
    loading: false,
    error: null,
    token: "",
    isAuth: getUserDataLocal().isAuth,
};

export const usersSlice = createSlice({
    name: "users",
    initialState: initialUsersState,
    reducers: {
        getUsers(state) {
            state.loading = true;
        },
        getUsersSuccess(state, action: PayloadAction<any>) {
            state.loading = false;
            state.error = "";
            state.users = action.payload;
        },
        getUsersError(state, action: PayloadAction<string>) {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const usersReducer = usersSlice.reducer;

export const userSlice = createSlice({
    name: "user",
    initialState: initialUserState,
    reducers: {
        validateToken(state) {
            state.loading = true;
        },
        validateTokenSuccess(state, action: PayloadAction<any>) {
            state.loading = false;
            state.error = "";
            state.user = action.payload;
            state.isAuth = true;
        },
        validateTokenError(state, action: PayloadAction<string>) {
            state.loading = false;
            state.error = action.payload;
            state.user = { _id: "", username: "" };
            state.isAuth = false;
        },
        userRegistration(state) {
            state.loading = true;
        },
        userRegistrationSuccess(state, action: PayloadAction<any>) {
            state.loading = false;
            state.error = "";
            state.user = { _id: "", username: action.payload };
        },
        userRegistrationError(state, action: PayloadAction<string>) {
            state.loading = false;
            state.error = action.payload;
        },
        userLogin(state) {
            state.loading = true;
        },
        userLoginSuccess(state, action: PayloadAction<any>) {
            state.loading = false;
            state.error = "";
            state.user = action.payload;
            state.isAuth = true;
        },
        userLoginError(state, action: PayloadAction<string>) {
            state.loading = false;
            state.error = action.payload;
            state.isAuth = false;
        },
        userLogout(state) {
            state.user = { _id: "", username: "" };
            state.isAuth = false;
        },
    },
});

export const userReducer = userSlice.reducer;
