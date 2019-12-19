<template>
<div class="vacation">
	<div class="title">
		<div class="left"></div>
		<span><i></i>休假情况分析系统</span>
		<div class="right"></div>
	</div>
	<div class="goBack">
		<router-link tag="span" to="/newIndex">返回</router-link>
	</div>
	<div class="leftBox">
		<div class="li">
			<span class="tit">本月士兵建议休假人数</span>
			<span class="content">100</span>
		</div>
		<div class="li">
			<span class="tit">本月士官建议休假人数</span>
			<span class="content">10</span>
		</div>
		<div class="li">
			<span class="tit">本月建议休假总人数</span>
			<span class="content">110</span>
		</div>
	</div>
	<div class="rightBox">
		<div class="topBox">
			<span class="span">大数据休假汇总分析</span>
			<div id="draw"></div>
			<div class="words">
				<span>本月士兵休假人数汇总 <i style="color: #576bc1;">10人次</i></span>
				<span>本月士官休假人数汇总 <i style="color: #b92b7a;">5人次</i></span>
				<span>本月休假全体人数汇总 <i style="color: #e25f47;">15人次</i></span>
			</div>
		</div>
		<div class="bottomBox">
			<span>年/季度/月/周汇总</span>
			<div id="draw2"></div>
		</div>
	</div>
</div>
</template>

