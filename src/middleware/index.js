const mdwares = require('./middlewares');
const bodyParser = require('body-parser');

const middlewares = [
    // CORS
    mdwares.allowOrigins,

    // parse application/json
    bodyParser.json(),
    bodyParser.urlencoded({ extended: true }),
];

module.exports = middlewares;
