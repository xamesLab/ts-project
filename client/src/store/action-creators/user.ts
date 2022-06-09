import { Dispatch } from "redux";
import { UserAction, UserActionTypes } from "../../types/users";

export const fetchUsers = () => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({ type: UserActionTypes.FETCH_USERS });
        } catch (error) {
            dispatch({ type: UserActionTypes.FETCH_USERS_ERROR, payload: "error" });
        }
    };
};
