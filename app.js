const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const app = express();
// Log requests to console
app.use(logger('dev'));
// Parse incoming requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Require the routes into the application
require('./server/routes')(app);
// Setup a catch-all route that returns JSON
app.get('*', (req, res) => res.status(200).send({
    message: 'This is the express entry point'
}));

module.exports = app;