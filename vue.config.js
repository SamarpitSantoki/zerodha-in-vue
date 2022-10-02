const { defineConfig } = require('@vue/cli-service')
const fs = require("fs");
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "/reports/",
  devServer: {
    https: {
      key: fs.readFileSync("./key.pem"),
      cert: fs.readFileSync("./cert.pem"),
    },
    // host: "kite.zerodha.com",
    port: 443,
  },
  configureWebpack:{
    devServer:{
      liveReload:true
    }
  }
});