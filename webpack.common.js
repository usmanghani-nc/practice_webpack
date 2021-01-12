module.exports = {
  entry: {
    name: './src/index.js',
    vendor: './src/vendor.js',
  },
  module: {
    rules: [
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
