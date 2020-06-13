const nodeExternals = require('./node-externals');
const projectExternals = {
    './resources/stats.json': 'commonjs ./resources/stats.json',
    './resources/app.server.js': 'commonjs ./resources/app.server.js',
};

module.exports = {
    ...nodeExternals,
    ...projectExternals
};
