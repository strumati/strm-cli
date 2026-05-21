const headers = {}

const url = new URL(config.ENDPOINT);
headers["host"] = url.host;

headers["x-strm-date"] = Date.now();

module.exports = headers;
