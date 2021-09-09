
const express = require('express');

const RecipeRouter = require('./recipes/recipes-router.js');

const server = express();

server.use(express.json());
server.use('/api/recipes', RecipeRouter);

//***********************500 error middleware***********//
//eslint-disable-next-line
server.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message,
        devMessage: 'Something bad inside the server!'
    });
});

module.exports = server;