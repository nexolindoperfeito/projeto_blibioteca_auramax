import bcrypt from "bcrypt";
import emprestimosRepository from "../repositories/emprestimosRepository.js";  

const emprestimoService = {
    recuperarEmprestimo: async () => {
        try {
            const resultado = await emprestimosRepository.selecionar();
            return resultado;
        }
        catch (error) {
            console.error(error);
            throw new Error("Erro ao recuperar Livros: " + error.message);
        }
    },
    recuperarEmprestimoPorId: async (emprestimoId) => {
        try {
            const resultado = await emprestimosRepository.selecionarPorId(emprestimoId);
            return resultado;
        }
        catch (error) {
            console.error(error);
            throw new Error("Erro ao recuperar livro por ID: " + error.message);
        }
    },
    removerEmprestimo: async (emprestimoId) => {
        try {
            const resultado = await emprestimosRepository.deletar(emprestimoId);
            return resultado;
        } catch (error) {
            console.error(error);
            throw new Error("Erro ao remover usuário: " + error.message);
        }
    },
    criarEmprestimo: async (emprestimo) => {
        try {
            console.log(emprestimo.dt_emprestimo, emprestimo.dt_devolucao, emprestimo.id_livro, emprestimo.id_usuario);

            const resultado = await emprestimosRepository.criar(emprestimo.dt_emprestimo, emprestimo.dt_devolucao, emprestimo.id_livro, emprestimo.id_usuario);
            return resultado;
        } catch (error) {
            console.error(error);
            throw new Error("Erro ao criar livro: " + error.message);
        }
    },
    atualizarEmprestimo: async (id, emprestimo) => {
        try {
            const resultado = await emprestimosRepository.atualizar(id, emprestimo.dt_emprestimo, emprestimo.dt_devolucao, emprestimo.id_livro, emprestimo.id_usuario);
            return resultado;
        } catch (error) {
            console.error(error);
            throw new Error("Erro ao atualizar livro: " + error.message);
        }
    }  
}

export default emprestimoService;