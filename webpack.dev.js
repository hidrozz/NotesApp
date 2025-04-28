const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const path = require('path');
const { watchFile } = require('fs');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    watchFiles: ['src/**/*', 'index.html'],
    open: true,
    client: {
      overlay: { errors: true, warnings: false },
    },
  },
});
