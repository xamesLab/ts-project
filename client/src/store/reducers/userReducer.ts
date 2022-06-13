import {
    IUsersDataState,
    IUserState,
    LoginAction,
    LoginActionTypes,
    UserAction,
    UserActionTypes,
} from "../../types/users";

const initialState: IUsersDataState = {
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

export const userReducer = (state = initialState, action: UserAction): IUsersDataState => {
    switch (action.type) {
        case UserActionTypes.FETCH_USERS:
            return { loading: true, error: null, users: [] };
        case UserActionTypes.FETCH_USERS_SUCCESS:
            return { loading: false, error: null, users: action.payload };
        case UserActionTypes.FETCH_USERS_ERROR:
            return { loading: false, error: action.payload, users: [] };
        default:
            return state;
    }
};

export const authReducer = (state = initialUserState, action: LoginAction): IUserState => {
    switch (action.type) {
        case LoginActionTypes.LOGIN_USER:
            return { loading: true, error: null, user: {}, token: "" };
        case LoginActionTypes.LOGIN_USER_SUCCESS:
            return { loading: false, error: null, user: action.payload.user, token: action.payload.token };
        case LoginActionTypes.LOGIN_USER_ERROR:
            return { loading: false, error: action.payload, user: {}, token: "" };
        default:
            return state;
    }
};
