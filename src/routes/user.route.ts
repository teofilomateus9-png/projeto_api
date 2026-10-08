// Arquivo: src/routes/user.route.ts
import { Router } from 'express';
import * as UserController from '../controllers/user.controller.js';
import { validate } from '../middlewares/validate.middleware.js';
import { createUserSchema, updateUserSchema, userIdSchema } from '../schemas/user.schema.js';
import { authMiddleware, requireSelf } from '../middlewares/auth.middleware.js';

const router = Router();
router.post('/users', validate(createUserSchema), UserController.createUser);
router.get('/users', authMiddleware, UserController.getAllUsers);
router.get('/users/:id', authMiddleware, validate(userIdSchema), requireSelf, UserController.getUserById);
router.put('/users/:id', authMiddleware, validate(updateUserSchema), requireSelf, UserController.updateUser);
router.delete('/users/:id', authMiddleware, validate(userIdSchema), requireSelf, UserController.deleteUser);
export default router;