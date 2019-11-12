var path = require("path");
var SRC_DIR = path.join(__dirname, "/react-client/src");
var DIST_DIR = path.join(__dirname, "/react-client/dist");

module.exports = {
    resolve: {
        extensions: [".js", ".jsx"]
    },
    entry: `${SRC_DIR}/index.jsx`,
    output: {
        filename: "bundle.js",
        path: DIST_DIR
    },
    module: {
        rules: [{
            test: /\.jsx?/,
            include: SRC_DIR,
            loader: "babel-loader"
        }]
    }
};