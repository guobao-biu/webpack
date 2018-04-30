var path = require('path')

function resolve (dir) {
    return path.join(__dirname, '.', dir)
}
module.exports = {
    entry: './src/app.js',
    output: {
        path: resolve('dist'),
        filename: 'main.js'
    }
}
