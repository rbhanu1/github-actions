const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.[contenthash].js",
    path: path.resolve(__dirname, "./dist"),
  },
  module: {
    rules: [
      {
        test: /\.(png|jpeg)$/,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 3 * 1024, // 3KB
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new TerserPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin(),
  ],
  mode: "none",
};
