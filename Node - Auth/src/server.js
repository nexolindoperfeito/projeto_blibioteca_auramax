import 'dotenv/config';
import express from 'express';
import mysql from 'mysql2/promise';
import userRoutes from './routes/userRoutes.js';
import authRoutes from './routes/authRoutes.js';
import LivrosRoutes from './routes/LivrosRoutes.js';

const port = 3000;

const app = express();
	
app.use(express.json());
app.use('/users', userRoutes);
app.use('/auth', authRoutes);
app.use('/livros', LivrosRoutes);

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
