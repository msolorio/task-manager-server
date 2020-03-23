const express = require('express');

const boardTitleRouter = express.Router();

// routed from /boardtitle

boardTitleRouter.put('/', (request, response) => {
  response.send('PUT to /boardtitle');
});

module.exports = boardTitleRouter;