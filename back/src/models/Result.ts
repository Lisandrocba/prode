import mongoose, { Schema } from 'mongoose';

interface IResult extends Document{
    nombreLocal: string
    nombreVisitante: string
    golesLocal: number
    golesVisitante: number
}

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

export default mongoose.model<IResult>('Result', resultSchema);