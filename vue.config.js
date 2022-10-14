module.exports = {
    lintOnSave: false,
    // devServer: {
    //     port: 8083,
    //     proxyTable: {
    //         "/api": {                                 // /vue代理target
    //             target: 'http://192.168.101.4:9999/',      // 后端接口的根目录
    //             // secure: true,                       // 如果是 https ,需要开启这个选项
    //             changeOrigin: true,                    // 是否跨域
    //             pathRewrite: {                         // 是否重写路径，看代理前端路径是否与后端路径一致
    //                 '^/api': ''
    //             }
    //         }
    //     },
    // }
    devServer: {
        disableHostCheck: false,
        host: "192.168.101.4",
        port: 8085,
        https: false,
        hotOnly: false,
        proxy: {
            "/api": {                                 // /vue代理target
                target: 'http://192.168.101.4:9999/',      // 后端接口的根目录
                // secure: true,                       // 如果是 https ,需要开启这个选项
                changeOrigin: true,                    // 是否跨域
                pathRewrite: {                         // 是否重写路径，看代理前端路径是否与后端路径一致
                    '^/api': ''
                }
            }
        }
    }
}