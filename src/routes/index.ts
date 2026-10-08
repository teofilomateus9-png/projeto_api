// Arquivo: src/routes/index.ts
import { Router } from 'express';
import userRoutes from './user.route.js';
import authRoutes from './auth.route.js';

const routes = Router();
routes.use(userRoutes);
routes.use(authRoutes);
export default routes;