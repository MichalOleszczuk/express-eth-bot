const applyAllFixtures = require('../src/fixtures/index');
const main = require('../src/index');

async function start() {
  await applyAllFixtures();
  main();
}

start();
