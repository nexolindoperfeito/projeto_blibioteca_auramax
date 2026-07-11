import bcrypt from "bcrypt";
import LivrosRepository from "../repositories/LivrosRepository.js";  

const LivrosService = {
    recuperarLivro: async () => {
        try {
            const resultado = await LivrosRepository.selecionar();
            return resultado;
        }
        catch (error) {
            console.error(error);
            throw new Error("Erro ao recuperar Livros: " + error.message);
        }
    },
    recuperarLivroPorId: async (livroId) => {
        try {
            const resultado = await LivrosRepository.selecionarPorId(livroId);
            return resultado;
        }
        catch (error) {
            console.error(error);
            throw new Error("Erro ao recuperar livro por ID: " + error.message);
        }
    },
    recuperarLivroPorTitulo: async (titulo) => {
        try {
            const resultado = await LivrosRepository.selecionarPorTitulo(titulo);
            return resultado;
        }
        catch (error) {
            console.error(error);
            throw new Error("Erro ao recuperar usuário por email: " + error.message);
        }
    },
    removerLivro: async (livroId) => {
        try {
            const resultado = await LivrosRepository.deletar(livroId);
            return resultado;
        } catch (error) {
            console.error(error);
            throw new Error("Erro ao remover usuário: " + error.message);
        }
    },
    criarLivro: async (livro) => {
        try {
            console.log(livro.titulo, livro.ISBN, livro.ano, livro.qtd_disponivel, livro.id_autor);

            const resultado = await LivrosRepository.criar(livro.titulo, livro.ISBN, livro.ano, livro.qtd_disponivel, livro.id_autor);
            return resultado;
        } catch (error) {
            console.error(error);
            throw new Error("Erro ao criar livro: " + error.message);
        }
    },
    atualizarLivro: async (id, livro) => {
        try {
            const resultado = await LivrosRepository.atualizar(id, livro.titulo, livro.ISBN, livro.ano, livro.qtd_disponivel, livro.id_autor);
            return resultado;
        } catch (error) {
            console.error(error);
            throw new Error("Erro ao atualizar livro: " + error.message);
        }
    }  
}

export default LivrosService;