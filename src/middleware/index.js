const mdwares = require('./middlewares');
const logger = require('./logger');
const bodyParser = require('body-parser');

const middlewares = [
  // logger
  logger,

  // CORS
  mdwares.allowOrigins,

  // parse application/json
  bodyParser.json(),
  bodyParser.urlencoded({ extended: true }),
];

module.exports = middlewares;
