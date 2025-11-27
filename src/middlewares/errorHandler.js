const errorHandler = (err, req, res, next) => {
    console.error(err.stack); // Log do erro no servidor

    // Erro de Validação do Mongoose (Campos obrigatórios faltando)
    if (err.name === 'ValidationError') {
        const messages = Object.values(err.errors).map(val => val.message);
        return res.status(400).json({ success: false, error: messages });
    }

    // Erro de ID inválido (CastError)
    if (err.name === 'CastError') {
        return res.status(400).json({ success: false, error: 'ID inválido fornecido.' });
    }

    // Erro genérico
    res.status(500).json({
        success: false,
        error: 'Erro interno do servidor'
    });
};

module.exports = errorHandler;