import { Dispatch } from "redux";
import { AppDispatch } from "..";
import userService from "../../service/userService";
import { LoginAction, LoginActionTypes, UserAction, UserActionTypes } from "../../types/users";
import { userSlice } from "../reducers/UserSlice";

export const fetchUsers = () => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({ type: UserActionTypes.FETCH_USERS });
            const response = await userService.getAllUsers();
            dispatch({ type: UserActionTypes.FETCH_USERS_SUCCESS, payload: response.data.users });
        } catch (error) {
            dispatch({ type: UserActionTypes.FETCH_USERS_ERROR, payload: "error" });
        }
    };
};

export const loginUser = (loginData: { username: string; password: string }) => {
    return async (dispatch: Dispatch<LoginAction>) => {
        try {
            dispatch({ type: LoginActionTypes.LOGIN_USER });
            const response = await userService.login(loginData);
            dispatch({ type: LoginActionTypes.LOGIN_USER_SUCCESS, payload: response.data });
            localStorage.setItem("accessToken", response.data.token);
            console.log("ok", response.data);
        } catch (error) {
            console.log("not ok", error);

            dispatch({ type: LoginActionTypes.LOGIN_USER_ERROR, payload: error });
        }
    };
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
