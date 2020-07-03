module.exports = {
	plugins: {
		autoprefixer:{},
		"postcss-px-to-viewport": {
			viewportWidth: 375,
			viewportHeight: 667,
      unitPrecision: 5,//指定px转换为视窗单位的最小位数		
      ViewportUnit: 'vm', // 指定需要转换成的单位
			selectorBlackList: ['ignore',],//指定不需要转换的类
			minPixelValue: 1,//小于当前值不需要转换单位
			mediaQuery: false//是否允许在媒体查询中转换
		}
  }
}