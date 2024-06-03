import mongoose, { Schema } from 'mongoose';
const predictionSchema = new Schema({
    fecha: {
        type: Date,
        required: true
    },
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
    listaPredicciones: [
        {
            idUser: {
                type: mongoose.Types.ObjectId,
                required: true
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
        }
    ]
});
export default mongoose.model('Predictions', predictionSchema);
