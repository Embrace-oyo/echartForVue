<template>
	<div class="upLoadBox">
		<div class="title">
			<div class="left"></div>
			<span><i></i>士兵全息大数据管理与分析系统</span>
			<div class="right"></div>
		</div>
		<div class="upLoad">
			<div class="top">
				<div class="goBack">
					<router-link tag="span" to="/newIndex">< 返回</router-link>
				</div>
				<div class="search">
					<input type="text" v-model="keyword">
				</div>
				<div class="button">
					搜索
				</div>
			</div>
			<div class="contentBox">
					<div class="box1">
						<div class="pieBox">
							<h3>个人在位情况统计</h3>
							<div id="pie"></div>
						</div>
						<div class="raderBox">
							<h3>士兵思想汇总分析</h3>
							<div id="rader"></div>
						</div>
					</div>
					<div class="box2">
						<div class="scatterBox">
							<h3>活动轨迹统计</h3>
							<div id="scatter"></div>
						</div>
						
					</div>
					<div class="box3">
						<div class="lineBox">
							<h3>个人训练成绩平均分</h3>
							<div id="line"></div>
						</div>
					</div>
					<div class="box4">
						<div class="barBox">
							<h3>个人出入情况统计</h3>
							<div id="bar"></div>
						</div>
					</div>
			</div>
		</div>
	</div>
</template>