<script>
		export default {
			name: "vacation",
			data(){
				return{
				
				}
			},
			methods: {
				draw(){
							let myChart = this.$echarts.init(document.getElementById("draw"));
							let option = {
									color: [
											{
													type: 'linear',
													x: 0,
													y: 0,
													x2: 0,
													y2: 1,
													colorStops: [{
															offset: 0, color: '#910f83' // 0% 处的颜色
													}, {
															offset: 1, color: '#ed516e' // 100% 处的颜色
													}],
													global: false // 缺省为 false
											},
											{
													type: 'linear',
													x: 0,
													y: 0,
													x2: 0,
													y2: 1,
													colorStops: [{
															offset: 0, color: '#d93550' // 0% 处的颜色
													}, {
															offset: 1, color: '#f6e132' // 100% 处的颜色
													}],
													global: false // 缺省为 false
											},
											{
													type: 'linear',
													x: 0,
													y: 0,
													x2: 0,
													y2: 1,
													colorStops: [{
															offset: 0, color: '#1f74f1' // 0% 处的颜色
													},{
															offset: 1, color: '#8138bf' // 100% 处的颜色
													}],
													global: false // 缺省为 false
											},
									],
									tooltip : {
											trigger: 'item',
											formatter: "{a} <br/>{b} : {c} ({d}%)"
									},
									calculable : true,
									series : [
											{
													name:'休假汇总分析',
													type:'pie',
													radius : [20, 110],
													center : ['25%', '60%'],
													roseType : 'radius',
													label: {
															normal: {
																	show: false
															},
															emphasis: {
																	show: false
															}
													},
													lableLine: {
															normal: {
																	show: false
															},
															emphasis: {
																	show: false
															}
													},
													data:[
															{value: 10, name:'本月士兵休假人数汇总'},
															{value: 5,  name:'本月士官休假人数汇总 '},
															{value: 15, name:'本月休假总人数汇总'},
													]
											},
									]
							};
							myChart.setOption(option);
					},
				draw2(){
						let myChart = this.$echarts.init(document.getElementById("draw2"));
						let dataStyle = {
								normal: {
										label: {
												show: false
										},
										labelLine: {
												show: false
										},
								}
						};
						let option = {
								series: [
										{
											name: '第一个圆环',
											type: 'pie',
											clockWise: true,
											radius: [70, 65],
											itemStyle: dataStyle,
											hoverAnimation: false,
											center: ['12%', '50%'],
											data: [
													{
													value: 500,
													label: {
															normal: {
																	rich: {
																			a: {
																					color: '#fff',
																					align: 'center',
																					fontSize: 24,
																					fontWeight: "bold"
																			},
																			b: {
																					color: '#fff',
																					align: 'center',
																					fontSize: 24
																			}
																	},
																	formatter: function(params){
																			return "\n\n\n\n\n\n\n{a|1100个}"+"\n\n\n\n\n\n{b|年休假人数}";
																	},
																	position: 'center',
																	show: true,
																	textStyle: {
																			fontSize: '14',
																			fontWeight: 'normal',
																			color: '#fff'
																	}
															}
													},
													itemStyle: {
															normal: {
																	color: '#8c5ae7',
																	shadowColor: '#ed516e',
																	shadowBlur: 0
															}
													}
											},
											{
													value: 75,
													name: 'invisible',
													itemStyle: {
															normal: {
																	color: '#24375c'
															},
															emphasis: {
																	color: '#24375c'
															}
													}
											}
											]
										},
										{
											name: '第二个圆环',
											type: 'pie',
											clockWise: true,
											radius: [70, 65],
											itemStyle: dataStyle,
											hoverAnimation: false,
											center: ['38%', '50%'],
											data: [
													{
													value: 120,
													label: {
															normal: {
																	rich: {
																			a: {
																					color: '#fff',
																					align: 'center',
																					fontSize: 24,
																					fontWeight: "bold"
																			},
																			b: {
																					color: '#fff',
																					align: 'center',
																					fontSize: 24
																			}
																	},
																	formatter: function(params){
																			return "\n\n\n\n\n\n\n{a|300个}"+"\n\n\n\n\n\n{b|季休假人数}";
																	},
																	position: 'center',
																	show: true,
																	textStyle: {
																			fontSize: '14',
																			fontWeight: 'normal',
																			color: '#fff'
																	}
															}
													},
													itemStyle: {
															normal: {
																	color: '#fe8e5f',
																	shadowColor: '#ed516e',
																	shadowBlur: 0
															}
													}
											},
											{
													value: 75,
													name: 'invisible',
													itemStyle: {
															normal: {
																	color: '#24375c'
															},
															emphasis: {
																	color: '#24375c'
															}
													}
											}
											]
										},
										{
											name: '第三个圆环',
											type: 'pie',
											clockWise: true,
											radius: [70, 65],
											itemStyle: dataStyle,
											hoverAnimation: false,
											center: ['63%', '50%'],
											data: [
													{
													value: 80,
													label: {
															normal: {
																	rich: {
																			a: {
																					color: '#fff',
																					align: 'center',
																					fontSize: 24,
																					fontWeight: "bold"
																			},
																			b: {
																					color: '#fff',
																					align: 'center',
																					fontSize: 24
																			}
																	},
																	formatter: function(params){
																			return "\n\n\n\n\n\n\n{a|60个}"+"\n\n\n\n\n\n{b|月休假人数}";
																	},
																	position: 'center',
																	show: true,
																	textStyle: {
																			fontSize: '14',
																			fontWeight: 'normal',
																			color: '#fff'
																	}
															}
													},
													itemStyle: {
															normal: {
																	color: '#7de3f6',
																	shadowColor: '#ed516e',
																	shadowBlur: 0
															}
													}
											},
											{
													value: 75,
													name: 'invisible',
													itemStyle: {
															normal: {
																	color: '#24375c'
															},
															emphasis: {
																	color: '#24375c'
															}
													}
											}
											]
										},
										{
											name: '第三个圆环',
											type: 'pie',
											clockWise: true,
											radius: [70, 65],
											itemStyle: dataStyle,
											hoverAnimation: false,
											center: ['88%', '50%'],
											data: [
													{
													value: 20,
													label: {
															normal: {
																	rich: {
																			a: {
																					color: '#fff',
																					align: 'center',
																					fontSize: 24,
																					fontWeight: "bold"
																			},
																			b: {
																					color: '#fff',
																					align: 'center',
																					fontSize: 24
																			}
																	},
																	formatter: function(params){
																			return "\n\n\n\n\n\n\n{a|20个}"+"\n\n\n\n\n\n{b|周休假人数}";
																	},
																	position: 'center',
																	show: true,
																	textStyle: {
																			fontSize: '14',
																			fontWeight: 'normal',
																			color: '#fff'
																	}
															}
													},
													itemStyle: {
															normal: {
																	color: '#ed516e',
																	shadowColor: '#ed516e',
																	shadowBlur: 0
															}
													}
											},
											{
													value: 75,
													name: 'invisible',
													itemStyle: {
															normal: {
																	color: '#24375c'
															},
															emphasis: {
																	color: '#24375c'
															}
													}
											}
											]
										},
								]
						}
						myChart.setOption(option);
				}
			},
			mounted() {
				this.draw();
				this.draw2();
			}
		}
</script>

