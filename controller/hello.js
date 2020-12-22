const express = require('express');
const { helloService } = require('../service');

const router = express.Router();

router.get('/', helloService.hello);
router.get('/world', helloService.world);

module.exports = router;
