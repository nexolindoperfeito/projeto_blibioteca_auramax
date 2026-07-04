import EmprestimosService from "../services/EmprestimosService.js";
import Emprestimos from "../models/Emprestimos.js";

const emprestimosController = {
    selecionar: async (req, res) => {
        try {
            const resultado = await EmprestimosService.recuperarEmprestimos();

            res.status(200).json({
                message: "Emprestimos recuperados com sucesso",
                data: resultado
            });
        }
        catch (error) {
            console.error(error);
            res.status(500).json({
                message: "Erro ao recuperar Emprestimos",
                error: error.message
            });
        }
    },
    selecionarPorId: async (req, res) => {
        const emprestimo_Id = Number(req.params.id);

        try {
            const Emprestimo = await EmprestimosService.recuperarEmprestimoPorId(emprestimo_Id);

            if (!Emprestimo) {
                return res.status(404).json({
                    message: "Emprestimo não encontrado"
                });
            }

            res.status(200).json({
                message: "Emprestimo recuperado com sucesso",
                data: Emprestimo
            });
        }
        catch (error) {
            console.error(error);
            res.status(500).json({
                message: "Erro ao recuperar Emprestimo",
                error: error.message
            });
        }
    },
    deletar: async (req, res) => {
        const emprestimo_Id = Number(req.params.id);

        try {
            const resultado = await EmprestimosService.removerEmprestimo(emprestimo_Id);

            if(resultado.affectedRows === 0) {
                throw new Error("Usuário não encontrado");
            }

            res.status(200).json({
                message: "Usuário removido com sucesso"
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({
                message: "Erro ao remover usuário",
                error: error.message
            });
        }
    },
    criar: async (req, res) => {
        const { id_user, id_livro, data_emp, data_devo } = req.body;

        try {
            // validação simples para garantir que name e email não estejam vazios
            if (id_user.trim() === "" || id_livro.trim() === "" || data_emp.trim() === "" || data_devo.trim() === "") {
                return res.status(400).json({
                    message: "campos obrigatórios não informados"
                });
            }

            const novoEmprestimo = new Emprestimos(id_user, id_livro, data_emp, data_devo)

            const resultado = await EmprestimosService.criarEmprestimo(novoEmprestimo);

            res.status(201).json({
                message: "emprestimo criado com sucesso",
                data: {
                    id: resultado.insertId
                }
            });

        } catch (error) {
            console.error(error);
            res.status(500).json({
                message: "Erro ao criar emprestimo",
                error: error.message
            });
        }
    },
    atualizar: async (req, res) => {
        const emprestimo_Id = Number(req.params.id);
        
        const { id_user, id_livro, data_emp, data_devo } = req.body;

        try {
            // validação simples para garantir que name e email não estejam vazios
            if (id_user.trim() === "" || id_livro.trim() === "" || data_emp.trim() === "" || data_devo.trim() === "") {
                return res.status(400).json({
                    message: "campos não obrigatórios informados "
                });
            }

            const emprestimoAtualizado = new Emprestimos(id_user, id_livro, data_emp, data_devo);

            const resultado = await EmprestimosService.atualizarEmprestimo(emprestimo_Id, emprestimoAtualizado);

            if (resultado.affectedRows === 0) {
                throw new Error("emprestimo não encontrado");
            }

            res.status(200).json({
                message: "emprestimo atualizado com sucesso"
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({
                message: "Erro ao atualizar emprestimo",
                error: error.message
            });
        }
    }
};

export default emprestimosController;