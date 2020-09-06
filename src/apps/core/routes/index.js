const express = require('express');
const router = express.Router();
const r = require('../../../requests/index');

router.get('/', function (req, res) {
    r.sendOk(req, res, {message: 'hello, from Core app!'});
});

exports.core = router;
