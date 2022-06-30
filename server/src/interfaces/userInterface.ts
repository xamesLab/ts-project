import { Document } from 'mongoose';

export enum UserRoles {
    USER = 'USER',
    ADMIN = 'ADMIN',
    MODER = 'MODER'
}

export interface IUser extends Document {
    username: string;
    password: string;
    active: true;
    roles: UserRoles[];
}

export interface IProfile extends Document {
    userid: string;
    name: string;
    email: string;
    pubkey: string;
}

export interface IKey extends Document {
    userid: string;
    sr: string;
    st: string;
}
