const path = require('path');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin')

module.exports = {
  entry: {
    fotoController: './public/js/controllers/foto-controller.js',
    fotosController: './public/js/controllers/fotos-controller.js'
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/dist'
  },
  plugins: [
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3000,
      proxy: 'http://localhost:8080/'
  })
  ],
  mode: 'development' // production
}