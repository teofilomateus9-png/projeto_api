// Arquivo: src/routes/user.route.ts
import { Router } from 'express';
import * as UserController from '../controllers/user.controller.js';
import { validate } from '../middlewares/validate.middleware.js';
import { createUserSchema, updateUserSchema, userIdSchema } from '../schemas/user.schema.js';

const router = Router();
router.post('/users', validate(createUserSchema), UserController.createUser);
router.get('/users', UserController.getAllUsers);
router.get('/users/:id', validate(userIdSchema), UserController.getUserById);
router.put('/users/:id', validate(updateUserSchema), UserController.updateUser);
router.delete('/users/:id', validate(userIdSchema), UserController.deleteUser);
export default router;