<script>
		export default {
				name: "search",
				data(){
						return {
								keyword: '李世林',
								pie: null,
								rader: null,
								scatter: null,
								line: null,
								bar: null,
								optionPie: {},
								optionRader: {},
								optionScatter: {},
								optionLine: {},
								optionBar: {},
						}
				},
				methods: {
				
				},
				mounted() {
						this.pie = this.$echarts.init(document.getElementById("pie"));
						this.rader = this.$echarts.init(document.getElementById("rader"));
						this.scatter = this.$echarts.init(document.getElementById("scatter"));
						this.line = this.$echarts.init(document.getElementById("line"));
						this.bar = this.$echarts.init(document.getElementById("bar"));
						this.optionPie = {
								tooltip: {
										trigger: 'item',
										formatter: "{a} <br/>{b}: {c} ({d}%)",
								},
								legend: {
										orient: 'vertical',
										x: 'right',
										top: 10,
										right: 10,
										data:['实到次数', '请假次数', '异常次数'],
										textStyle: {
												color: '#81939b'
										}
								},
								series: [
										{
												name:'访问来源',
												type:'pie',
												selectedMode: 'single',
												radius: [0, '30%'],
												label: {
														normal: {
																position: 'inner'
														}
												},
												labelLine: {
														normal: {
																show: false
														}
												},
												color: ['#ff5d1f', '#ffbd1f', '#FFA813'],
												data:[
														{value: 1548, name:'实到人数'},
														{value: 679, name:'请假人数'},
														{value: 335, name:'异常人数'}
												]
										},
										{
												name: '统计',
												type:'pie',
												radius: ['40%', '55%'],
												color: ['rgba(42, 187, 155, 1)', 'rgba(42, 187, 155, .5)', 'rgba(42, 187, 155, .3)'],
												data:[
														{value: 27, name:'实到次数'},
														{value: 2, name:'请假次数'},
														{value: 1, name:'异常次数'},
												]
										}
								]
						};
						this.optionRader = {
								title: {
										show: false,
								},
								tooltip: {},
								grid: {
										top: 'middle',
										left: '10%',
										right: '10%',
										height: '60%',
										containLabel: true
								},
								radar: {
										center: ['50%', '60%'],
										radius: '60%',
										//shape: 'circle',
										name: {
												textStyle: {
														color: '#81939b',
														borderRadius: 3,
														padding: [3, 5]
												}
										},
										indicator: [
												{ name: '人机关系', max: 100},
												{ name: '社交思想', max: 100},
												{ name: '自控力', max: 100},
												{ name: '爱岗敬业', max: 100},
												{ name: '守纪律', max: 100},
												{ name: '法纪观念', max: 100},
												{ name: '价值观', max: 100},
										],
										axisLine: {
												lineStyle: {
														width : 1,
														color : '#81939b',
														type: 'dashed'
												}
										},
										splitLine : {
												show : true,
												lineStyle : {
														width : 1,
														color : '#81939b',
														type: 'solid'
														// 图表背景网格线的颜色
												}
										},
										splitArea : {
												show : true,
												areaStyle : {
														color: 'rgba(0,0,0,0)'
														// 图表背景网格的颜色
												}
										},
								},
								series: [{
										name: '全军横向分析',
										type: 'radar',
										color: ['#2abb9b'],
										lineStyle: {
												width: 1
										},
										symbol:'none',
										data : [
												{
														value : [85, 70, 69, 90, 88, 90, 86],
														areaStyle: {
																normal: {
																		opacity: 0.5,
																		color: new this.$echarts.graphic.RadialGradient(0.1, 0.5, 1, [
																				{
																						color: 'rgba(42, 187, 155, 1)',
																						offset: 0
																				},
																				{
																						color: 'rgb(42,187,155)',
																						offset: 1
																				}
																		])
																}
														}
												},
										]
								}]
						};
						this.optionScatter = {
								xAxis: {
										axisLine: {
												show: false,
												lineStyle: {
														color: '#212222'
												}
										},
										axisLabel: {
												show: false,
												interval: 0,
												color: '#81939b'
										},
										splitLine: {
												show: true,
												lineStyle: {
														type: 'solid',
														color: '#81939b'
												}
										},
								},
								yAxis: {
										axisLine: {
												show: false,
												lineStyle: {
														color: '#212222'
												}
										},
										axisLabel: {
												show: false,
												interval: 0,
												color: '#81939b'
										},
										splitLine: {
												show: true,
												lineStyle: {
														type: 'solid',
														color: '#81939b'
												}
										},
								},
								series: [{
										type: 'scatter',
										symbolSize: 20,
										itemStyle: {
											color: '#2abb9b',
										},
										data: [
												[10.0, 8.04],
												[8.0, 6.95],
												[13.0, 7.58],
												[9.0, 8.81],
												[11.0, 8.33],
												[14.0, 9.96],
												[6.0, 7.24],
												[4.0, 4.26],
												[12.0, 10.84],
												[7.0, 4.82],
												[5.0, 5.68]
										],
								}]
						};;
						this.optionLine = {
								title: {
										show: false,
								},
								tooltip: {
										trigger: 'axis'
								},
								grid: {
										top: 'middle',
										left: '10%',
										right: '10%',
										height: '60%',
										containLabel: true
								},
								xAxis: [
										{
												type: 'category',
												boundaryGap: false,
												data: ["第一次", "第二次", "第三次", "第四次", "第五次", "第六次", "第七次", "第八次", "第九次", "第十次"],
												axisLine: {
														show: false,
														lineStyle: {
																color: '#81939b'
														}
												},
												axisTick: {
														show: false,
														alignWithLabel: true,
												},
												axisLabel: {
														show: true,
														interval: 0,
														color: '#81939b'
												},
										},
								],
								yAxis: [
										{
												min: 0,
												max: 100,
												type: 'value',
												axisLine: {
														show: true,
														lineStyle: {
																color: '#81939b'
														}
												},
												axisLabel: {
														show: true,
														interval: 0,
														color: '#81939b'
												},
												splitLine: {
														show: false,
														lineStyle: {
																type: 'solid',
																color: '#333434'
														}
												},
										},
										{
												min: 0,
												max: 100,
												type: 'value',
												axisLine: {
														show: false,
														lineStyle: {
																color: '#212222'
														}
												},
												axisLabel: {
														show: false,
														interval: 0,
														color: '#81939b'
												},
												splitLine: {
														show: true,
														lineStyle: {
																type: 'solid',
																color: '#81939b'
														}
												},
										}
								],
								color: ['#2abb9b'],
								series: [
										{
												yAxisIndex: 0,
												data: [88, 79, 70, 90, 85,88, 79, 70, 90, 85],
												type: 'line',
												markLine : {
														data : [
																{type : 'average', name: '平均值'}
														]
												}
										},
								]
						};
						this.optionBar =  {
								title: {
										show: false,
								},
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
										data: ['一日', '二日', '三日', '四日', '五日', '六日', '七日', '八日', '九日', '十日', '十一日', '十二日', '十三日', '十四日', '十五日', '十六日', '十七日', '十八日', '十九日', '二十日', '二十一日', '二十二日', '二十三日', '二十四日', '二十五日', '二十六日', '二十七日', '二十八日', '二十九日', '三十日'],
										axisLine: {
												lineStyle: {
														color: '#81939b'
												}
										},
										axisLabel: {
												textStyle: {
														color: '#81939b',
														fontFamily: 'Microsoft YaHei'
												},
												lineStyle: {
														type: 'solid',
														color: '#81939b'
												}
										},
								},
								yAxis: {
										type: 'value',
										max: '100',
										axisLine: {
												show: false,
												lineStyle: {
														color: '#81939b'
												}
										},
										splitLine: {
												show: true,
												lineStyle: {
														color: '#81939b'
												}
										},
										axisLabel: {}
								},
								series: [
										{
											name: '出',
											type: 'bar',
											barWidth: '15%',
											itemStyle: {
													normal: {
															color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
																	offset: 0,
																	color: 'rgba(4, 220, 255, .5)'
															}, {
																	offset: 1,
																	color: 'rgba(4, 220, 255, 1)'
															}]),
															barBorderRadius: 12,
													},
											},
											data: [57, 80, 77, 45, 65, 86, 54, 32, 90, 102, 57, 80, 77, 45, 65, 86, 54, 32, 90, 102, 57, 80, 77, 45, 65, 86, 54, 32, 90, 102]
										},
										{
												name: '入',
												type: 'bar',
												barWidth: '15%',
												itemStyle: {
														normal: {
																color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
																		offset: 0,
																		color: 'rgba(42, 187, 155, 0.5)'
																}, {
																		offset: 1,
																		color: 'rgba(42, 187, 155, 1)'
																}]),
																barBorderRadius: 11,
														}
														
												},
												data: [85, 75, 64, 30, 61, 72, 81, 55, 77, 97, 85, 75, 64, 30, 61, 72, 81, 55, 77, 97, 85, 75, 64, 30, 61, 72, 81, 55, 77, 97]
										},
								]
						};
						this.pie.setOption(this.optionPie);
						this.rader.setOption(this.optionRader);
						this.scatter.setOption(this.optionScatter);
						this.line.setOption(this.optionLine);
						this.bar.setOption(this.optionBar);
				}
		}
