const { withPlugins } = require('next-compose-plugins');
const modifyEntries = require('./entry/plugin')

module.exports = withPlugins([
  [modifyEntries]
])

// module.exports = modifyEntries()