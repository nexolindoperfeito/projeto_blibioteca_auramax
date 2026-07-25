import livrosService from "../services/livrosService.js";
import Livros from "../models/Livro.js";

//Add i portações assim que realizada

const livroController = {
    selecionar: async (req, res) => {
        try {
            const resultado = await autorService.recuperarLivro();

            return res.status(200).json({
                message: "Livro recuperado com sucesso",
                data: resultado
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({
                message: "Erro ao recuperar Livro",
                error: error.message
            });
        }
    },

    selecionarPorId: async (req, res) => {
        try {
            const livroId = Number(req.params.id);

            const livro = await livroService.recuperarLivroPorId(livroId);

            if (!livro) {
                return res.status(404).json({
                    message: "Livro não encontrado"
                });
            }

            return res.status(200).json({
                message: "Livro recuperado com sucesso",
                data: livro
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({
                message: "Erro ao recuperar livro",
                error: error.message
            });
        }
    },

    criar: async (req, res) => {
        try {
            const {titulo, id_ISBN, dataAno, qtd_Disp} = req.body;

            if (!titulo || titulo.trim() === "") {
                return res.status(400).json({
                    message: "O campo titulo é obrigatório"
                });
            }

            const novoLivro = new Livro(titulo, id_ISBN, dataAno, qtd_Disp);

            const resultado = await livroService.criarLivro(
                novoLivro.titulo, 
                novoLivro.id_ISBN, 
                novoLivro.dataAno,
                novoLivro.qtd_Disp,
            );

            return res.status(201).json({
                message: "Livro criado com sucesso",
                data: {
                    id: resultado.insertId
                }
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({
                message: "Erro ao criar livro",
                error: error.message
            });
        }
    },

    atualizar: async (req, res) => {
        try {
            const licroId = Number(req.params.id);
            const {titulo, id_ISBN, dataAno, qtd_Disp} = req.body;

            if (!titulo || titulo.trim() === "" || !id_ISBN || id_ISBN.trim() === "") {
                return res.status(400).json({
                    message: "O campo titulo e ISBN é obrigatório para atualização"
                });
            }

            const livroAtualizado = new Livro (titulo, id_ISBN, dataAno, qtd_Disp);

            const resultado = await livroService.atualizarLivro(
                livroAtualizado.id,
                livroAtualizado.titulo,
                livroAtualizado.id_ISBN,
                livroAtualizado.dataAno,
                livroAtualizado.qtd_Disp,
            );

            if (resultado.affectedRows === 0) {
                return res.status(404).json({
                    message: "Livro não encontrado para atualização"
                });
            }

            return res.status(200).json({
                message: "Livro atualizado com sucesso"
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({
                message: "Erro ao atualizar livro",
                error: error.message
            });
        }
    },

    deletar: async (req, res) => {
        try {
            const livroId = Number(req.params.id);

            const resultado = await livroService.removerLivro(livroId);

            if (resultado.affectedRows === 0) {
                return res.status(404).json({
                    message: "Livro não encontrado"
                });
            }
            return res.status(200).json({
                message: "Livro removido com sucesso"
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({
                message: "Erro ao remover livro",
                error: error.message
            });
        }
    }
};

export default livroController;
