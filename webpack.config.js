const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",

  entry: {
    bundle: path.resolve(__dirname, "./assets//javascript/index.js"),
  },

  output: {
    path: path.resolve(__dirname, "src"),
    filename: "[name][contenthash].js",
    clean: true,
  },

  devtool: "source-map",

  devServer: {
    static: {
      directory: path.join(__dirname, "src"),
    },

    compress: true,
    port: 1500,
    open: true,
    hot: true,
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },

      // so it can be compactible for older browsers
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "Dad Jokes",
      template: "./dist/template.html",
    }),
  ],
};
