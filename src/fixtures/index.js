const fs = require('fs');
const path = require('path');
const config = require('../../config/index');
const { exec } = require('child_process');

const scriptsFolder = path.join(__dirname, './scripts/');

const files = fs.readdirSync(scriptsFolder);

async function applyAllFixtures() {
  try {
    if (fs.existsSync(config.SQLITE_DB_PATH)) {
      console.log('DB exists. No fixtures needed');
      return;
    } else {
      const fixtures = files.map(function (file) {
        return new Promise((resolve, reject) => {
          exec(`node ${scriptsFolder}${file}`, (err, stdout, stderr) => {}).on('exit', (code) => {
            if (code !== 0) {
              reject(new Error(`Fixture failed with code: ${code}`));
            }
            resolve();
          });
        });
      });
      const dbDir = path.dirname(config.SQLITE_DB_PATH);
      await fs.promises.mkdir(dbDir, { recursive: true });
      await Promise.all(fixtures);
      console.log('FIXTURES DONE');
      return;
    }
  } catch (error) {
    console.log(`ERROR: ${error}`);
  }
}

module.exports = applyAllFixtures;
