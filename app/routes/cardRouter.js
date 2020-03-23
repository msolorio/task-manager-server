const express = require('express');

const cardRouter = express.Router({mergeParams: true});

// routes from /list/:listId/card

cardRouter.post('/', (request, response) => {
  response.send(`POST to /list/${request.params.listId}/card. add card to list`);
});

cardRouter.put('/:cardId', (request, response) => {
  response.send(`PUT to /list/${request.params.listId}/card/${request.params.cardId}. update card data`);
});

cardRouter.delete('/:cardId', (request, response) => {
  response.send(`DELETE to /list/${request.params.listId}/card/${request.params.cardId}. remove a card from a list`);
});

module.exports = cardRouter;