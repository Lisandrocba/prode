import mongoose, { Schema } from 'mongoose';

interface IPrediction extends Document {
    fecha: Date
    nombreLocal: string
    nombreVisitante: string
    listaPredicciones: [{
        idUser: mongoose.Types.ObjectId,
        golesLocal: number,
        golesVisitante: number
    }]
}

const predictionSchema: Schema = new Schema({
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

export default mongoose.model<IPrediction>('Predictions', predictionSchema);