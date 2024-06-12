import { Router } from 'express';
import userRouter from './User/user.route.js';
import resultRouter from './Result/result.route.js';
import predictionRouter from './Prediction/prediction.route.js';
import authMiddleware from '../middleware/authMiddleware.js';
import adminMiddleware from '../middleware/adminMiddleware.js';
const router = Router();
router.get('/', (req, res) => {
    res.send('Hola mundo');
    router.use('/user', userRouter);
    router.use('/result', authMiddleware, adminMiddleware, resultRouter);
    router.use('/prediction', authMiddleware, predictionRouter);
});
export default router;
