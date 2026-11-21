const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env, argv) => {
  const prod = argv.mode === "production";

  return {
    entry: "./src/index.js",
    output: {
      path: path.resolve(__dirname, "dist"),
      // Content hashes so GitHub Pages visitors never get a stale bundle.
      filename: prod ? "[name].[contenthash:8].js" : "bundle.js",
      assetModuleFilename: "assets/[hash][ext][query]",
      clean: true,
    },
    module: {
      rules: [
        {
          test: /\.css$/i,
          // Production ships CSS as its own file so the page can style before JS runs.
          use: [prod ? MiniCssExtractPlugin.loader : "style-loader", "css-loader", "postcss-loader"],
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: { loader: "babel-loader" },
        },
        {
          test: /\.(png|jpe?g|gif|svg|woff2?)$/i,
          type: "asset/resource",
        },
      ],
    },
    resolve: {
      extensions: [".js", ".jsx"],
    },
    plugins: [
      new HtmlWebpackPlugin({ template: "./public/index.html" }),
      new CopyWebpackPlugin({
        patterns: [
          { from: "public/images", to: "images" },
          { from: "public/CNAME", to: "CNAME", toType: "file" },
        ],
      }),
      ...(prod ? [new MiniCssExtractPlugin({ filename: "[name].[contenthash:8].css" })] : []),
    ],
    performance: { hints: false },
    devServer: {
      static: { directory: path.join(__dirname, "public") },
      port: 3000,
    },
  };
};
