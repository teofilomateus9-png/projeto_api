// Arquivo: src/routes/index.ts
import { Router } from 'express';
import userRoutes from './user.route.js';

const routes = Router();
routes.use(userRoutes);
export default routes;