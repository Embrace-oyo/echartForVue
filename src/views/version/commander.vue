<template>
	<div class="brigade">
		<div class="cai">
			<router-link tag="span" to="/upLoad">导入</router-link>
			<router-link tag="span" to="/search">搜索</router-link>
			<router-link tag="span" to="/list">水平列表</router-link>
			<router-link tag="span" to="/hls">第三方接入</router-link>
		</div>
		<div class="title">
			<router-link tag="div" to="/camp" class="backButton">二营 > 二连</router-link>
			<div class="left"></div>
			<span><i></i>士兵全息大数据管理与分析系统</span>
			<div class="right"></div>
		</div>
		<div class="content">
			<div class="leftSide">
				<div class="sideOne">
					<div class="honorBox">
						<span>荣誉墙</span>
						<div class="honor">
							<p><span class="tit">荣誉室负责人：</span><span class="cot">张某某</span></p>
							<p><span class="tit">连续稳定无事故：</span><span class="cot">300天</span></p>
							<p><span class="tit">授予荣誉：</span><span class="cot">"xxxx"荣誉称号</span></p>
							<p><span class="tit">爱军精武标兵：</span><span class="cot">5人</span></p>
							<p><span class="tit">优秀指挥官：</span><span class="cot">3人</span></p>
							<p><span class="tit">一等功：</span><span class="cot">0次</span></p>
							<p><span class="tit">二等功：</span><span class="cot">2次</span></p>
							<p><span class="tit">三等功：</span><span class="cot">3次</span></p>
						</div>
					</div>
				</div>
				<div class="sideTwo">
					<div class="box1">
						<span>参加"xxx比武"，获得七个单项第一</span>
						<div id="echart1"></div>
					</div>
					<div class="box2">
						<span>获奖月份分布</span>
						<div id="echart2"></div>
					</div>
