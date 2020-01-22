const path = require("path");
const webpack = require("webpack");
const fs = require("fs-extra");

const buildDir = path.join(__dirname, "dist");
const buildFilename = "index.js";

const PRODUCTION = process.env.NODE_ENV === "production";

module.exports = {
  target: "node",

  entry: "./src/index.js",

  output: {
    path: buildDir,
    filename: buildFilename
  },

  context: __dirname,
  node: {
    __filename: false,
    __dirname: false
  },

  resolve: {
    extensions: [".js"]
  },

  mode: PRODUCTION ? "production" : "development",

  plugins: [
    new webpack.DefinePlugin({
      __DIST: JSON.stringify(PRODUCTION)
    })
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};
