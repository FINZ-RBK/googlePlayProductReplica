<<<<<<< HEAD
const webpack = require("webpack");
const path = require("path");
const config = {
  entry: ["react-hot-loader/patch", path.resolve(__dirname, "./src/app.jsx")],
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      "react-dom": "@hot-loader/react-dom"
    }
  },
  devServer: {
    contentBase: "./public"
  }
};
module.exports = config;
=======
var path = require("path");
var SRC_DIR = path.join(__dirname, "/react-client/src");
var DIST_DIR = path.join(__dirname, "/react-client/dist");

module.exports = {
    entry: `${SRC_DIR}/index.jsx`,
    output: {
        filename: "bundle.js",
        path: DIST_DIR
    },
    module: {
        loaders: [{
            test: /\.jsx?/,
            include: SRC_DIR,
            loader: "babel-loader"
        }]
    }
};
>>>>>>> 698ca41475272cc9bc44b5291b59e1433ed70fec
