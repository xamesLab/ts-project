import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUsersDataState, IUserState } from "../../types/users";

const initialUsersState: IUsersDataState = {
    users: [],
    loading: false,
    error: null,
};

const initialUserState: IUserState = {
    user: {},
    loading: false,
    error: null,
    token: "",
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
        userRegistration(state) {
            state.loading = true;
        },
        userRegistrationSuccess(state, action: PayloadAction<any>) {
            state.loading = false;
            state.error = "";
            state.user = action.payload;
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
        },
        userLoginError(state, action: PayloadAction<string>) {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const userReducer = userSlice.reducer;
