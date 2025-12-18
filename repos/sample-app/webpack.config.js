// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: {
    background: './src/background/background-bootstrap.ts',
    desktop: './src/desktop/desktop-bootstrap.ts',
    osr: './src/osr/osr-bootstrap.ts',
    osrInGame: './src/osr-in-game/osr-in-game-bootstrap.ts',
  },

  module: {
    rules: [
      // Webpack 5 asset modules (replaces url-loader)
      {
        test: /\.(woff|woff2)$/i,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 8 * 1024, // inline under 8kb, otherwise emit file
          },
        },
      },

      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },

      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      '@overwolf/odk-ts': path.resolve(__dirname, '../odk-ts/src'),
    },
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    clean: true, // Webpack 5: cleans dist on build
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/background/background.html',
      filename: 'background/background.html',
      chunks: ['background'],
    }),
    new HtmlWebpackPlugin({
      template: './src/desktop/desktop.html',
      filename: 'desktop/desktop.html',
      chunks: ['desktop'],
    }),
    new HtmlWebpackPlugin({
      template: './src/osr/osr.html',
      filename: 'osr/osr.html',
      chunks: ['osr'],
    }),
    new HtmlWebpackPlugin({
      template: './src/osr-in-game/osr-in-game.html',
      filename: 'osr-in-game/osr-in-game.html',
      chunks: ['osrInGame'],
    }),
  ],
};
