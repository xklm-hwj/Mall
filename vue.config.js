
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        "components": '@/components',
        "views": '@/views',
        "utils": '@/utils',
        "assets": '@/assets',
        "api": '@/api'
      }
    }
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8360',
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}