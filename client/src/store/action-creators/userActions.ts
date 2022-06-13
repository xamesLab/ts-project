import { Dispatch } from "redux";
import userService from "../../service/userService";
import { LoginAction, LoginActionTypes, UserAction, UserActionTypes } from "../../types/users";

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
