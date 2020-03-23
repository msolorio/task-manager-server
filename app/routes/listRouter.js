const express = require('express');
const cardRouter = require('./cardRouter');

const listRouter = express.Router();

// routerd from /list

listRouter.use('/:listId/card', cardRouter);

listRouter.post('/', (request, response) => {
  response.send('POST to /list. add list');
});

listRouter.put('/:listId/title', (request, response) => {
  response.send(`PUT to /list/${request.params.listId}/title. update list title`);
});

listRouter.delete('/:listId', (request, response) => {
  response.send(`DELETE to /list/${request.params.listId}. remove a list`);
});

module.exports = listRouter;