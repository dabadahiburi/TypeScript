const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "./src/index.tsx"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  devtool: "source-map",
  target: "node",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
      {
        enforce: "pre",
        test: /\.tsx?$/,
        loader: "source-map-loader"
      }
    ]
  }
};