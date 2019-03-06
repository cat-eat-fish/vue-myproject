module.exports = {
    //根路径
    publicPath: "/",

    // 构建输出目录
    outputDir: "dist",

    //静态资源目录（js,css,img,fonts）
    assetsDir: "assets",

    // LintOnSave: false,          //是否开启esLint保存检测，有效值 true || false || 'error'
    devServer:{
        open: true,               
        host: "localhost",
        port: 8080,
        https: false,
        hotOnly: false,
        proxy:{
            //城市api
            '/myapi': {
                target: "http://www.weather.com.cn/",
                ws: true,
                changeOrigin: true,
                pathRewrite:{
                    '^/myapi': ''
                }
            },
        }
    },
}
