import mongoose, { Schema } from 'mongoose';
import { IUser, IProfile, IKey } from '../interfaces/userInterface';

const UserSchema: Schema = new Schema(
    {
        username: { type: String, required: true },
        password: { type: String, required: true }
    },
    {
        timestamps: true
    }
);

const ProfileSchema: Schema = new Schema(
    {
        userid: { type: String, required: true },
        name: { type: String, required: false },
        email: { type: String, required: false },
        pubkey: { type: String, required: false }
    },
    {
        timestamps: true
    }
);

const KeySchema: Schema = new Schema(
    {
        userid: { type: String, required: true },
        s: { type: String, required: true }
    },
    {
        timestamps: true
    }
);

// UserSchema.post<IUser>('save', function(){
// })

export const User = mongoose.model<IUser>('User', UserSchema);
export const Profile = mongoose.model<IProfile>('Profile', ProfileSchema);
export const Key = mongoose.model<IKey>('Key', KeySchema);
