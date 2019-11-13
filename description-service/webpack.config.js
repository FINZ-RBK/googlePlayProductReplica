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
