import Prediction from '../../models/Prediction.js';
export const getPredictions = async (req, res) => {
    try {
        const predictions = await Prediction.find({});
        if (!predictions)
            return res.status(400).send({ status: 'error', error: 'Predicciones no encoentradas' });
        res.send({ status: 'success', predictions, message: 'Lista de predicciones' });
    }
    catch (error) {
        res.status(500).send({ status: 'error', error: 'Error al buscar las predicciones', err: error });
    }
};
export const getPrediction = async (req, res) => {
    try {
        const { id } = req.params;
        const prediction = await Prediction.findById(id);
        if (!prediction)
            return res.status(400).send({ status: 'error', error: 'Prediccion no encoentrada' });
        res.send({ status: 'success', prediction, message: `Prediccion con id ${id}` });
    }
    catch (error) {
        res.status(500).send({ status: 'error', error: 'Error al buscar la prediccione', err: error });
    }
};
export const postPrediction = async (req, res) => {
    try {
        const { fecha, nombreLocal, nombreVisitante } = req.body;
        if (!fecha || !nombreLocal || !nombreVisitante)
            return res.status(400).send({ status: 'error', error: 'Debe completar todos los campos' });
        const predictionExist = await Prediction.find({ nombreLocal: nombreLocal, nombreVisitante: nombreVisitante });
        if (predictionExist.length !== 0)
            return res.status(400).send({ status: 'error', error: 'La prediccion ya existe' });
        const newPrediction = new Prediction({ fecha, nombreLocal, nombreVisitante });
        await newPrediction.save();
        res.send({ status: 'success', newPrediction, message: 'Prediccion creada con exito' });
    }
    catch (error) {
        res.status(500).send({ status: 'error', error: 'Error al agregar la prediccion', err: error });
    }
};
export const postAddPrediction = async (req, res) => {
    try {
        const { id } = req.params;
        const { idUser, golesLocal, golesVisitante } = req.body;
        if (!idUser || golesLocal === undefined || golesVisitante === undefined) {
            return res.status(400).send({ status: 'error', error: 'Debe completar todos los campos' });
        }
        if (isNaN(golesLocal) || isNaN(golesVisitante)) {
            return res.status(400).send({ status: 'error', error: 'Los goles deben ser números' });
        }
        const prediction = await Prediction.findById(id);
        if (!prediction) {
            return res.status(400).send({ status: 'error', error: 'Prediccion no encontrada' });
        }
        const predictionExist = prediction.listaPredicciones.find(item => item.idUser.toString() === idUser);
        if (predictionExist)
            return res.status(400).send({ status: 'error', error: 'Ya cargo un resultado' });
        prediction.listaPredicciones.push({ idUser, golesLocal, golesVisitante });
        await prediction.save();
        res.send({ status: 'success', message: 'Prediccion guardada con exito' });
    }
    catch (error) {
        res.status(500).send({ status: 'error', error: 'Error al agregar la prediccion', err: error });
    }
};
export const deletePrediction = async (req, res) => {
    try {
        const { id } = req.params;
        const prediction = await Prediction.findById(id);
        if (!prediction) {
            return res.status(400).send({ status: 'error', error: 'Prediccion no encontrada' });
        }
        await Prediction.findByIdAndDelete(id);
        res.send({ status: 'success', message: 'Prediccion eliminada con exito' });
    }
    catch (error) {
        res.status(500).send({ status: 'error', error: 'Error al eliminar la prediccion', err: error });
    }
};
