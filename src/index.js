const express = require('express');
const app = express();
const config = require('../config/index');
const middlewares = require('./middleware/index');
const { router } = require('../config/router');
const init = require('../config/init').init;

process.on('unhandledRejection', (err) => {
  throw err;
});

async function main() {
  // Inside init function launch all application prerequisites.
  init()
    .then(() => {
      // Apply middlewares
      app.use(middlewares);

      // Adding URL's
      app.use('/', router);

      app.listen(config.EXPRESS_PORT, config.EXPRESS_HOST, () =>
        console.log(`Express app listening on ${config.EXPRESS_HOST}:${config.EXPRESS_PORT}`),
      );
    })
    .catch((error) => {
      throw error;
    });
}

module.exports = main;
