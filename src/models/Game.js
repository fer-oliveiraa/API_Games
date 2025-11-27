const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
    titulo: { type: String, required: [true, 'O título é obrigatório'] },
    genero: { type: String, required: [true, 'O gênero é obrigatório'] },
    plataforma: { type: String, required: [true, 'A plataforma é obrigatória'] },
    lancamento: { type: Number, required: [true, 'O ano de lançamento é obrigatório'] }
}, { timestamps: true }); // timestamps cria createdAt e updatedAt automaticamente

module.exports = mongoose.model('Game', gameSchema);