import express from "express";
import EmprestimosController from "../controllers/EmprestimosController.js";

const router = express.Router();

router.get("/emprestimos", EmprestimosController.selecionar);
router.get("/emprestimos/:id", EmprestimosController.selecionarPorId);
router.post("/emprestimos", EmprestimosController.criar);
router.put("/emprestimos/:id", EmprestimosController.atualizar);
router.delete("/emprestimos/:id", EmprestimosController.deletar);

export default router;