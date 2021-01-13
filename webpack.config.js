var webpack = require("webpack");
var path = require("path");

var SRC_DIR = path.resolve(__dirname, "client/src");
var DIST_DIR = path.resolve(__dirname, "client/dist");

module.exports = {
  entry: path.join(SRC_DIR, "/index.jsx"),
  output: {
    path: DIST_DIR,
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
};