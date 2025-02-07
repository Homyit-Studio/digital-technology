module.exports = {
  lintOnSave: false,
  devServer: {
    port: 8080,
    proxy: {
      '/api': {
        target: 'http://1.15.115.21:8081',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '',
        }
      }
    }
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require("postcss-px-to-viewport")({
            "viewportWidth": 1920,
            "unitPrecision": 5,
            "minPixelValue": 1,
            "exclude": [/components\/demo/]
          })
        ]
      }
    }
  }
}