</script>

<style scoped lang="less">
	.upLoadBox{
		width: 100%;
		height: 100%;
		position: relative;
		.title{
			padding-top: 15px;
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
		.upLoad{
			position: absolute;
			width: 100%;
			height: 90%;
			left: 1%;
			top: 9%;
			.top{
				display: flex;
				align-items: center;
				justify-content: flex-end;
				width: 100%;
				.goBack{
					justify-items: flex-start;
					flex: 1;
					color: #81939b;
					font-size: 20px;
					span{
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
					}
				}
				.search{
					width: 400px;
					height: 60px;
					background-color: #000;
					border: 1px solid rgba(56, 141, 120, 0.5);
					display: flex;
					justify-content: center;
					align-items: center;
					margin-right: 5px;
					border-radius: 5px;
					input{
						outline: none;
						width: 95%;
						height: 50px;
						float: left;
						display: block;
						background-color: #000;
						border: none;
						font-size: 20px;
						color: #fff;
					}
				}
				.button{
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
					input{
						display: block;
						position: absolute;
						width: 100%;
						height: 100%;
						opacity: 0;
						left: 0;
						top: 0;
						z-index: 999;
						cursor: pointer;
					}
				}
			}
			.contentBox{
				width: 100%;
				height: calc(100% - 100px);
				overflow: auto;
				h3{
					text-align: center;
					font-size: 16px;
					margin: 0 auto;
					margin-top: 10px;
					position: absolute;
					z-index: 10;
					color: #81939b;
				}
				.box1{
					width: 500px;
					height: 830px;
					margin-top: 10px;
					float: left;
					border: 1px solid rgba(56, 141, 120, 0.5);
					background-color: rgba(56, 141, 120, 0.2);
					.pieBox{
						width: 100%;
						height: 410px;
						margin-bottom: 10px;
						position: relative;
						display: flex;
						justify-content: center;
						#pie{
							width: 100%;
							height: 100%;
						}
					}
					.raderBox{
						width: 100%;
						height: 410px;
						display: flex;
						justify-content: center;
						#rader{
							width: 100%;
							height: 100%;
						}
					}
				}
				.box2{
					width: 450px;
					height: 450px;
					margin-top: 10px;
					margin-left: 10px;
					float: left;
					border: 1px solid rgba(56, 141, 120, 0.5);
					background-color: rgba(56, 141, 120, 0.2);
					.scatterBox{
						width: 100%;
						height: 410px;
						display: flex;
						justify-content: center;
						#scatter{
							width: 100%;
							height: 100%;
						}
					}
				}
				.box3{
					width: 890px;
					height: 450px;
					margin-top: 10px;
					margin-left: 10px;
					float: left;
					border: 1px solid rgba(56, 141, 120, 0.5);
					background-color: rgba(56, 141, 120, 0.2);
					.lineBox{
						width: 100%;
						height: 100%;
						position: relative;
						display: flex;
						justify-content: center;
						#line{
							width: 100%;
							height: 100%;
						}
					}
				}
				.box4{
					width: 1355px;
					height: 370px;
					margin-top: 10px;
					margin-left: 10px;
					float: left;
					border: 1px solid rgba(56, 141, 120, 0.5);
					background-color: rgba(56, 141, 120, 0.2);
					.barBox{
						width: 100%;
						height: 100%;
						position: relative;
						display: flex;
						justify-content: center;
						#bar{
							width: 100%;
							height: 100%;
						}
					}
				}
			}
		}
	}
</style>
