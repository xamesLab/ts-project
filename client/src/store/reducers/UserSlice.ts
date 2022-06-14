import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IUserState {
    user: any;
    loading: boolean;
    error: null | string;
    token?: string;
}

const initialUserState: IUserState = {
    user: {},
    loading: false,
    error: null,
    token: "",
};

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
    },
});
