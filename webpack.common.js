const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack Demo',
      template: './src/template.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      // {
      //   test: /\.html$/i,
      //   loader: 'html-loader',
      // },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path].[hash].[ext]',
              outputPath: 'images',
            },
          },
        ],
      },
    ],
  },
};
