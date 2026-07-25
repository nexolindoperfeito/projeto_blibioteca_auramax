import autorService from "../services/autorService.js";
import Autor from "../models/Autor.js";

const autorController = {
    selecionar: async (req, res) => {
        try {
            const resultado = await autorService.recuperarAutores();

            return res.status(200).json({
                message: "Autores recuperados com sucesso",
                data: resultado
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({
                message: "Erro ao recuperar autores",
                error: error.message
            });
        }
    },

    selecionarPorId: async (req, res) => {
        try {
            const autorId = Number(req.params.id);

            const autor = await autorService.recuperarAutorPorId(autorId);

            if (!autor) {
                return res.status(404).json({
                    message: "Autor não encontrado"
                });
            }

            return res.status(200).json({
                message: "Autor recuperado com sucesso",
                data: autor
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({
                message: "Erro ao recuperar autor",
                error: error.message
            });
        }
    },

    criar: async (req, res) => {
        try {
            const { nome, nacionalidade, dataNascimento } = req.body;

            if (!nome || nome.trim() === "") {
                return res.status(400).json({
                    message: "O campo nome é obrigatório"
                });
            }

            const novoAutor = new Autor(nome, nacionalidade, dataNascimento);

            const resultado = await autorService.criarAutor(
                novoAutor.nome, 
                novoAutor.nacionalidade, 
                novoAutor.dataNascimento
            );

            return res.status(201).json({
                message: "Autor criado com sucesso",
                data: {
                    id: resultado.insertId
                }
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({
                message: "Erro ao criar autor",
                error: error.message
            });
        }
    },

    atualizar: async (req, res) => {
        try {
            const autorId = Number(req.params.id);
            const { nome, nacionalidade, dataNascimento } = req.body;

            if (!nome || nome.trim() === "") {
                return res.status(400).json({
                    message: "O campo nome é obrigatório para atualização"
                });
            }

            const autorAtualizado = new Autor(nome, nacionalidade, dataNascimento, autorId);

            const resultado = await autorService.atualizarAutor(
                autorAtualizado.id,
                autorAtualizado.nome,
                autorAtualizado.nacionalidade,
                autorAtualizado.dataNascimento
            );

            if (resultado.affectedRows === 0) {
                return res.status(404).json({
                    message: "Autor não encontrado para atualização"
                });
            }

            return res.status(200).json({
                message: "Autor atualizado com sucesso"
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({
                message: "Erro ao atualizar autor",
                error: error.message
            });
        }
    },

    deletar: async (req, res) => {
        try {
            const autorId = Number(req.params.id);

            const resultado = await autorService.removerAutor(autorId);

            if (resultado.affectedRows === 0) {
                return res.status(404).json({
                    message: "Autor não encontrado"
                });
            }

            return res.status(200).json({
                message: "Autor removido com sucesso"
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({
                message: "Erro ao remover autor",
                error: error.message
            });
        }
    }
};

export default autorController;
