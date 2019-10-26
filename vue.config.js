/**
 * @description
 * @author mgLuoBo
 * @createTime 2019/10/15 0015 11:24
 */
module.exports = {
    //publicPath: process.env.NODE_ENV === 'production' ? '/strongDemo/' : '/',
    //outputDir: 'strongDemo',
    devServer: {
        port:"8081"
    },
	css: {
		loaderOptions: {
			postcss: {
				plugins: [
					require('postcss-pxtorem')({ // 把px单位换算成rem单位
						rootValue: 192, // 换算的基数(设计图750的根字体为32)
						selectorBlackList: ['weui', 'mu'], // 忽略转换正则匹配项
						propList: ['*']
					})
				]
			}
		}
	},
};
