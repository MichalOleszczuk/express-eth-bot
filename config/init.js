const initDB = require('../src/dataBase/index');

async function init() {
    return await Promise.all([
        // Add all prerequisites of your application to be launched there
        initDB,
    ]);
}

exports.init = init;
