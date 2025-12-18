const base = require('./webpack.config');

module.exports = {
  ...base,
  mode: 'production',
  devtool: 'source-map',
  output: {
    ...base.output,
    sourceMapFilename: 'source-map/[file].map',
  },
};