<style scoped lang="less">
	.vacation{
		width: 100vw;
		height: 100vh;
		position: relative;
		.title{
			margin-top: 20px;
			float: left;
			height: 50px;
			width: 100%;
			display: flex;
			justify-content: space-between;
			align-items: center;
			position: relative;
			span{
				font-size: 30px;
				font-weight: bold;
				font-stretch: normal;
				width: 700px;
				position: relative;
				text-align: center;
				i{
					display: block;
					width: 72px;
					height: 67px;
					background-image: url('~@/assets/img/bg/junhui.png');
					background-size: 100%;
					position: absolute;
					top: -20px;
				}
			}
			.backButton{
				position: absolute;
				left: 30px;
				top: -20px;
				color: #1de9b6;
				font-size: 20px;
				cursor: pointer;
			}
			.left{
				width: 542px;
				display: block;
				height: 100%;
				background-image: url("~@/assets/img/bg/leftBg.png");
				background-size: 100% 100%;
			}
			.right{
				width: 542px;
				display: block;
				height: 100%;
				background-image: url("~@/assets/img/bg/rightBg.png");
				background-size: 100% 100%;
			}
		}
		.goBack{
			width: 100%;
			float: left;
			span{
				float: left;
				display: block;
				width: 200px;
				height: 60px;
				line-height: 60px;
				margin-right: 50px;
				background-color: rgba(56, 141, 120, 0.2);
				border: 1px solid rgba(56, 141, 120, 0.5);
				color: #81939b;
				font-size: 18px;
				border-radius: 5px;
				outline: none;
				position: relative;
				text-align: center;
				cursor: pointer;
				margin-left: 55px;
			}
		}
		.leftBox{
			width: 734px;
			height: 882px;
			background-color: rgba(16, 16, 16, 0.8);
			border: solid 1px #26c1bf;
			float: left;
			margin-top: 20px;
			margin-left: 55px;
			display: flex;
			align-items: center;
			justify-content: center;
			flex-direction: column;
			.li{
				width: 650px;
				height: 242px;
				background-image: linear-gradient(-32deg, #8138bf 0%, #28a3c3 100%), linear-gradient(-27deg, #22aec8 0%, #782481 100%);
				background-blend-mode: normal, normal;
				border-radius: 10px;
				margin: 16px 0;
				display: flex;
				flex-direction: column;
				align-items: center;
				.tit{
					color: #ffffff;
					font-size: 30px;
					margin-top: 30px;
					margin-left: 30px;
					margin-bottom: 57px;
					align-self: flex-start;
				}
				.content{
					color: #ffffff;
					font-size: 80px;
				}
			}
			.li:nth-child(2){
				background-image: linear-gradient(-32deg,
				#910f83 0%,
				#ed516e 100%),
				linear-gradient(-27deg,
				#22aec8 0%,
				#782481 100%);
			}
			.li:nth-child(3){
				background-image: linear-gradient(-32deg,
				#d93550 0%,
				#f6bc32 100%),
				linear-gradient(-27deg,
				#22aec8 0%,
				#782481 100%);
			}
		}
		.rightBox{
			width: 1016px;
			height: 882px;
			float: right;
			margin-top: 20px;
			margin-right: 55px;
			.topBox{
				border: solid 1px #26c1bf;
				width: 1016px;
				height: 420px;
				background-color: rgba(16, 16, 16, 0.8);
				position: relative;
				.span{
					position: absolute;
					top: 30px;
					left: 33px;
					font-size: 24px;
					z-index: 10;
				}
				#draw{
					width: 100%;
					height: 100%;
				}
				.words{
					position: absolute;
					right: 60px;
					top: 0;
					z-index: 10;
					height: 100%;
					display: flex;
					flex-direction: column;
					align-items: baseline;
					justify-content: center;
					span{
						width: 400px;
						margin: 20px;
						color:#ffffff;
						font-size: 28px;
						display: flex;
						align-items: center;
						justify-content: space-between;
						i{
							font-style: normal;
							margin-left: 30px;
						}
					}
				}
			}
			.bottomBox{
				border: solid 1px #26c1bf;
				width: 1016px;
				height: 420px;
				background-color: rgba(16, 16, 16, 0.8);
				margin-top: 42px;
				position: relative;
				span{
					position: absolute;
					top: 30px;
					left: 33px;
					font-size: 24px;
					z-index: 10;
				}
				#draw2{
					width: 100%;
					height: 100%;
				}
			}
		}
	}
</style>
