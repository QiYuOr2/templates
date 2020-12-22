const express = require('express');
const helloController = require('./hello');

const router = express.Router();

router.use('/hello', helloController);

module.exports = router;
