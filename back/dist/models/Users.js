import mongoose, { Schema } from 'mongoose';
var UserRole;
(function (UserRole) {
    UserRole["ADMIN"] = "ADMIN";
    UserRole["UNAUTHORIZED"] = "UNAUTHORIZED";
    UserRole["USER"] = "USER";
})(UserRole || (UserRole = {}));
const userSchema = new Schema({
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
    rolUser: {
        type: String,
        enum: Object.values(UserRole),
        default: UserRole.UNAUTHORIZED,
    },
    puntos: {
        type: Number,
        default: 0,
    },
});
export default mongoose.model('Users', userSchema);
