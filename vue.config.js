module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: 'http://web.juhe.cn:8080/',
        changeOrigin: true,
        ws: true,
        secure: false,
        pathRewrite: {
          '^/api': ''
        }
      },
    },
    // proxy: {
    //   "/constellations": {
    //     target: "https://api.allyx.cn:5457/",
    //     changeOrigin: true,
    //     ws: true,
    //     secure: true,
    //     pathRewrite: {
    //       '^/api': ''
    //     }
    //   },
    // },
    overlay: {
      warnings: false,
      error: false,
    }
  },
  lintOnSave: false,
}