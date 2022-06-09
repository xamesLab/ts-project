import { Dispatch } from "redux";
import userService from "../../service/userService";
import { UserAction, UserActionTypes } from "../../types/users";

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
