const path = require('path');

module.exports = {

  entry: './src/index.js',
  mode: "production",
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js', 
    libraryTarget: 'umd',
  },
  module: {
    rules: [
        {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
          },
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env', '@babel/preset-react'],
              },
            },
          },
    ],
  },
};