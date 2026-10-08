// Arquivo: src/routes/user.route.ts
import { Router } from 'express';
import * as UserController from '../controllers/user.controller.js';

const router = Router();
router.post('/users', UserController.createUser);
router.get('/users', UserController.getAllUsers);
router.get('/users/:id', UserController.getUserById);
router.put('/users/:id', UserController.updateUser);
router.delete('/users/:id', UserController.deleteUser);
export default router;