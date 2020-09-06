const rfs = require('rotating-file-stream');
const config = require('../../config/index');
const morgan = require('morgan');

const pad = (num) => (num > 9 ? '' : '0') + num;
const generator = (time, index) => {
  if (!time) return 'file.log';

  var month = time.getFullYear() + '' + pad(time.getMonth() + 1);
  var day = pad(time.getDate());
  var hour = pad(time.getHours());
  var minute = pad(time.getMinutes());

  return `${month}/${month}${day}-${hour}${minute}-${index}-access.log`;
};

const accessLogStream = rfs.createStream(generator, {
  size: config.LOGS_SIZE,
  interval: config.LOGS_INTERVAL, // rotate daily
  path: config.LOGS_PATH,
});

const logger = morgan(config.MORGAN_LOGGER_LEVEL, { stream: accessLogStream });

module.exports = logger;
