import express from "express";
import EmprestimosController from "../controllers/EmprestimosController.js";

const router = express.Router();

router.get("/", EmprestimosController.selecionar);
router.get("/:id", EmprestimosController.selecionarPorId);
router.post("/", EmprestimosController.criar);
router.put("/:id", EmprestimosController.atualizar);
router.delete("/:id", EmprestimosController.deletar);

export default router;