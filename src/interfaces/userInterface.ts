import { Document } from 'mongoose';

export interface IUser extends Document {
    username: string;
    password: string;
}

export interface IProfile extends Document {
    userid: string;
    name: string;
    email: string;
    pubkey: string;
}

export interface IKey extends Document {
    userid: string;
    s: string;
}
