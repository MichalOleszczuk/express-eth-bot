const express = require('express');
const router = express.Router();

const { api } = require('../src/apps/api/routes/index');
const { core } = require('../src/apps/core/routes/index');

router.use('/api', api);
router.use('/core', core);

exports.router = router;
