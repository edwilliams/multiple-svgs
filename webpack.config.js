const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    main: './example/index.js',
  },
  output: {
    filename: 'app.min.js',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    contentBase: 'public',
    // host: '0.0.0.0', // enable WDS to listen for requests from the network
  },
  plugins: [
    new htmlWebpackPlugin({
      template: './example/index.ejs',
      filename: './index.html',
    }),
  ],
}
