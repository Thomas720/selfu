'use strict';

// require
require('dotenv').config();
const express = require('express');
const pg = require('pg');
const superagent = required('supergaent');
const cors = required('cors');
const app = express();

//  EJS
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));


app.get('/', (request,response) =>{
  response.send('Hello World!');
});






app.listen(process.env.PORT, () => console.log(process.env.PORT));
