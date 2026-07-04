import pool from '../configs/Database.js';

const autorRepository = {
    selecionar: async () => {
        const sql = 'SELECT id, nome, nacionalidade, nascimento FROM autor ORDER BY id DESC;';
        const rows = await pool.execute(sql);
        return rows[0];
    },
    selecionarPorId: async (autorId) => {
        const sql = 'SELECT id, nome, nacionalidade, nascimento FROM autors WHERE id = ?;';
        const rows = await pool.execute(sql, [autorId]);
        return rows[0];
    },
    selecionarPorNome: async (nome) => {
        const sql = 'SELECT id, nome, nacionalidade, nascimento FROM autor WHERE nome = ?;';
        const rows = await pool.execute(sql, [email]);
        return rows[0][0];
    },
    deletar: async (autorId) => {
        const sql = 'DELETE FROM autor WHERE id = ?;';
        const resultado = await pool.execute(sql, [autorId]);
        return resultado[0];
    },
    criar: async (nome, nacionalidade, nascimento) => {
        const sql = 'INSERT INTO users (nome, nacionalidade, nascimento) VALUES (?, ?, ?);';
        const resultado = await pool.execute(sql, [nome.trim(), nacionalidade.trim().toLowerCase(), nascimento]);
        return resultado[0];
    },
    atualizar: async (autorId, nome, nacionalidade, nascimento) => {
        const sql = 'UPDATE autors SET nome = ?, nacionalidade = ?, nascimento = ? WHERE id = ?;';
        const resultado = await pool.execute(sql, [nome.trim(), nacionalidade.trim().toLowerCase(), password, userId]);
        return resultado[0];
    }
}

export default autorRepository;