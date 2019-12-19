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
					<router-link tag="span" to="/row">返回</router-link>
					<router-link tag="span" to="/gis">活动轨迹gis</router-link>
					<router-link tag="span" to="/analysis">统计分析</router-link>
					<router-link tag="span" to="/rank">训练排名</router-link>
					<router-link tag="span" to="/physical">体能分析</router-link>
				</div>
			</div>
			<div class="contentBox">
				<div class="box1">
					<div class="pieBox">
						<h3>个人详情</h3>
						<div id="pie">
							<div class="img">
								<img src="http://photocdn.sohu.com/20120514/Img343136320.jpg" alt="">
							</div>
							<div class="info">
								<span>姓名：沈某</span>
								<span>电话：18988989989</span>
								<span>年龄：25</span>
								<span>政治面貌：党员</span>
								<span>籍贯：四川成都</span>
								<span>学历：大专</span>
								<span>兵种：炮兵</span>
								<span>特长：搏斗</span>
							</div>
						</div>
					</div>
					<div class="raderBox">
						<h3>定位信息</h3>
						<div id="rader"></div>
					</div>
				</div>
				<div class="box2">
					<div class="scatterBox">
						<h3>活动轨迹统计</h3>
						<div id="scatter"></div>
						<router-link tag="span" to="/gis" class="gis">(活动轨迹GIS)</router-link>
					</div>
				
				</div>
				<div class="box3">
					<div class="lineBox">
						<h3>个人训练成绩平均分</h3>
						<div id="line"></div>
						<div class="pc">
							<span>评测: <span class="dot">优</span>
								<router-link tag="span" to="/analysis" class="link">&nbsp;&nbsp;&nbsp;(统计分析)&nbsp;&nbsp;&nbsp;</router-link>
								<router-link tag="span" to="/rank" class="link">(训练排名)</router-link>
							</span>
							<p>强化训练建议: 建议增减体能训练</p>
						</div>
					</div>
				</div>
				<div class="box4">
					<div class="barBox">
						<h3>休假情况</h3>
						<div id="bar"></div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	
		import sthMap from '@/assets/json/sth.json'
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
						goMap() {
								let valueMap = [{
												'当前位置': [-615.9725750135193,
														30.662518754219317]
										}, [
												{name: '当前位置', value: 100}
										]]
								this.$echarts.registerMap('xx', JSON.stringify(sthMap));
								let myChart = this.$echarts.init(document.getElementById("rader")); //这里是为了获得容器所在位置
								let geoCoordMap = valueMap[0];
								let data = valueMap[1];
								let convertData = function (data) {
										let res = [];
										for (let i = 0; i < data.length; i++) {
												let geoCoord = geoCoordMap[data[i].name];
												if (geoCoord) {
														res.push({
																name: data[i].name,
																value: geoCoord.concat(data[i].value)
														});
												}
										}
										return res;
								};
								let option = {
										tooltip: {
												trigger: 'item',
										},
										grid: {
												top: 'middle',
												left: '10%',
												right: '10%',
												height: '60%',
												containLabel: true
										},
										legend: {
												orient: 'vertical',
												y: 'bottom',
												x: 'right',
												data: ['pm2.5'],
												textStyle: {
														color: '#fff'
												}
										},
										visualMap: {
												show: false,
												min: 0,
												max: 500,
												left: 'left',
												top: 'bottom',
												text: ['高', '低'], // 文本，默认为数值文本
												calculable: true,
												seriesIndex: [1],
										},
										geo: {
												show: true,
												map: 'xx',
												label: {
														normal: {
																show: false
														},
														emphasis: {
																show: false,
														}
												},
												roam: true,
												itemStyle: {
														normal: {
																areaColor: 'transparent',
																borderColor: '#067d09',
																borderWidth: 2,
																shadowColor: 'rgba(63, 218, 255, 0.5)',
																shadowBlur: 30
														},
														emphasis: {
																areaColor: '#2B91B7',
														}
												}
										},
										series: [
												{
														name: 'light',
														type: 'scatter',
														coordinateSystem: 'geo',
														data: convertData(data),
														symbolSize: function (val) {
																return val[2] / 10;
														},
														label: {
																normal: {
																		formatter: '{b}',
																		position: 'right',
																		show: true
																},
																emphasis: {
																		show: true
																}
														},
														itemStyle: {
																normal: {
																		color: '#F4E925'
																}
														}
												},
												{
														type: 'map',
														map: 'jiangxi',
														geoIndex: 0,
														aspectScale: 0.75, //长宽比
														showLegendSymbol: false, // 存在legend时显示
														label: {
																normal: {
																		show: false
																},
																emphasis: {
																		show: false,
																		textStyle: {
																				color: '#fff'
																		}
																}
														},
														roam: true,
														itemStyle: {
																normal: {
																		areaColor: '#031525',
																		borderColor: '#FFFFFF',
																},
																emphasis: {
																		areaColor: '#2B91B7'
																}
														},
														animation: false,
														data: data
												},
												{
														name: 'Top 5',
														type: 'effectScatter',
														coordinateSystem: 'geo',
														data: convertData(data.sort(function (a, b) {
																return b.value - a.value;
														}).slice(0, 3)),
														symbolSize: function (val) {
																return val[2] / 10;
														},
														showEffectOn: 'render',
														rippleEffect: {
																brushType: 'stroke'
														},
														hoverAnimation: true,
														label: {
																normal: {
																		formatter: '{b}',
																		position: 'right',
																		show: true
																}
														},
														itemStyle: {
																normal: {
																		// color: '#F4E925',
																		color: '#F4E925',
																		shadowBlur: 10,
																		shadowColor: '#05C3F9'
																}
														},
														zlevel: 1
												},
										
										]
										
										
								};
								myChart.setOption(option);
						}
				},
				mounted() {
						//this.pie = this.$echarts.init(document.getElementById("pie"));
						//this.rader = this.$echarts.init(document.getElementById("rader"));
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
						//this.pie.setOption(this.optionPie);
						//this.rader.setOption(this.optionRader);
						this.scatter.setOption(this.optionScatter);
						this.line.setOption(this.optionLine);
						this.bar.setOption(this.optionBar);
						this.goMap();
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
				margin: 10px 0;
				.goBack{
					justify-items: flex-start;
					flex: 1;
					color: #81939b;
					font-size: 20px;
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
							display: flex;
							justify-content: space-around;
							align-items: center;
							.img{
								width: 200px;
								height: 300px;
								img{
									height: 100%;
									width: 100%;
								}
							}
							.info{
								width: 180px;
								font-size: 14px;
								display: flex;
								flex-direction: column;
								span{
									padding: 5px  0;
									color: #81939b;
								}
							}
						}
					}
					.raderBox{
						width: 100%;
						height: 410px;
						display: flex;
						justify-content: center;
						position: relative;
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
						position: relative;
						#scatter{
							width: 100%;
							height: 100%;
						}
						.gis{
							position: absolute;
							bottom: 5px;
							width: 100%;
							text-align: center;
							color: #81939b;
							font-size: 14px;
							cursor: pointer;
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
						.pc{
							position: absolute;
							bottom: 5px;
							font-size: 14px;
							color: #81939b;
							text-align: center;
							width: 100%;
							.dot{
								color: red;
							}
							.link{
								cursor: pointer;
							}
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
