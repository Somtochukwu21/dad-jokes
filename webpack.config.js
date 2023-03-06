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
    assetModuleFilename:'[name][ext]'
  },

  devtool: "source-map",

  devServer: {
    static: {
      directory: path.join(__dirname, "src"),
    },

    compress: true,
    port: 3000,
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

      {
        test: /\.(jpeg|jpg|png|gif|tiff|psd|pdf|eps|ai)$/i,
        type: "asset/resource",
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
