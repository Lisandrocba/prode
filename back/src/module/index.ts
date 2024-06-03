import { Request, Response, Router } from 'express';
import userRouter from './User/user.route.js';
import resultRouter from './Result/result.route.js';
import predictionRouter from './Prediction/prediction.route.js';

const router = Router();

router.get('/', (req: Request, res: Response)=>{
    res.send('Hola mundo');
    router.use('/user', userRouter);
    router.use('/result', resultRouter);
    router.use('/prediction', predictionRouter);
});

export default router;