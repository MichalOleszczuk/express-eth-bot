const sqlite3 = require('sqlite3').verbose();
const config = require('../../../config/index');
const db = new sqlite3.Database(config.SQLITE_DB_PATH, sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE);

function defaultWallet() {
  db.serialize(function () {
    db.run('CREATE TABLE wallet (info TEXT)');
    const stmt = db.prepare('INSERT INTO wallet VALUES (?)');

    for (let i = 0; i < 10; i += 1) {
      stmt.run('Ipsum ' + i);
    }

    stmt.finalize();

    db.each('SELECT rowid AS id, info FROM wallet', function (err, row) {
      console.log(row.id + ': ' + row.info);
    });
  });

  db.close();
}

defaultWallet();
