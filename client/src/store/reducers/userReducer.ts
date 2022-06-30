import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUserProfiles, IUsersDataState, IUserState } from "../../types/users";
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

const initialProfileState: IUserProfiles = {
    profile: { name: "", createdAt: "", _id: "", userid: "" },
    loading: false,
    error: null,
};

export const profileSlice = createSlice({
    name: "profile",
    initialState: initialProfileState,
    reducers: {
        getProfile(state) {
            state.loading = true;
        },
        getProfileSuccess(state, action: PayloadAction<any>) {
            state.loading = false;
            state.error = "";
            state.profile = action.payload;
        },
        getProfileError(state, action: PayloadAction<string>) {
            state.loading = false;
            state.error = action.payload;
            state.profile = initialProfileState.profile;
        },
        updateProfile(state) {
            state.loading = true;
        },
        updateProfileSuccess(state, action: PayloadAction<any>) {
            state.loading = false;
            state.error = "";
            state.profile = action.payload;
        },
        updateProfileError(state, action: PayloadAction<string>) {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const profileReducer = profileSlice.reducer;

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
            state.user = action.payload;
            state.isAuth = true;
        },
        userRegistrationError(state, action: PayloadAction<string>) {
            state.loading = false;
            state.error = action.payload;
            state.isAuth = false;
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
