import pool from '../configs/Database.js';

const userRepository = {
    selecionar: async () => {
        const sql = 'SELECT id, email, nome, telefone FROM usuario ORDER BY id DESC;';
        const rows = await pool.execute(sql);
        return rows[0];
    },
    selecionarPorId: async (userId) => {
        const sql = 'SELECT id, email, nome, telefone FROM usuario WHERE id = ?;';
        const rows = await pool.execute(sql, [userId]);
        return rows[0];
    },
    selecionarPorEmail: async (email) => {
        const sql = 'SELECT id, email, nome, telefone FROM usuario WHERE email = ?;';
        const rows = await pool.execute(sql, [email]);
        return rows[0][0];
    },
    deletar: async (userId) => {
        const sql = 'DELETE FROM usuario WHERE id = ?;';
        const resultado = await pool.execute(sql, [userId]);
        return resultado[0];
    },
    criar: async (email, nome, telefone) => {
        console.log(email, nome, telefone);
        
        const sql = 'INSERT INTO usuario (email, nome, telefone) VALUES (?, ?, ?);';
        const resultado = await pool.execute(sql, [email.trim().toLowerCase(), nome.trim(), telefone]);
        return resultado[0];
    },
    atualizar: async (userId, email, nome, telefone) => {
        const sql = 'UPDATE usuario SET email = ?, nome = ?, telefone = ? WHERE id = ?;';
        const resultado = await pool.execute(sql, [email.trim().toLowerCase(), nome.trim(), telefone, userId]);
        return resultado[0];
    }
}

export default userRepository;