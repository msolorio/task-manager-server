'use strict';

// TODO: REQUIRE PACKAGES
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const app = express();
const PORT = process.env.PORT;

// TODO: CONFIGURE PACKAGES
app.use(morgan('common'));

/*
GET - "/" - GIVE US ALL DATA FOR BOARD
PUT - "/boardtitle" - UPDATE BOARD TITLE
POST - "/list" - ADD A LIST
POST - "/list/:list_id/card" - ADD A CARD TO A LIST
PUT - "/list/:list_id/title" - UPDATE LIST TITLE
PUT - "/list/:list_id/card/:card_id" - UPDATE CARD DATA
DELETE - "/list/:list_id" - REMOVE A LIST
DELETE - "/list/:list_id/card/:card_id" - REMOVE A CARD FROM A LIST
*/

// TODO: CONFIGURE ROUTES
// TODO: MOVE ROUTES TO SEPARATE DIRECTORY AND REQUIRE IN

app.get('/', (request, response) => {
  response.send('GET to /. get data for board');
});

// BOARD TITLE ROUTES
app.put('/boardtitle', (request, response) => {
  response.send('PUT to /boardtitle. update board title');
});

// LIST ROUTES

// ADD LIST
app.post('/list', (request, response) => {
  response.send('POST to /list. add list');
});

// UPDATE LIST TITLE 
app.put('/list/:listId/title', (request, response) => {
  response.send('PUT to /list/:listId/title. update list title');
});

// CARD ROUTES

// ADD CARD TO LIST
app.post('/list/:listId/card', (request, response) => {
  response.send('POST to /list/:listId/card. add card to list');
});

// TODO: ADD MORE ROUTES





// TODO: CONNECT TO MONGO AND START SERVER

app.listen(PORT, () => {
  console.log(`Your server is running on port ${PORT}\n...you better go and catch it.`);
});
