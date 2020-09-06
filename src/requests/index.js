exports.sendOk = function sendOk(req, res, json) {
  if (json && typeof json !== 'object') {
    throw new Error('Response payload must be an object!');
  }
  res.statusCode = 200;
  if (json) {
    res.setHeader('Content-Type', 'application/json');
    res.json(json);
    return;
  }
  res.setHeader('Content-Type', 'text/html');
  res.end();
};

exports.sendError = function sendError(message, code, req, res) {
  res.setHeader('Content-Type', 'text/html');
  res.statusCode = code;
  res.write(message);
  res.end();
};
