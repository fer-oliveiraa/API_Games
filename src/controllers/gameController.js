const Game = require('../models/Game');

// Criar Game
exports.createGame = async (req, res, next) => {
    try {
        const game = await Game.create(req.body);
        res.status(201).json({ success: true, data: game });
    } catch (error) {
        next(error); // Passa o erro para o middleware
    }
};

// Listar todos
exports.getAllGames = async (req, res, next) => {
    try {
        const games = await Game.find();
        res.status(200).json({ success: true, count: games.length, data: games });
    } catch (error) {
        next(error);
    }
};

// Buscar por ID
exports.getGameById = async (req, res, next) => {
    try {
        const game = await Game.findById(req.params.id);
        if (!game) {
            return res.status(404).json({ success: false, error: 'Game não encontrado' });
        }
        res.status(200).json({ success: true, data: game });
    } catch (error) {
        next(error);
    }
};

// Atualizar
exports.updateGame = async (req, res, next) => {
    try {
        const game = await Game.findByIdAndUpdate(req.params.id, req.body, {
            new: true, // Retorna o objeto atualizado
            runValidators: true // Roda as validações do Schema novamente
        });
        if (!game) {
            return res.status(404).json({ success: false, error: 'Game não encontrado' });
        }
        res.status(200).json({ success: true, data: game });
    } catch (error) {
        next(error);
    }
};

// Deletar
exports.deleteGame = async (req, res, next) => {
    try {
        const game = await Game.findByIdAndDelete(req.params.id);
        if (!game) {
            return res.status(404).json({ success: false, error: 'Game não encontrado' });
        }
        res.status(200).json({ success: true, message: 'Game removido com sucesso' });
    } catch (error) {
        next(error);
    }
};