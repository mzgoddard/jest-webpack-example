const {join} = require('path');

module.exports = {
  context: __dirname,
  entry: './fact',
  output: {
    path: join(__dirname, 'dist'),
    filename: '[name].js',
  }
};
