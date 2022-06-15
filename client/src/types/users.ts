export interface IUserState {
    user: any;
    loading: boolean;
    error: null | string;
    token: string;
}

export interface IUsersDataState {
    users: any[];
    loading: boolean;
    error: null | string;
}

// export enum UserActionTypes {
//     FETCH_USERS = "FETCH_USERS",
//     FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
//     FETCH_USERS_ERROR = "FETCH_USERS_ERROR",
// }

// export enum LoginActionTypes {
//     LOGIN_USER = "LOGIN_USER",
//     LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS",
//     LOGIN_USER_ERROR = "LOGIN_USER_ERROR",
// }

// interface FetchUsersAction {
//     type: UserActionTypes.FETCH_USERS;
// }

// interface FetchUsersSuccessAction {
//     type: UserActionTypes.FETCH_USERS_SUCCESS;
//     payload: any[];
// }

// interface FetchUsersErrorAction {
//     type: UserActionTypes.FETCH_USERS_ERROR;
//     payload: string;
// }

// interface LoginUserAction {
//     type: LoginActionTypes.LOGIN_USER;
// }

// interface LoginUserSuccessAction {
//     type: LoginActionTypes.LOGIN_USER_SUCCESS;
//     payload: { message: string; token: string; user: any };
// }

// interface LoginUserErrorAction {
//     type: LoginActionTypes.LOGIN_USER_ERROR;
//     payload: any;
// }

// export type UserAction = FetchUsersAction | FetchUsersSuccessAction | FetchUsersErrorAction;
// export type LoginAction = LoginUserAction | LoginUserSuccessAction | LoginUserErrorAction;
