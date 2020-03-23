const express = require('express');
const boardTitleRouter = require('./boardTitleRouter');
const listRouter = require('./listRouter');

const boardRouter = express.Router();

boardRouter.use('/boardtitle', boardTitleRouter);
boardRouter.use('/list', listRouter);

boardRouter.get('/', (request, response) => {
  response.send('GET to /. get data for board');
});

module.exports = boardRouter;