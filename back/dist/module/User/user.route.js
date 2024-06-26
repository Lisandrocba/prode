import { Router } from 'express';
import { deleteUser, getUser, getUsers, login, signup, updateUser } from './user.controller.js';
import authMiddleware from '../../middleware/authMiddleware.js';
const router = Router();
router.post('/signup', signup);
router.post('/login', login);
router.get('/', authMiddleware, getUsers);
router.get('/:id', authMiddleware, getUser);
router.put('/:id', authMiddleware, updateUser);
router.delete('/:id', authMiddleware, deleteUser);
export default router;
