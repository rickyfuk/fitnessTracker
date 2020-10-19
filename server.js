// Main server
// Get the express dependencies
const express = require('express');
// use the morgan for logging
const logger = require('morgan');
// use mongoose for the conneting and using mongo database
const mongoose = require('mongoose');
// activate the dotenv
require('dotenv').config();
// Sets up the Express App and PORT for Frontend
const app = express();
const PORT = process.env.PORT || 8080;

// get the schema for workout and exercise table
const db = require('./model');

// middleware for the logger
app.use(logger('dev'));
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static('public'));

// connection to mongo database
mongoose.connect('mongodb://localhost/fitnesstrackerdb', {
	useNewUrlParser: true,
});

// verify the connection
mongoose.connection.on('connected', () => {
	console.log('Mongoose is connected!!!!');
});

// Set the route
const htmlRoute = require('./route/htmlRoute');
const apiRoute = require('./route/apiRoute');

app.use(apiRoute);
app.use(htmlRoute);

// listen to the port
app.listen(PORT, () => {
	console.log(`App running on port ${PORT}!`);
});
