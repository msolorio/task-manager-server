const express = require('express');
const app = express();
const PORT = 3001;

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

app.get('/', (request, response) => {
  response.send('data for board');
});



app.listen(PORT, () => {
  console.log(`Your server is running on port ${PORT}\n...you better go and catch it.`);
});
