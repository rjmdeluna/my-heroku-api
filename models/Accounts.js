const express = require ('express');
const mongoose = require ('mongoose');
const bodyParser = require ('body-parser');

require('dotenv').config();

//
const port = process.env.PORT || 8080;

//create express app
const app = express();

//Starting server
const morgan = require('morgan');
app.use(morgan('tiny'));


//Database
require('./initializeDB')();

const db = mongoose.connection;

db.once ('open', () => {
    console.log ("Connected to MongoBD database...");
});

//Middleware
app.use(bodyParser.json());

//routes
app.get('/', (req, res) => {
    res.send("Welcome");
});

const postsRoute = require('./routes/posts.js');
const authRoute = require('./routes/auth.js');

app.use('/posts', postsRoute);
app.use('/auth', authRoute);

//Starting server
app.listen(port, console.log("Listening on port: ", port));