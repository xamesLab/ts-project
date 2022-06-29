export interface IUserItem {
    _id: string;
    username: string;
    active?: boolean;
}

export interface IProfileItemProp {
    name?: string;
    email?: string;
    pubkey?: string;
}

export interface IProfileItem {
    _id: string;
    userid: string;
    name: string;
    createdAt: string;
    email?: string;
    pubkey?: string;
}

export interface IUserState {
    user: IUserItem;
    loading: boolean;
    error: null | string;
    token: string;
    isAuth: boolean;
}

export interface IUsersDataState {
    users: IUserItem[];
    loading: boolean;
    error: null | string;
}

export interface IUserProfiles {
    profile: IProfileItem;
    loading: boolean;
    error: null | string;
}
