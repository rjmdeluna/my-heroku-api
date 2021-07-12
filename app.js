const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
require('dotenv').config();

const port = process.env.PORT;
//Starting server
const morgan = require('morgan'); 
app.use(morgan('tiny'));

app.listen(port, () => {
    console.log("Server started on PORT : ", port);
});

//Import Routes
const postsRoute = require('./routes/posts.js');

app.use(bodyParser.json());
app.use('/posts', postsRoute);
//JSON to JS
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//ROUTES
app.get('/',(req, res) => {
    res.send("Hello to you");
});

//require
require('./initializeDB')();

