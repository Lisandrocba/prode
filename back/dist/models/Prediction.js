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
    listaPredicciones: {
        type: [
            {
                idUser: {
                    type: mongoose.Types.ObjectId,
                },
                golesLocal: {
                    type: Number,
                    trim: true
                },
                golesVisitante: {
                    type: Number,
                    trim: true
                },
            }
        ],
        default: []
    }
});
export default mongoose.model('Predictions', predictionSchema);
