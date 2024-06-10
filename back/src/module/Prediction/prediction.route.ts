import { Router } from 'express';
import { deletePrediction, getPrediction, getPredictions, postAddPrediction, postPrediction } from './prediction.controller.js';

const router = Router();

router.get('/', getPredictions);
router.get('/:id', getPrediction);
router.post('/', postPrediction);
router.post('/:id', postAddPrediction);
router.delete('/:id', deletePrediction);

export default router;