const express = require('express');
const router = express.Router();

const { app } = require('./app');

router.use('/app', app);

exports.api = router;
