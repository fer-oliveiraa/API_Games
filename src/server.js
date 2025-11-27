require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const gameRoutes = require('./routes/gameRoutes');
const errorHandler = require('./middlewares/errorHandler');
const logger = require('./middlewares/logger');

const app = express();

// Conectar ao Banco
connectDB();

// Middlewares Globais
app.use(cors());
app.use(express.json());
app.use(logger); // Middleware de log

// Rotas
app.use('/games', gameRoutes);

// Rota de Health Check 
app.use('/', (req, res) => {
    res.send('API de Games funcionando!');
});

// Middleware de Erro 
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));