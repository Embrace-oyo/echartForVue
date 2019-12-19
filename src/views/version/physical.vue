<template>
<div class="physical">
	<div class="title">
		<div class="left"></div>
		<span><i></i>体能情况分析系统</span>
		<div class="right"></div>
	</div>
	<div class="goBack">
		<router-link tag="span" to="/people">返回</router-link>
	</div>
	<div class="pBox">
		<div class="box1">
			<span class="span">训练状态趋势</span>
			<div id="draw1" class="dr"></div>
		</div>
		<div class="box2">
			<span class="span">体能考核情况分析</span>
			<div id="draw2" class="dr"></div>
		</div>
		<div class="box3">
			<span class="span">体能单项数据每日对比</span>
			<div id="draw3" class="dr"></div>
		</div>
	</div>
</div>
</template>

<script>
		export default {
			name: "physical",
			data(){
				return{}
			},
			methods: {
				drawEchart1(){
							let myChart = this.$echarts.init(document.getElementById("draw1"));
							let option = {
									tooltip: {
										trigger: 'axis'
									},
									grid: {
											top: '20%',
											left: '5%',
											right: '5%',
											height: '70%',
											containLabel: true
									},
									xAxis: {
											type: 'category',
											data: ['训练量', '训练量', '训练量', '训练量', '训练量', '训练量', '训练量', '训练量', '训练量', '训练量',],
											axisLine: {
													show: false,
													lineStyle: {
															color: "#a2d4e6"
													}
											},
											axisLabel: {
													show: false,
													color: '#bafffc'
											},
											splitLine: {
													show: false,
													lineStyle: {
															type: 'solid',
															color: '#070a0c'
													}
											},
											axisTick: {
													show: false,
													alignWithLabel: true
											}
									},
									yAxis: {
											type: 'value',
											axisLine: {
													show: false,
													lineStyle: {
															color: "#a2d4e6"
													},
											},
											splitLine: {
													lineStyle: {
															type: 'solid',
															color: 'rgba(255, 255, 255, 0.1)'
													}
											},
											axisTick: {
													show: false,
													alignWithLabel: true
											},
											axisLabel: {
													show: true,
													color: '#bafffc'
											},
											nameTextStyle: {
													show: true,
													color: "#999"
											},
											splitArea: {
													show: false
											}
									},
									series: [
										{
													type: 'line',
													data: [400, 600, 220, 680, 660, 289, 670, 554, 339, 468, 639, 300],
													color: "#F58080",
													lineStyle: {
															normal: {
																	width: 5,
																	color: {
																			type: 'linear',
																			colorStops: [{
																					offset: 0,
																					color: '#755cf8' // 0% 处的颜色
																			}, {
																					offset: 0.32,
																					color: '#4c82e0' // 100% 处的颜色
																			}, {
																					offset: .63,
																					color: '#81f4f3' // 100% 处的颜色
																			},{
																					offset: 1,
																					color: '#2392a1' // 100% 处的颜色
																			}],
																			globalCoord: false // 缺省为 false
																	},
																	shadowColor: 'rgba(245,128,128, 0.5)',
																	shadowBlur: 10,
																	shadowOffsetY: 7
															}
													},
													itemStyle: {
															normal: {
																	color: '#F58080',
																	borderWidth: 10,
																	/*shadowColor: 'rgba(72,216,191, 0.3)',
																	 shadowBlur: 100,*/
																	borderColor: "#fff"
															}
													},
													smooth: true,
													//symbol:'none',
											},
									]
							};
							myChart.setOption(option);
					},
				drawEchart2(){
							let myChart = this.$echarts.init(document.getElementById("draw2"));
							let option = {
									color: ['#349cca'],
									tooltip : {
											trigger: 'axis',
											axisPointer : {            // 坐标轴指示器，坐标轴触发有效
													type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
											}
									},
									grid: {
											left: '3%',
											right: '4%',
											bottom: '3%',
											containLabel: true
									},
									xAxis : [
											{
													type : 'category',
													data : ['单杠', '三公里跑', '仰卧起坐', '打靶', '双杠', '军事三公里', '俯卧撑'],
													splitLine: {
														show: false,
													},
													axisLine: {
															show: true,
															lineStyle: {
																	color: "#a2d4e6"
															}
													},
													axisLabel: {
															show: true,
															color: '#bafffc'
													},
													axisTick: {
															show: false,
															alignWithLabel: false
													}
											}
									],
									yAxis : [
											{
												type : 'category',
												data : ['0', '合格', '良好', '优秀'],
												axisLine: {
														show: true,
														lineStyle: {
																color: "#a2d4e6"
														}
												},
												axisLabel: {
														show: true,
														color: '#bafffc'
												},
												splitLine: {
														show: false,
												},
												axisTick: {
													show: false,
												}
											}
									],
									series : [
											{
													name:'数据分析',
													type:'bar',
													barWidth: '60%',
													data:[
															[  '单杠',  '良好'  ],
															[  '三公里跑',  '合格'  ],
															[  '仰卧起坐',  '良好'  ],
															[  '打靶',  '优秀'  ],
															[  '双杠',  '良好'  ],
															[  '军事三公里',  '合格'  ],
															[  '俯卧撑',  '优秀'  ],
													]
											}
									]
							};
							myChart.setOption(option);
					},
				drawEchart3(){
							let myChart = this.$echarts.init(document.getElementById("draw3"));
							let option = {
									tooltip: {
											trigger: 'axis',
											axisPointer: { // 坐标轴指示器，坐标轴触发有效
													type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
											}
									},
									grid: {
											left: '2%',
											right: '4%',
											bottom: '14%',
											top: '16%',
											containLabel: true
									},
									xAxis: {
											type: 'category',
											data: ['单杠', '三公里跑', '仰卧起坐', '打靶', '双杠', '军事三公里', '俯卧撑'],
											axisLine: {
													show: true,
													lineStyle: {
															color: "#a2d4e6"
													}
											},
											axisLabel: {
													show: true,
													color: '#bafffc'
											},
											splitLine: {
													show: false,
											},
											axisTick: {
													show: false,
											}
									},
									yAxis: {
											type: 'value',
											max: '100',
											axisLine: {
													show: true,
													lineStyle: {
															color: "#a2d4e6"
													}
											},
											axisLabel: {
													show: true,
													color: '#bafffc'
											},
											splitLine: {
													show: false,
											},
											axisTick: {
													show: false,
											}
									},
									series: [{
											type: 'bar',
											barWidth: '15%',
											itemStyle: {
													normal: {
															color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
																	offset: 0,
																	color: '#ffbd1f'
															}, {
																	offset: 1,
																	color: '#ff5d1f'
															}]),
															barBorderRadius: [5, 5, 0, 0],
													},
											},
											data: [57, 80, 77, 77, 90, 64, 75]
									},
											{
													type: 'bar',
													barWidth: '15%',
													itemStyle: {
															normal: {
																	color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
																			offset: 0,
																			color: '#26d5e8'
																	}, {
																			offset: 1,
																			color: '#058df0'
																	}]),
																	barBorderRadius: [5, 5, 0, 0],
															}
															
													},
													data: [85, 75, 64, 80, 90, 100, 150,]
											},
									]
							};
							myChart.setOption(option);
					},
			},
			mounted() {
				this.drawEchart1();
				this.drawEchart2();
				this.drawEchart3();
			}
		}
