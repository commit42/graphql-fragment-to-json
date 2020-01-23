const path = require("path");
const PRODUCTION = process.env.NODE_ENV === "production";

module.exports = {
  entry: path.resolve(__dirname, "src/index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    libraryTarget: "umd",
    globalObject: "this"
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      }
    ]
  },
  resolve: {
    extensions: [".js"],
    modules: [path.resolve("./node_modules"), path.resolve(__dirname, "src")]
  },
  mode: PRODUCTION ? "production" : "development"
};
