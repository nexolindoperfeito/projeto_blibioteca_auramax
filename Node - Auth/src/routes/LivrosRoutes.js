import { Router } from 'express';
import LivrosController from '../controllers/LivrosController.js';
import authMiddleware from "../middlewares/authMiddleware.js";

const LivrosRoutes = Router();

LivrosRoutes.post('/', LivrosController.criar);
LivrosRoutes.put('/:id', LivrosController.atualizar);
LivrosRoutes.delete('/:id', LivrosController.deletar);
LivrosRoutes.get('/', LivrosController.selecionar);
LivrosRoutes.get('/:id', LivrosController.selecionarPorId);

export default LivrosRoutes;