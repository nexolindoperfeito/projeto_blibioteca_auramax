import LivrosRepository from "../repositories/LivrosRepository.js";
import LivrosService from "../services/LivrosService.js";
import Livros from "../models/Livros.js";

const LivrosController = {
    selecionar: async (req, res) => {
        try {
            const resultado = await LivrosService.recuperarLivro();

            res.status(200).json({
                message: "Livros recuperados com sucesso",
                data: resultado
            });
        }
        catch (error) {
            console.error(error);
            res.status(500).json({
                message: "Erro ao recuperar Livros",
                error: error.message
            });
        }
    },
    selecionarPorId: async (req, res) => {
        const id_livros = Number(req.params.id);

        try {
            const Livros = await LivrosService.recuperarLivrosPorId(id_livros);

            if (!Livros) {
                return res.status(404).json({
                    message: "Livro não encontrado"
                });
            }

            res.status(200).json({
                message: "Livro recuperado com sucesso",
                data: Livros
            });
        }
        catch (error) {
            console.error(error);
            res.status(500).json({
                message: "Erro ao recuperar Livro",
                error: error.message
            });
        }
    },
    deletar: async (req, res) => {
        const id_livros = Number(req.params.id);

        try {
            const resultado = await LivrosService.removerLivro(id_livros);

            if(resultado.affectedRows === 0) {
                throw new Error("Livro não encontrado");
            }

            res.status(200).json({
                message: "Livro removido com sucesso"
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({
                message: "Erro ao remover Livro",
                error: error.message
            });
        }
    },
    criar: async (req, res) => {
        const { titulo, ISBN, ano, qtd_disponivel, id_autor } = req.body;

        const livro = new Livros(titulo, ISBN, ano, qtd_disponivel, id_autor);

        try {
            // validação simples para garantir que name e email não estejam vazios
            if (titulo.trim() === "" || ISBN.trim() === "" || qtd_disponivel < 0 ) {
                return res.status(400).json({
                    message: "Id do Livro, Titulo, ISBN, Ano, qtd_disp, id_autor são obrigatórios"
                });
            }

            const resultado = await LivrosService.criarLivro(livro);
            res.status(201).json({
                message: "Livro criado com sucesso",
                data: {
                    id: resultado.insertId
                }
            });

        } catch (error) {
            console.error(error);
            res.status(500).json({
                message: "Erro ao criar usuário",
                error: error.message
            });
        }
    },
    atualizar: async (req, res) => {
        const livroId = Number(req.params.id);
        const { titulo, ISBN, ano, qtd_disponivel, id_autor } = req.body;

        const livro = new Livros(titulo, ISBN, ano, qtd_disponivel, id_autor, livroId);

        try {
            // validação simples para garantir que name e email não estejam vazios
            if (titulo.trim() === "" || ISBN.trim() === "" || qtd_disponivel < 0) {
                return res.status(400).json({
                    message: "Titulo, ISBN, ano, quantidade disponível, id do autor são obrigatórios"
                });
            }

        const resultado = await LivrosService.atualizarLivro(livroId, livro);

            if (resultado.affectedRows === 0) {
                throw new Error("Livro não encontrado");
            }

            res.status(200).json({
                message: "Livro atualizado com sucesso"
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({
                message: "Erro ao atualizar Livro",
                error: error.message
            });
        }
    }
};

export default LivrosController;