import mongoose, { Schema } from 'mongoose';

interface IUser extends Document {
    userName: string;
    nombre: string;
    apellido: string;
    email: string;
    puntos: number;
}

const userSchema: Schema = new Schema({
    userName: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    nombre: {
        type: String,
        required: true,
        trim: true,
    },
    apellido: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    puntos: {
        type: Number,
        default: 0,
    },
});

export default mongoose.model<IUser>('Users', userSchema);