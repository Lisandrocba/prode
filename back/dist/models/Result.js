import mongoose, { Schema } from 'mongoose';
const resultSchema = new Schema({
    nombreLocal: {
        type: String,
        required: true,
        trim: true
    },
    nombreVisitante: {
        type: String,
        required: true,
        trim: true
    },
    golesLocal: {
        type: Number,
        required: true,
        trim: true
    },
    golesVisitante: {
        type: Number,
        required: true,
        trim: true
    },
});
export default mongoose.model('Result', resultSchema);
