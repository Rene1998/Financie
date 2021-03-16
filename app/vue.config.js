module.exports = {
    css: {
       sourceMap: true,
    },
    outputDir: '@/',
    lintOnSave: false,
    configureWebpack: {
        performance: {
            maxAssetSize: 500000,
        },
    },
};