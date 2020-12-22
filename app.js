const express = require('express');
const router = require('./controller');

const app = express();

app.use(router);

module.exports = app;
