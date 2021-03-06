const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|jpe?g|gif|3mf|gltf)$/i,
        use: [ 
        {
          loader: 'file-loader',
        },
      ]
      },
      {
        test: /\.bin$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'url-loader',
              options: {
                encoding: false,
                mimetype: false,
                generator: (content) => {
                  return content;
                }
              },
            },
          ],
      }
    ]
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },
  output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: "/dist/",
    filename: "bundle.js"
  },
};

// const TerserPlugin = require('terser-webpack-plugin');

// module.exports = {
//   mode: 'production',
//   optimization: {
//     minimizer: [new TerserPlugin({ /* additional options here */ })],
//   },
// };