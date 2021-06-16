module.exports = {
	css: {
		sourceMap: true
	},
	outputDir: '../dist',
	lintOnSave: false,
	configureWebpack: {
		performance: {
			maxAssetSize: 500000
		}
	}
}
