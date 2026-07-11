import pool from '../configs/Database.js';

const emprestimosRepository = {
    selecionar: async () => {
        const sql = 'SELECT dt_emprestimo, dt_devolucao, id_livro, id_usuario FROM emprestimos ORDER BY id_usuario DESC;';
        const rows = await pool.execute(sql);
        return rows[0];
    },
    selecionarPorId: async (Id) => {
        const sql = 'SELECT dt_emprestimo, dt_devolucao, id_livro, id_usuario FROM emprestimos WHERE id_usuario = ?;';
        const rows = await pool.execute(sql, [Id]);
        return rows[0][0];
    },

    deletar: async (Id) => {
        const sql = 'DELETE FROM emprestimos WHERE id_usuario = ?;';
        const rows = await pool.execute(sql, [Id]);
        return resultado[0];
    },
    criar: async ( dt_emprestimo, dt_devolucao, id_livro, id_usuario ) => {
        const sql = 'INSERT INTO emprestimo ( dt_emprestimo, dt_devolucao, id_livro, id_usuario ) VALUES (?, ?, ?, ?)';
        const resultado = await pool.execute(sql, [dt_emprestimo, dt_devolucao, id_livro, id_usuario]);
        return resultado[0];
    },
    atualizar: async ( dt_emprestimo, dt_devolucao, id_livro, id_usuario) => {
        const sql = 'UPDATE emprestimos SET dt_emprestimo = ?, dt_devolucao = ?, id_livro = ?, id_usuario WHERE id_usuario = ?;';
        const resultado = await pool.execute(sql, [dt_emprestimo, dt_devolucao, id_livro, id_usuario]);
        return resultado[0];
    }
}

export default emprestimosRepository;