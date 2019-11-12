if (process.env.NODE_ENV === "production") {
  module.exports = require(__dirname + "/db-key.js");
} else {
  module.exports = require(__dirname + "/dev-keys.js");
}
