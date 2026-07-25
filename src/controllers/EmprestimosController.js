import emprestimosService from "../services/emprestimoService.js";
import Emprestimos from "../models/Emprestimos.js";

const EmprestimosController = {
    selecionar: async (req, res) => {
        try {
            const resultado = await emprestimosService.recuperarEmprestimo();

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
            const Emprestimo = await emprestimosService.recuperarEmprestimoPorId(emprestimo_Id);

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
            const resultado = await emprestimosService.removerEmprestimo(emprestimo_Id);

            if(resultado.affectedRows === 0) {
                return res.status(404).json({
                    message: "Emprestimo não encontrado"
                });
            }

            res.status(200).json({
                message: "emprestimo removido com sucesso"
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({
                message: "Erro ao remover emprestimo",
                error: error.message
            });
        }
    },
    criar: async (req, res) => {
        const { dt_emprestimo, dt_devolucao, id_livro, id_usuario } = req.body;
        console.log(dt_emprestimo, dt_devolucao, id_livro, id_usuario);
        
        try {
            // validação simples para garantir que name e email não estejam vazios
            if (!dt_emprestimo || !dt_devolucao || !id_livro || !id_usuario) {
                return res.status(400).json({
                    message: "campos obrigatórios não informados"
                });
            }

            const novoEmprestimo = new Emprestimos(dt_emprestimo, dt_devolucao, id_livro, id_usuario)

            const resultado = await emprestimosService.criarEmprestimo(novoEmprestimo);

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
        
        const { dt_emprestimo, dt_devolucao, id_livro, id_usuario } = req.body;

        try {
            // validação simples para garantir que name e email não estejam vazios
            if ( !dt_emprestimo || !dt_devolucao || !id_livro || !id_usuario ) {
                return res.status(400).json({
                    message: "campos obrigatórios não informados"
                });
            }

            const emprestimoAtualizado = new Emprestimos(dt_emprestimo, dt_devolucao, id_livro, id_usuario);

            const resultado = await emprestimosService.atualizarEmprestimo(emprestimo_Id, emprestimoAtualizado);

            if (resultado.affectedRows === 0) {
                return res.status(404).json({
                    message: "emprestimo não encontrado"
                })
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

export default EmprestimosController;