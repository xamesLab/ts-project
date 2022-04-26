import mongoose, { Schema } from 'mongoose'
import IUser from '../interfaces/userInterface'

const UserSchema: Schema = new Schema(
    {
        username: {type: String, required: true},
        password: {type: String, required: true}
    },
    {
        timestamps:true
    }
)

// UserSchema.post<IUser>('save', function(){
// })

export default mongoose.model<IUser>('User', UserSchema)