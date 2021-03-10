const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve("public"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: ["", ".js", ".jsx"],
  },
  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: "json-loader",
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
      },
    ],
  },
};