<!--					<div class="box3">
						<span>健康状态分析</span>
						<div id="echart3"></div>
					</div>
					<div class="box4">
						<span>政治思想分析</span>
						<div id="echart4"></div>
					</div>
					<div class="box5">
						<span>训练水平分析</span>
						<div id="echart5"></div>
					</div>-->
				</div>
			</div>
			<div class="centerSide">
				<div class="toogle"></div>
				<div id="maps"></div>
				<div class="infoBox">
					<i></i>
					<div class="suggest">
		                <span>
			                休假建议人数：20人
		                </span>
					</div>
					<div id="pie1">
						<div id="drawPie1"></div>
						<span></span>
					</div>
					<div id="pie2">
						<div id="drawPie2"></div>
						<span></span>
					</div>
				</div>
				<div class="menu">
					<router-link tag="li" to="/migration">士兵外出趋势</router-link>
					<router-link tag="li" to="/newIndex">旅</router-link>
					<router-link tag="li" to="/camp">营</router-link>
					<router-link tag="li" to="/commander">连</router-link>
					<router-link tag="li" to="/row">排</router-link>
				</div>
			</div>
			<div class="rightSide">
				<div class="box6">
					<span>连同期纵向分析</span>
					<div id="echart6"></div>
				</div>
				<div class="box7">
					<span>技战术水平分析</span>
					<div id="echart7"></div>
				</div>
				<div class="box8">
					<span>健康状态分析</span>
					<div id="echart8"></div>
				</div>
				<div class="box9">
					<span>政治思想分析</span>
					<div id="echart9"></div>
				</div>
				<div id="echart10">
					<p>训练水平分析</p>
					<div class="content">
						<div class="left">
							<li>
								<span>90%</span>
								<div class="line"></div>
							</li>
							<li>
								<span>95%</span>
								<div class="line"></div>
							</li>
							<li>
								<span>90%</span>
								<div class="line"></div>
							</li>
							<li>
								<span>95%</span>
								<div class="line"></div>
							</li>
							<li>
								<span>90%</span>
								<div class="line"></div>
							</li>
						</div>
						<div class="center">
							<li>列队</li>
							<li>内务</li>
							<li>擒敌</li>
							<li>战术</li>
							<li>体能</li>
						</div>
						<div class="right">
							<li>
								<div class="line"></div>
								<span>90%</span>
							</li>
							<li>
								<div class="line"></div>
								<span>95%</span>
							</li>
							<li>
								<div class="line"></div>
								<span>90%</span>
							</li>
							<li>
								<div class="line"></div>
								<span>95%</span>
							</li>
							<li>
								<div class="line"></div>
								<span>90%</span>
							</li>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import shiquJson from '@/assets/json/shiqu.json';
	export default {
		name: "commander",
		methods: {
			drawEchart1(){
				let myChart = this.$echarts.init(document.getElementById("echart1"));
				let option = {
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
						shape: 'circle',
						name: {
							textStyle: {
								color: '#81939b',
								borderRadius: 3,
								padding: [3, 5]
							}
						},
						indicator: [
							{ name: '俯卧撑', max: 100},
							{ name: '三公里跑', max: 100},
							{ name: '军事三公里跑', max: 100},
							{ name: '单杠', max: 100},
							{ name: '打靶', max: 100},
							{ name: '双杠', max: 100},
							{ name: '仰卧起坐', max: 100},
						],
						axisLine: {
							lineStyle: {
								width : 1,
								color : '#81939b',
							}
						},
						splitLine : {
							show : true,
							lineStyle : {
								width : 1,
								color : '#81939b',
								type: 'dashed'
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
							/* {
                   value : [100, 100, 100, 100, 100, 100, 100],
                   areaStyle: {
                       normal: {
                           opacity: 0.5,
                           color: new this.$echarts.graphic.RadialGradient(0.1, 0.5, 1, [
                               {
                                   color: 'rgba(0, 186, 255, 1)',
                                   offset: 0
                               },
                               {
                                   color: 'rgb(0,123,255)',
                                   offset: 1
                               }
                           ])
                       }
                   }
               },*/
							{
								value : [100, 100, 100, 100, 100, 100, 100],
								zIndex: 10,
								areaStyle: {
									normal: {
										opacity: 0.5,
										color: new this.$echarts.graphic.RadialGradient(0.1, 0.5, 1, [
											{
												color: '#2abb9b',
												offset: 0
											},
											{
												color: '#1fbbb4',
												offset: 1
											}
										])
									}
								}
							}
						]
					}]
				};
				myChart.setOption(option);
			},
			drawEchart2(){
				let myChart = this.$echarts.init(document.getElementById("echart2"));
				let option = {
					title: {
						show: false,
					},
					tooltip: {
						trigger: 'axis'
					},
					legend: {
						left: 'center',
						bottom: 'bottom'
					},
					grid: {
						top: 'middle',
						left: '10%',
						right: '10%',
						height: '60%',
						containLabel: true
					},
					xAxis: {
						type: 'category',
						data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月',],
						axisLine: {
							show: true,
							lineStyle: {
								color: "#81939b"
							}
						},
						splitLine: {
							lineStyle: {
								type: 'solid',
								color: '#81939b'
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
							show: true,
							lineStyle: {
								color: "#81939b"
							},
						},
						splitLine: {
							lineStyle: {
								type: 'dashed',
								color: '#81939b'
							}
						},
						axisTick: {
							show: false,
							alignWithLabel: true
						},
						axisLabel: {
							show: false
						},
						nameTextStyle: {
							show: false,
							color: "#999"
						},
						splitArea: {
							show: false
						}
					},
					series: [
						{
							type: 'bar',
							data: [1, 2, 3, 1, 2, 3, 4, 5, 2, 8, 1, 2],
							z: 10,
							barGap: '-100%',
							barCategoryGap: '70%',
							itemStyle: {
								normal: {
									color: new this.$echarts.graphic.LinearGradient(
											0, 0, 0, 1,
											[
												{offset: 1, color: 'rgba(8, 181, 199, 0.1)'},
												{offset: 0.5, color: 'rgba(8, 181, 199, 0.5)'},
												{offset: 0, color: 'rgba(8, 181, 199, 1)'}
											]
									)
								}
							},
						},
						{
							type: 'line',
							data: [1, 2, 3, 1, 2, 3, 4, 5, 2, 8, 1, 2],
							z: 11,
							barGap: '-100%',
							barCategoryGap: '70%',
							lineStyle: {
								type: 'dashed'
							},
							itemStyle: {
								color: "rgb(152, 86, 23)",
							},
						},
						{
							type: 'bar',
							data: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
							barGap: '-100%',
							z: 5,
							barCategoryGap: '70%',
							itemStyle: {
								color: "gray",
								opacity: 0.3,
							},
						},
					]
				};
				myChart.setOption(option);
			},
			drawEchart3(){
				let myChart = this.$echarts.init(document.getElementById("echart3"));
				let option = {
					title: {
						show: false,
					},
					grid: {
						top: 'middle',
						left: '10%',
						right: '10%',
						height: '60%',
						containLabel: true
					},
					tooltip : {
						show: true,
						trigger: 'axis'
					},
					calculable : true,
					xAxis : [
						{
							type : 'category',
							data : ['心跳','心率','血压','睡眠','运动量'],
							axisLine: {
								lineStyle: {
									color: '#81939b'
								}
							},
							axisTick: {
								show: false,
								alignWithLabel: true,
							},
							axisLabel: {
								interval: 0,
								color: '#81939b'
							},
						}
					],
					yAxis: {
						type: 'value',
						axisLine: {
							show: false,
							lineStyle: {
								color: "#81939b"
							},
						},
						splitLine: {
							show: false,
							lineStyle: {
								type: 'solid',
								color: '#81939b'
							}
						},
						axisTick: {
							show: false,
							alignWithLabel: true
						},
						axisLabel: {
							show: false
						},
						nameTextStyle: {
							show: false,
							color: "#999"
						},
						splitArea: {
							show: false
						}
					},
					series : [
						{
							type:'bar',
							barCategoryGap: '30%',
							data:[156, 160, 170, 120, 160],
							color: 'rgb(4, 220, 255)',
							barGap: '20%',
						},
						{
							type:'bar',
							barCategoryGap: '30%',
							data:[198, 120, 99, 187, 144],
							color: '#2abb9b',
							barGap: '20%',
						}
					]
				};
				myChart.setOption(option);
				let data0 = option.series[0].data;
				let data1 = option.series[1].data;
				let axisData = ['心跳','心率','血压','睡眠','运动量']
				let num = 0;
				setInterval(() => {
					data0.shift();
					data0.push(Math.round(Math.random() * 200));
					data1.shift();
					data1.push(Math.round(Math.random() * 200));
					option.xAxis[0].data.shift();
					option.xAxis[0].data.push(axisData[num]);
					num++;
					if(num > 4) num = 0;
					myChart.setOption(option);
				}, 2500)
			},
			drawEchart4(){
				let myChart = this.$echarts.init(document.getElementById("echart4"));
				let option = {
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
						name: {
							textStyle: {
								color: '#81939b',
								borderRadius: 3,
								padding: [3, 5]
							}
						},
						indicator: [
							{ name: '责任', max: 100},
							{ name: '文化', max: 100},
							{ name: '学问', max: 100},
						],
						axisLine: {
							lineStyle: {
								width : 1,
								color : '#81939b'
							}
						},
						splitLine : {
							show : true,
							lineStyle : {
								width : 1,
								color : '#81939b'
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
						name: '政治思想分析',
						type: 'radar',
						color: ['#9cf3fd', '#10d3e9'],
						lineStyle: {
							width: 1
						},
						symbol:'none',
						data : [
							{
								areaStyle: {
									normal: {
										opacity: 0.5,
									}
								},
								value : [100, 80, 60],
							},
							{
								areaStyle: {
									normal: {
										opacity: 0.5,
									}
								},
								value : [80, 70, 95],
							},
						]
					}]
				};
				myChart.setOption(option);
				let data0 = option.series[0].data[0].value;
				let data1 = option.series[0].data[1].value;
				setInterval(() => {
					let arr0 = [];
					let arr1 = [];
					for(let i = 0; i < data0.length; i++){
						arr0.push(Math.round(Math.random() * 100))
					}
					for(let i = 0; i < data1.length; i++){
						arr1.push(Math.round(Math.random() * 100))
					}
					option.series[0].data[0].value = arr0;
					option.series[0].data[1].value = arr1;
					myChart.setOption(option);
				}, 3500)
			},
			drawEchart5(){
				let myChart = this.$echarts.init(document.getElementById("echart5"));
				let option = option = {
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
							data: ['队列', '内务', '擒敌', '战术', '体能'],
							axisLine: {
								lineStyle: {
									color: '#81939b'
								}
							},
							axisTick: {
								show: false,
								alignWithLabel: true,
							},
							axisLabel: {
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
								show: false,
								lineStyle: {
									color: '#81939b'
								}
							},
							axisLabel: {
								interval: 0,
								color: '#81939b'
							},
							splitLine: {
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
								interval: 0,
								color: '#81939b'
							},
							splitLine: {
								lineStyle: {
									type: 'solid',
									color: '#81939b'
								}
							},
						}
					],
					color: ['rgb(4, 220, 255)','#2abb9b'],
					series: [
						{
							yAxisIndex: 0,
							data: [88, 79, 70, 90, 85],
							type: 'line',
							areaStyle: {
								color: 'rgb(4, 220, 255)',
								opacity: 0.5
							},
							markLine : {
								data : [
									{type : 'average', name: '平均值'}
								]
							}
						},
						{
							yAxisIndex: 1,
							data: [95, 80, 78, 97, 89],
							type: 'line',
							areaStyle: {
								color: '#2abb9b',
								opacity: 0.5
							},
							markLine : {
								data : [
									{type : 'average', name: '平均值'}
								]
							}
						}
					]
				};
				myChart.setOption(option);
				let data0 = option.series[0].data;
				let data1 = option.series[1].data;
				let axisData = ['队列', '内务', '擒敌', '战术', '体能']
				let num = 0;
				setInterval(() => {
					data0.shift();
					data0.push(Math.round(Math.random() * 100));
					data1.shift();
					data1.push(Math.round(Math.random() * 100));
					option.xAxis[0].data.shift();
					option.xAxis[0].data.push(axisData[num]);
					num++;
					if(num > 4) num = 0;
					myChart.setOption(option);
				}, 2500)
			},
			drawEchart6(){
				let myChart = this.$echarts.init(document.getElementById("echart6"));
				let option = {
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
						name: {
							textStyle: {
								color: '#81939b',
								borderRadius: 3,
								padding: [3, 5]
							}
						},
						indicator: [
							{ name: '技战术', max: 100},
							{ name: '健康状态', max: 100},
							{ name: '政治思想', max: 100},
							{ name: '文化素养', max: 100},
							{ name: '试炼水平', max: 100},
						],
						axisLine: {
							lineStyle: {
								width : 1,
								color : '#81939b'
							}
						},
						splitLine : {
							show : true,
							lineStyle : {
								width : 1,
								color : '#81939b',
								type: 'dashed'
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
						name: '旅同期纵向分析',
						type: 'radar',
						color: ['rgb(0, 186, 255)', '#2abb9b'],
						lineStyle: {
							width: 1
						},
						symbol:'none',
						data : [
							{
								value : [55, 22, 33, 26, 78],
							},
							{
								value : [97, 49, 77, 49, 88],
							}
						]
					}]
				};
				myChart.setOption(option);
				let data0 = option.series[0].data[0].value;
				let data1 = option.series[0].data[1].value;
				setInterval(() => {
					let arr0 = [];
					let arr1 = [];
					for(let i = 0; i < data0.length; i++){
						arr0.push(Math.round(Math.random() * 100))
					}
					for(let i = 0; i < data1.length; i++){
						arr1.push(Math.round(Math.random() * 100))
					}
					option.series[0].data[0].value = arr0;
					option.series[0].data[1].value = arr1;
					myChart.setOption(option);
				}, 3000)
			},
			drawEchart7(){
				let myChart = this.$echarts.init(document.getElementById("echart7"));
				let option = {
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
							data: ['体能', '射击', '障碍', '技术', '通讯'],
							axisLine: {
								lineStyle: {
									color: '#81939b'
								}
							},
							axisTick: {
								show: false,
								alignWithLabel: true,
							},
							axisLabel: {
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
								show: false,
								interval: 0,
								color: '#808181'
							},
							splitLine: {
								lineStyle: {
									type: 'solid',
									color: '#81939b'
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
									color: '#81939b'
								}
							},
							axisLabel: {
								show: false,
								interval: 0,
								color: '#81939b'
							},
							splitLine: {
								lineStyle: {
									type: 'solid',
									color: '#81939b'
								}
							},
						}
					],
					color: ['#2abb9b','rgb(152, 86, 23)'],
					series: [
						{
							yAxisIndex: 0,
							data: [52, 50, 40, 78, 61],
							type: 'line',
						},
						{
							yAxisIndex: 1,
							data: [67, 32, 44, 38, 89],
							type: 'line',
						}
					]
				};
				myChart.setOption(option);
				let data0 = option.series[0].data;
				let data1 = option.series[1].data;
				let axisData = ['队列', '内务', '擒敌', '战术', '体能']
				let num = 0;
				setInterval(() => {
					data0.shift();
					data0.push(Math.round(Math.random() * 100));
					data1.shift();
					data1.push(Math.round(Math.random() * 100));
					option.xAxis[0].data.shift();
					option.xAxis[0].data.push(axisData[num]);
					num++;
					if(num > 4) num = 0;
					myChart.setOption(option);
				}, 2000)
			},
			drawEchart8(){
				let myChart = this.$echarts.init(document.getElementById("echart8"));
				let option = {
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
							data: ['心跳', '心率', '血压', '睡眠', '运动量'],
							axisLine: {
								lineStyle: {
									color: '#81939b'
								}
							},
							axisTick: {
								show: false,
								alignWithLabel: true,
							},
							axisLabel: {
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
								show: false,
								lineStyle: {
									color: '#81939b'
								}
							},
							axisLabel: {
								show: false,
								interval: 0,
								color: '#81939b'
							},
							splitLine: {
								show: false,
								lineStyle: {
									type: 'solid',
									color: '#81939b'
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
									color: '#81939b'
								}
							},
							axisLabel: {
								show: false,
								interval: 0,
								color: '#81939b'
							},
							splitLine: {
								show: false,
								lineStyle: {
									type: 'solid',
									color: '#81939b'
								}
							},
						}
					],
					color: ['#04dcff','#2abb9b'],
					series: [
						{
							yAxisIndex: 0,
							data: [80, 55, 70, 80, 60],
							type: 'line',
							areaStyle: {
								color: '#04dcff',
								opacity: 0.3
							},
						},
						{
							yAxisIndex: 1,
							data: [50, 68, 77, 88, 96],
							type: 'line',
							areaStyle: {
								color: '#2abb9b',
								opacity: 0.3
							},
						}
					]
				};
				myChart.setOption(option);
				let data0 = option.series[0].data;
				let data1 = option.series[1].data;
				let axisData = ['队列', '内务', '擒敌', '战术', '体能']
				let num = 0;
				setInterval(() => {
					data0.shift();
					data0.push(Math.round(Math.random() * 100));
					data1.shift();
					data1.push(Math.round(Math.random() * 100));
					option.xAxis[0].data.shift();
					option.xAxis[0].data.push(axisData[num]);
					num++;
					if(num > 4) num = 0;
					myChart.setOption(option);
				}, 2000)
			},
			drawEchart9(){
				let myChart = this.$echarts.init(document.getElementById("echart9"));
				let option = {
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
						data: ['责任', '文化', '学问'],
						axisLine: {
							lineStyle: {
								color: 'white'
							}
						},
						axisLabel: {
							// interval: 0,
							// rotate: 40,
							textStyle: {
								fontFamily: 'Microsoft YaHei'
							}
						},
					},
					yAxis: {
						type: 'value',
						max: '100',
						axisLine: {
							show: false,
							lineStyle: {
								color: 'white'
							}
						},
						splitLine: {
							show: true,
							lineStyle: {
								color: 'rgba(255,255,255,0.3)'
							}
						},
						axisLabel: {}
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
								barBorderRadius: 12,
							},
						},
						data: [57, 80, 77]
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
									barBorderRadius: 11,
								}

							},
							data: [85, 75, 64]
						},
					]
				};
				myChart.setOption(option);
				let data0 = option.series[0].data;
				let data1 = option.series[1].data;
				let axisData = ['责任', '文化', '学问'];
				let num = 0;
				setInterval(() => {
					data0.shift();
					data0.push(Math.round(Math.random() * 100));
					data1.shift();
					data1.push(Math.round(Math.random() * 100));
					option.xAxis.data.shift();
					option.xAxis.data.push(axisData[num]);
					num++;
					if(num > 2) num = 0;
					myChart.setOption(option);
				}, 2000)
			},
			drawPie1(){
				let myChart = this.$echarts.init(document.getElementById("drawPie1"));
				let option = {
					title : {
						text: '总人数：150',
						textStyle:{
							color: '#00a0e9',
							fontSize: 16
						},
						x:'center',
						bottom: 0
					},
					tooltip : {
						trigger: 'item',
						formatter: "{a} <br/>{b} : {d}%"
					},
					visualMap: {
						show: false,
						min: 80,
						max: 600,
						inRange: {
							colorLightness: [0, 1]
						}
					},
					series : [
						{
							name:'人员数据',
							type:'pie',
							radius : '55%',
							center: ['50%', '50%'],
							data:[
								{value: 335, name:'在位人数'},
								{value: 310, name:'病号人数'},
								{value: 274, name:'不在位人数'},
								{value: 235, name:'士官人数'},
								{value: 400, name:'集训人数'},
								{value: 269, name:'技术军官人数'},
								{value: 300, name:'初级士官人数'},
							].sort(function (a, b) { return a.value - b.value; }),
							roseType: 'radius',
							color:['#00a0e9', '#f39800', '#ff455b', '#62ff85'],
							label: {
								fontSize: 14,
								formatter: '{b}\n{d}%',
								rich: {
									a: {
										color: "#fff",
										fontSize: 14,
										lineHeight: 30
									},
								}
							},
							itemStyle: {
								emphasis: {
									shadowBlur: 10,
									shadowOffsetX: 0,
									shadowColor: 'rgba(0, 0, 0, 0.5)',
								}
							},
							animationType: 'scale',
							animationEasing: 'elasticOut',
							animationDelay: function (idx) {
								return Math.random() * 200;
							}
						}
					]
				};
				myChart.setOption(option);
			},
			drawPie2(){
				let myChart = this.$echarts.init(document.getElementById("drawPie2"));
				let option = {
					title : {
						text: '休假情况',
						textStyle:{
							color: '#00a0e9',
							fontSize: 16
						},
						x:'center',
						bottom: 0
					},
					tooltip : {
						trigger: 'item',
						formatter: "{b} : {c} ({d}%)"
					},
					series: [
						{
							name:'人数',
							type:'pie',
							radius : '55%',
							center: ['50%', '50%'],
							avoidLabelOverlap: false,
							color:['#00a0e9', '#f39800', '#ff455b', '#62ff85'],
							label: {
								fontSize: 14,
								formatter: '{b}\n{d}%',
								rich: {
									a: {
										color: "#fff",
										fontSize: 14,
										lineHeight: 30
									},
								}
							},
							itemStyle: {
								emphasis: {
									shadowBlur: 10,
									shadowOffsetX: 0,
									shadowColor: 'rgba(0, 0, 0, 0.5)',
								}
							},
							data:[
								{value: 87, name:'在位士兵'},
								{value: 55, name:'在位士官'},
								{value: 20, name:'病假人数'},
								{value: 32, name:'事假人数'},
							]
						}
					]
				};
				myChart.setOption(option);
			},
			drawMap(){
				this.$echarts.registerMap('石渠', shiquJson);
				let myChart = this.$echarts.init(document.getElementById('maps'));
				let geoCoordMap = {
					'二连': [98.024965,33.752014],
					'一排': [97.726009,33.26653],
					'二排': [97.65242,33.613585],
					'三排': [98.190541,33.285848],
				};
				let CDCData = [
					[{
						name: '二连'
					}, {
						name: '二连',
						value: 200
					}],
					[{
						name: '二连'
					}, {
						name: '一排',
						value: 100
					}],
					[{
						name: '二连'
					}, {
						name: '二排',
						value: 100
					}],
					[{
						name: '二连'
					}, {
						name: '三排',
						value: 100
					}],
				];
				let planePath = 'path://M.6,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705';
				let convertData = function(data) {
					var res = [];
					for (var i = 0; i < data.length; i++) {
						var dataItem = data[i];
						var fromCoord = geoCoordMap[dataItem[0].name];
						var toCoord = geoCoordMap[dataItem[1].name];
						if (fromCoord && toCoord) {
							res.push([{
								coord: fromCoord
							}, {
								coord: toCoord
							}]);
						}
					}
					return res;
				};
				let color = ['#3ed4ff'];
				let series = [];
				[['二连', CDCData]].forEach(function(item, i) {
					series.push(
							{
								name: item[0],
								type: 'lines',
								zlevel: 1,
								effect: {
									show: true,
									period: 6,
									trailLength: 0.7,
									color: '#fff',
									symbolSize: 3
								},
								lineStyle: {
									normal: {
										color: color[i],
										width: 0,
										curveness: 0.2
									}
								},
								data: convertData(item[1])
							},
							{
								name: item[0],
								type: 'lines',
								zlevel: 2,
								effect: {
									show: true,
									period: 6,
									trailLength: 0,
									symbol: planePath,
									symbolSize: 15
								},
								lineStyle: {
									normal: {
										color: color[i],
										width: 1,
										opacity: 0.4,
										curveness: 0.2
									}
								},
								data: convertData(item[1])},
							{
								name: item[0],
								type: 'effectScatter',
								coordinateSystem: 'geo',
								zlevel: 2,
								rippleEffect: {
									brushType: 'stroke'
								},
								label: {
									normal: {
										show: true,
										position: 'right',
										formatter: '{b}'
									}
								},
								symbolSize: function(val) {
									return val[2] / 8;
								},
								itemStyle: {
									normal: {
										color: color[i]
									}
								},
								data: item[1].map(function(dataItem) {
									return {
										name: dataItem[1].name,
										value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
									};
								})
							}
					);
				});
				let option = {
					tooltip: {
						trigger: 'item'
					},
					legend: {
						orient: 'vertical',
						top: 'bottom',
						left: 'right',
						data: ['北京 Top10', '上海 Top10', '广州 Top10'],
						textStyle: {
							color: '#fff'
						},
						selectedMode: 'single'
					},
					geo: {
						zoom: 1.3,
						map: '石渠',
						label: {
							emphasis: {
								show: false
							}
						},
						roam: true,
						itemStyle: {
							normal: {
								areaColor: '#132937',
								borderColor: '#0692a4'
							},
							emphasis: {
								areaColor: '#0b1c2d'
							}
						}
					},
					series: series
				};
				myChart.setOption(option);
			},
		},
		mounted() {
			this.drawEchart1();
			this.drawEchart2();
			/*this.drawEchart3();
			this.drawEchart4();
			this.drawEchart5();*/
			this.drawEchart6()
			this.drawEchart7()
			this.drawEchart8()
			this.drawEchart9()
			this.drawPie1();
			this.drawPie2();
			this.drawMap();
		}
	}
</script>

<style scoped lang="less">
	@import "~@/assets/css/newLess.less";
</style>
