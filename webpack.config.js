const webpack = require("webpack");
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = (env, options) => {
  const isProduction = options.mode === 'production';

  const config = {
    entry: ['./src/index.js', './src/sass/styles.scss'],
    output: {
      filename: 'script.js',
      path: path.join(__dirname, '/dist'),
      assetModuleFilename: 'assets/[hash][ext]'
    },
    mode: isProduction ? 'production' : 'development',
    devtool: /* isProduction ? 'none' :  */'source-map',
    watch: !isProduction,
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'index.html')
      }),
      new CopyWebpackPlugin({
        patterns: [
          { from: path.resolve(__dirname, 'src/public'), to: path.resolve(__dirname, 'dist') },
        ],
      }),
      new MiniCssExtractPlugin({ filename: 'style.css'}), 
    ],
    module: {
      rules: [
        {
          test: /\.html$/i,
          loader: "html-loader",
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            MiniCssExtractPlugin.loader,
            "css-loader",
            "sass-loader",
          ],
        },
        // {
        //   test: /\.css$/i,
        //   use: [
        //     MiniCssExtractPlugin.loader,
        //     "css-loader"],
        // },
        {
          test: /\.(png|jpeg|jpg|gif)$/,
          type: 'asset/resource',                 
        },
        {
          test: /\.(woff(2)|eot|ttf|otf|svg)$/,
          type: 'asset/inline',                 
        },
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
      ]
    }
  };
  return config;
}