import { AppDispatch } from "..";
import userService from "../../service/userService";
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
        console.log(response.data);
    } catch (error) {
        dispatch(userSlice.actions.userRegistrationError("error"));
    }
};

export const login = (loginData: { username: string; password: string }) => async (dispatch: AppDispatch) => {
    try {
        dispatch(userSlice.actions.userLogin());
        const response = await userService.login(loginData);
        dispatch(userSlice.actions.userLoginSuccess(response.data));
        localStorage.setItem("accessToken", response.data.token);
        console.log(response.data.token);
    } catch (error) {
        dispatch(userSlice.actions.userLoginError("error"));
    }
};
