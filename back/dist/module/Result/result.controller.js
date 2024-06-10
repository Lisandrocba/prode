import Result from '../../models/Result.js';
export const getResults = async (req, res) => {
    try {
        const results = await Result.find({});
        if (!results)
            return res.status(400).send({ status: 'error', error: 'Resultados no encoentrados' });
        res.send({ status: 'success', results, message: 'Lista de resultados' });
    }
    catch (error) {
        res.status(500).send({ status: 'error', error: 'Error al buscar los resultados', err: error });
    }
};
export const getResult = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await Result.findById(id);
        if (!result)
            return res.status(400).send({ status: 'error', error: 'Resultado no encoentrado' });
        res.send({ status: 'success', result, message: 'Resultado encoentrado' });
    }
    catch (error) {
        res.status(500).send({ status: 'error', error: 'Error al buscar el resultado', err: error });
    }
};
export const addResult = async (req, res) => {
    try {
        const { nombreLocal, nombreVisitante, golesLocal, golesVisitante } = req.body;
        if (!nombreLocal || !nombreVisitante) {
            return res.status(400).send({ status: 'error', error: 'Datos incompletos' });
        }
        const newResult = new Result({ nombreLocal, nombreVisitante, golesLocal, golesVisitante });
        await newResult.save();
        res.status(200).send({ status: 'success', newResult, message: 'Resultados agregado con exito' });
    }
    catch (error) {
        res.status(500).send({ status: 'error', error: 'Error al agregar el Resultado', err: error });
    }
};
export const updateResult = async (req, res) => {
    try {
        const { id } = req.params;
        const objResult = req.body;
        const result = await Result.findById(id);
        if (!result)
            return res.status(400).send({ status: 'error', error: 'No se encontro el resultado' });
        const newResult = await Result.findByIdAndUpdate({ _id: id }, objResult, { new: true });
        res.send({ status: 'success', newResult, message: 'Resultado modificado' });
    }
    catch (error) {
        res.status(500).send({ status: 'error', error: 'Error al modificar el Resultado', err: error });
    }
};
export const deleteResult = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await Result.findById(id);
        if (!result)
            return res.status(400).send({ status: 'error', error: 'No se encoentro el resultado' });
        await Result.findByIdAndDelete(id);
        res.send({ status: 'success', message: 'Resultado eliminado' });
    }
    catch (error) {
        res.status(500).send({ status: 'error', error: 'Error al agregar el Resultado', err: error });
    }
};
