import pool from '../configs/Database.js';

const emprestimosRepository = {
    selecionar: async () => {
        const sql = 'SELECT dt_emprestimo, dt_devolucao, id_livro, id_usuario FROM emprestimo ORDER BY id DESC;';
        const rows = await pool.execute(sql);
        return rows[0];
    },
    selecionarPorId: async (emprestimoId) => {
        const sql = 'SELECT id, dt_emprestimo, dt_devolucao, id_livro, id_usuario FROM emprestimo WHERE id = ?;';
        const rows = await pool.execute(sql, [emprestimoId]);
        return rows[0];
    },
    deletar: async (emprestimoId) => {
        const sql = 'DELETE FROM emprestimo WHERE id = ?;';
        const resultado = await pool.execute(sql, [emprestimoId]);
        return resultado[0];
    },
    criar: async (dt_emprestimo, dt_devolucao, id_livro, id_usuario) => {
        const sql = 'INSERT INTO emprestimo (dt_emprestimo, dt_devolucao, id_livro, id_usuario) VALUES (?, ?, ?, ?);';
        const resultado = await pool.execute(sql, [dt_emprestimo, dt_devolucao, id_livro, id_usuario]);
        return resultado[0];
    },
    atualizar: async (emprestimoId, dt_emprestimo, dt_devolucao, id_livro, id_usuario) => {
        console.log(emprestimoId, dt_emprestimo, dt_devolucao, id_livro, id_usuario);
        
        const sql = 'UPDATE emprestimo SET dt_emprestimo = ?, dt_devolucao = ?, id_livro = ?, id_usuario = ? WHERE id = ?;';
        const resultado = await pool.execute(sql, [dt_emprestimo, dt_devolucao, id_livro, id_usuario, emprestimoId]);
        return resultado[0];
    }
}

export default emprestimosRepository;