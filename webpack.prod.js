const { WebpackMerge } = require('./node_modules/webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
});
