import bcrypt from "bcrypt";
import emprestimosRepository from "../repositories/emprestimosRepository";   
import { Connection } from "mysql2";

const emprestimosService = {
    recuperarEmprestimos: async (req, res) => {
        try {
            const [ rows ] = await Connection.query( 
            " SELECT * FROM emprestimos"
        );
        return rows;
        } catch (error) {
            console.error(error);
            throw new Error("Erro ao recuperar emprestimos: " + error.message);
        }
    },
    recuperarEmprestimosPorId: async (Id) => {
        try {
            const [ rows ] = await connection.query(
                "SELECT * FROM emprestimos WHERE ID = ?",
                [id]
            );
            return rows[0];
        }
        catch (error) {
            console.error(error);
            throw new Error("Erro ao recuperar Emprestimo por ID: " + error.message);
        }
    },

    removerEmprestimos: async (Id) => {
        try {
            const [ resultado ] = await connection.query(
                "SELECT * FROM emprestimos WHERE id = ?",
                [id]
            )
            return resultado;
        } catch (error) {
            console.error(error);
            throw new Error("Erro ao remover usuário: " + error.message);
        }
    },
    criarEmprestimos: async (emprestimo) => {
        try {
            const [ resultado ] = await connection.query(
                "INSERT INTO emprestimos (id_user, id_livro, data_emp, data_devo) VALUES (?, ?, ?, ?)",
                [emprestimo.id_user, emprestimo.id_livro, emprestimo.data_emp, emprestimo.data_devo]
            )
            return resultado;
        } catch (error) {
            console.error(error);
            throw new Error("Erro ao criar usuário: " + error.message);
        }
    },
    atualizarEmprestimos: async (id, emprestimo) => {
        try {
            const [resultado] = await connection.query(
                [emprestimo.id_user, emprestimo.id_livro, emprestimo.data_emp, emprestimo.data_devo]
            )
            return resultado;
        } catch (error) {
            console.error(error);
            throw new Error("Erro ao atualizar usuário: " + error.message);
        }
    },
removerEmprestimo: async (id, Emprestimo) => {
        try {
            const [resultado] = await connection.query(
                "DELETE FROM emprestimos WHERE id = ?"
                [id]
            )
            return resultado;
        } catch (error) {
            console.error(error);
            throw new Error("Erro ao remover usuário: " + error.message);
    }
    }
}
export default emprestimosService;