</script>

<style scoped lang="less">
	.physical{
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
		.pBox{
			width: 1808px;
			height: 892px;
			float: left;
			margin:0 55px;
			margin-top: 20px;
			.box1{
				width: 892px;
				height: 446px;
				background-color: rgba(16, 16, 16, 0.8);
				border: solid 1px #26c1bf;
				float: left;
				position: relative;
				.span{
					font-size: 24px;
					color: #ffffff;
					position: absolute;
					top:23px;
					left: 33px;
					z-index: 10;
				}
			}
			.box2{
				width: 868px;
				height: 446px;
				background-color: rgba(16, 16, 16, 0.8);
				border: solid 1px #26c1bf;
				float: right;
				position: relative;
				.span{
					font-size: 24px;
					color: #ffffff;
					position: absolute;
					top:23px;
					left: 33px;
					z-index: 10;
				}
			}
			.box3{
				float: right;
				width: 1808px;
				height: 393px;
				background-color: rgba(16, 16, 16, 0.8);
				border: solid 1px #26c1bf;
				margin-top: 33px;
				position: relative;
				.span{
					display: inline-block;
					width: 100%;
					text-align: center;
					font-size: 24px;
					color: #ffffff;
					position: absolute;
					top:23px;
					left: 0;
					z-index: 10;
				}
			}
			.dr{
				width: 100%;
				height: 100%;
			}
		}
	}
</style>
