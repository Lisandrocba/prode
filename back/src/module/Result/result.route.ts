import { Router } from 'express';
import { addResult, deleteResult, getResult, getResults, updateResult } from './result.controller.js';

const router = Router();

router.get('/', getResults);
router.get('/:id', getResult);
router.post('/', addResult);
router.put('/:id', updateResult);
router.delete('/:id', deleteResult);

export default router;