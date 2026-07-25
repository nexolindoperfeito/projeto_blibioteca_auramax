import pool from '../configs/Database.js';

const LivrosRepository = {
    selecionar: async () => {
        const sql = 'SELECT id, titulo, ISBN, ano, qtd_disponivel, id_autor FROM livro ORDER BY id DESC;';
        const rows = await pool.execute(sql);
        return rows[0];
    },
    selecionarPorId: async (livroId) => {
        const sql = 'SELECT id, titulo, ISBN, ano, qtd_disponivel, id_autor FROM livro WHERE id = ?;';
        const rows = await pool.execute(sql, [livroId]);
        return rows[0];
    },
    selecionarPorTitulo: async (titulo) => {
        const sql = 'SELECT id, titulo, ISBN, ano, qtd_disponivel FROM livro WHERE titulo = ?;';
        const rows = await pool.execute(sql, [titulo]);
        return rows[0][0];
    },
    deletar: async (livroId) => {
        const sql = 'DELETE FROM livro WHERE id = ?;';
        const resultado = await pool.execute(sql, [livroId]);
        return resultado[0];
    },
    criar: async (titulo, ISBN, ano, qtd_disponivel, id_autor) => {
        console.log(titulo, ISBN, ano, qtd_disponivel, id_autor);
        
        const sql = 'INSERT INTO livro (titulo, ISBN, ano, qtd_disponivel, id_autor) VALUES (?, ?, ?, ?, ?);';
        const resultado = await pool.execute(sql, [titulo.trim(), ISBN.trim().toLowerCase(), ano, qtd_disponivel, id_autor ]);
        return resultado[0];
    },
    atualizar: async (livroId, titulo, ISBN, ano, qtd_disponivel, id_autor) => {
        const sql = 'UPDATE livro SET titulo = ?, ISBN = ?, ano = ?, qtd_disponivel = ?, id_autor = ? WHERE id = ?;';
        const resultado = await pool.execute(sql, [titulo.trim(), ISBN.trim().toLowerCase(), ano, qtd_disponivel, id_autor, livroId]);
        return resultado[0];
    }
}

export default LivrosRepository;