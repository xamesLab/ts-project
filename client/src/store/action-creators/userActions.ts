import { AppDispatch } from "..";
import userService from "../../service/userService";
import { jwtDecod } from "../../utils";
import { userSlice, usersSlice } from "../reducers/userReducer";

export const getUsers = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(usersSlice.actions.getUsers());
        const response = await userService.getAllUsers();
        dispatch(usersSlice.actions.getUsersSuccess(response.data.users));
    } catch (error) {
        dispatch(usersSlice.actions.getUsersError("error"));
    }
};

export const registration = (regData: { username: string; password: string }) => async (dispatch: AppDispatch) => {
    try {
        dispatch(userSlice.actions.userRegistration());
        const response = await userService.registration(regData);
        dispatch(userSlice.actions.userRegistrationSuccess(response.data));
    } catch (error: any) {
        dispatch(userSlice.actions.userRegistrationError(error.response.data.message));
    }
};

export const login = (loginData: { username: string; password: string }) => async (dispatch: AppDispatch) => {
    try {
        dispatch(userSlice.actions.userLogin());
        const response = await userService.login(loginData);
        dispatch(userSlice.actions.userLoginSuccess(response.data));
        localStorage.setItem("user", JSON.stringify(jwtDecod(response.data.token)));
        localStorage.setItem("accessToken", response.data.token);
    } catch (error) {
        dispatch(userSlice.actions.userLoginError("error"));
    }
};

export const logout = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(userSlice.actions.userLogout());
        localStorage.clear();
    } catch (error) {
        console.log(error);
    }
};
