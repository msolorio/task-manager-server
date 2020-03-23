'use strict';

// TODO: REQUIRE PACKAGES
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const app = express();
const PORT = process.env.PORT;
const boardRouter = require('./app/routes/boardRouter');

// TODO: CONFIGURE PACKAGES
app.use(morgan('common'));

app.use('/', boardRouter);

// TODO: CONNECT TO MONGO AND START SERVER
app.listen(PORT, () => {
  console.log(`Your server is running on port ${PORT}\n...you better go and catch it.`);
});
