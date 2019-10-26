<template>
	<div class="brigade">
		<div class="title">
			<div class="left"></div>
			<span><i></i>士兵全息大数据管理与分析系统</span>
			<div class="right"></div>
		</div>
		<div class="content">
			<div class="leftSide">
				<div id="echart5"></div>
				<div id="echart1"></div>
				<div id="echart2"></div>
				<div id="echart3"></div>
				<div id="echart4"></div>
			</div>
			<div class="centerSide">
				<div id="pie1">
					<div id="drawPie1"></div>
					<span></span>
				</div>
				<div id="pie2">
					<div id="drawPie2"></div>
					<span></span>
				</div>
				<div id="maps"></div>
				<div class="infoBox">
					<i></i>
					<p>xxx训练、演习等等正在进行</p>
					<p style="color: #ff4040">军营所在地出现传染病</p>
				</div>
				<div class="menu">
					<router-link tag="li" to="/brigade">旅</router-link>
					<router-link tag="li" to="/group">团</router-link>
					<router-link tag="li" to="/camp">营</router-link>
					<router-link tag="li" to="/commander">连</router-link>
					<router-link tag="li" to="/row">排</router-link>
				</div>
			</div>
			<div class="rightSide">
				<div id="echart9"></div>
				<div id="echart6"></div>
				<div id="echart7"></div>
				<div id="echart8"></div>
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
	import 'echarts/map/js/china.js';
	export default {
		name: "group",
		methods: {
			drawEchart1(){
				let myChart = this.$echarts.init(document.getElementById("echart1"));
				let option = {
					title: {
						text: '全军横向分析',
						left: 'center',
						textStyle: {
							color: '#fff',
							fontSize: (18 / Number(document.getElementsByTagName('html')[0].style['fontSize'].replace('px', ''))) * Number(document.getElementsByTagName('html')[0].style['fontSize'].replace('px', ''))
						}
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
								color: '#fff',
								//backgroundColor: '#999',
								borderRadius: 3,
								padding: [3, 5]
							}
						},
						indicator: [
							{ name: '技战术', max: 10000},
							{ name: '健康状态', max: 10000},
							{ name: '政治思想', max: 10000},
							{ name: '文化素养', max: 10000},
							{ name: '试炼水平', max: 10000},
						],
						axisLine: {
							lineStyle: {
								width : 2,
								color : ['#ff9f00']
							}
						},
						splitLine : {
							show : true,
							lineStyle : {
								width : 2,
								color : ['#ff9f00']
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
						name: '数据',
						type: 'radar',
						color: ['#0350ec', '#10d7ed'],
						lineStyle: {
							width: 4
						},
						symbol:'none',
						data : [
							{
								value : [4300, 1000, 8000, 3500, 5000],
							},
							{
								value : [6000, 3400, 7000, 6100, 2200],
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
						arr0.push(Math.round(Math.random() * 10000))
					}
					for(let i = 0; i < data1.length; i++){
						arr1.push(Math.round(Math.random() * 10000))
					}
					option.series[0].data[0].value = arr0;
					option.series[0].data[1].value = arr1;
					myChart.setOption(option);
				}, 3000)
			},
			drawEchart2(){
				let myChart = this.$echarts.init(document.getElementById("echart2"));
				let option = {
					title: {
						text: '技战术水平分析',
						left: 'center',
						textStyle: {
							color: '#fff'
						}
					},
					tooltip: {
						trigger: 'axis'
					},
					legend: {
						color: ["#ff6600", "#44f0ff"],
						data: ['新报', '流失', '续费'],
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
						data: ['体能', '设计', '障碍', '技术', '通讯'],
						axisLine: {
							show: true,
							lineStyle: {
								color: "#a2d4e6"
							}
						},
						splitLine: {
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
							show: true,
							lineStyle: {
								color: "#a2d4e6"
							},
						},
						splitLine: {
							lineStyle: {
								type: 'solid',
								color: '#070a0c'
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
							type: 'line',
							data: [400, 600, 220, 680, 660, 289],
/*							areaStyle: {
								color: '#ff6600',
								opacity: 0.5
							},*/
							lineStyle: {
								normal: {
									width: 5,
									color: {
										type: 'linear',
										colorStops: [{
											offset: 0,
											color: '#ff6600' // 0% 处的颜色
										}, {
											offset: 0.4,
											color: '#ff6600' // 100% 处的颜色
										}, {
											offset: 1,
											color: '#ff6600' // 100% 处的颜色
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
									borderColor: "#F58080"
								}
							},
							smooth: true,
							symbol:'none',
						},
						{
							type: 'line',
							data: [250, 450, 330, 765, 123, 450],
							areaStyle: {
								color: '#44f0ff',
								opacity: 0.5
							},
							lineStyle: {
								normal: {
									width: 5,
									color: {
										type: 'linear',
										colorStops: [{
											offset: 0,
											color: '#44f0ff' // 0% 处的颜色
										},
											{
												offset: 0.4,
												color: '#44f0ff' // 100% 处的颜色
											}, {
												offset: 1,
												color: '#44f0ff' // 100% 处的颜色
											}
										],
										globalCoord: false // 缺省为 false
									},
									shadowColor: 'rgba(71,216,190, 0.5)',
									shadowBlur: 10,
									shadowOffsetY: 7
								}
							},
							itemStyle: {
								normal: {
									color: '#AAF487',
									borderWidth: 10,
									/*shadowColor: 'rgba(72,216,191, 0.3)',
									 shadowBlur: 100,*/
									borderColor: "#AAF487"
								}
							},
							smooth: true,
							symbol:'none',
						},
					]
				};
				myChart.setOption(option);
				let data0 = option.series[0].data;
				let data1 = option.series[1].data;
				let axisData = ['体能', '设计', '障碍', '技术', '通讯']
				let num = 0;
				setInterval(() => {
					data0.shift();
					data0.push(Math.round(Math.random() * 1000));
					data1.shift();
					data1.push(Math.round(Math.random() * 1000));
					option.xAxis.data.shift();
					option.xAxis.data.push(axisData[num]);
					num++;
					if(num > 4) num = 0;
					myChart.setOption(option);
				}, 2000)
			},
			drawEchart3(){
				let myChart = this.$echarts.init(document.getElementById("echart3"));
				let option = {
					title: {
						text: '健康状态分析',
						left: 'center',
						textStyle: {
							color: '#fff'
						}
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
									color: '#212222'
								}
							},
							axisTick: {
								show: false,
								alignWithLabel: true,
							},
							axisLabel: {
								interval: 0,
								color: '#00a0e9'
							},
						}
					],
					yAxis: {
						type: 'value',
						axisLine: {
							show: true,
							lineStyle: {
								color: "#212222"
							},
						},
						splitLine: {
							lineStyle: {
								type: 'solid',
								color: '#212222'
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
							//name:'蒸发量',
							type:'bar',
							barWidth: '10%',
							data:[156, 160, 170, 120, 160],
							barGap: 0,
							itemStyle: {
								normal: {
									color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
										offset: 0,
										color: '#01b2ff'
									}, {
										offset: 1,
										color: '#0338ff'
									}]),
									barBorderRadius: 12,
								},
							},
						},
						{
							type:'bar',
							barWidth: '10%',
							data:[198, 120, 99, 187, 144],
							barGap: 0,
							itemStyle: {
								normal: {
									color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
										offset: 0,
										color: '#32fd99'
									}, {
										offset: 1,
										color: '#01928f'
									}]),
									barBorderRadius: 5,
								},
							},
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
						text: '政治思想分析',
						left: 'center',
						textStyle: {
							color: '#fff'
						}
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
								color: '#fff',
								borderRadius: 3,
								padding: [3, 5]
							}
						},
						indicator: [
							{ name: '责任', max: 10000},
							{ name: '文化', max: 10000},
							{ name: '学问', max: 10000},
						],
						axisLine: {
							lineStyle: {
								width : 2,
								color : ['#00beff']
							}
						},
						splitLine : {
							show : true,
							lineStyle : {
								width : 2,
								color : ['#00beff']
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
						name: '数据',
						type: 'radar',
						color: ['#f39a00', '#00f20b'],
						lineStyle: {
							width: 2
						},
						symbol:'none',
						data : [
							{
								areaStyle: {
									normal: {
										opacity: 0.5,
									}
								},
								value : [2000, 5000, 3000],
							},
							{
								areaStyle: {
									normal: {
										opacity: 0.5,
									}
								},
								value : [4300, 8000, 6000],
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
						arr0.push(Math.round(Math.random() * 10000))
					}
					for(let i = 0; i < data1.length; i++){
						arr1.push(Math.round(Math.random() * 10000))
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
						text: '训练水平分析',
						left: 'center',
						textStyle: {
							color: '#fff'
						}
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
									color: '#212222'
								}
							},
							axisTick: {
								show: false,
								alignWithLabel: true,
							},
							axisLabel: {
								interval: 0,
								color: '#00a0e9'
							},
						},
					],
					yAxis: [
						{
							min: 0,
							max: 1200,
							type: 'value',
							axisLine: {
								show: false,
								lineStyle: {
									color: '#212222'
								}
							},
							axisLabel: {
								interval: 0,
								color: '#808181'
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
							max: 1200,
							type: 'value',
							axisLine: {
								show: false,
								lineStyle: {
									color: '#212222'
								}
							},
							axisLabel: {
								interval: 0,
								color: '#996921'
							},
							splitLine: {
								lineStyle: {
									type: 'solid',
									color: '#333434'
								}
							},
						}
					],
					color: ['#00a0e9','#f39800'],
					series: [
						{
							yAxisIndex: 0,
							data: [820, 932, 100, 934, 200],
							type: 'line',
							areaStyle: {
								color: '#00a0e9',
								opacity: 0.5
							},
						},
						{
							yAxisIndex: 1,
							data: [123, 321, 445, 667, 1002],
							type: 'line',
							areaStyle: {
								color: '#f39800',
								opacity: 0.5
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
					data0.push(Math.round(Math.random() * 1200));
					data1.shift();
					data1.push(Math.round(Math.random() * 1200));
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
						text: '旅同期纵向分析',
						left: 'center',
						textStyle: {
							color: '#fff',
							fontSize: (18 / Number(document.getElementsByTagName('html')[0].style['fontSize'].replace('px', ''))) * Number(document.getElementsByTagName('html')[0].style['fontSize'].replace('px', ''))
						}
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
								color: '#fff',
								//backgroundColor: '#999',
								borderRadius: 3,
								padding: [3, 5]
							}
						},
						indicator: [
							{ name: '技战术', max: 10000},
							{ name: '健康状态', max: 10000},
							{ name: '政治思想', max: 10000},
							{ name: '文化素养', max: 10000},
							{ name: '试炼水平', max: 10000},
						],
						axisLine: {
							lineStyle: {
								width : 1,
								color : ['#10d3e9']
							}
						},
						splitLine : {
							show : true,
							lineStyle : {
								width : 1,
								color : ['#10d3e9']
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
						name: '数据',
						type: 'radar',
						color: ['#ff9f00', '#00e223'],
						lineStyle: {
							width: 1
						},
						symbol:'none',
						data : [
							{
								value : [5500, 2200, 3300, 2600, 7800],
							},
							{
								value : [8700, 4900, 7700, 4900, 8800],
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
						arr0.push(Math.round(Math.random() * 10000))
					}
					for(let i = 0; i < data1.length; i++){
						arr1.push(Math.round(Math.random() * 10000))
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
						text: '技战术水平分析',
						left: 'center',
						textStyle: {
							color: '#fff'
						}
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
							data: ['体能', '设计', '障碍', '技术', '通讯'],
							axisLine: {
								lineStyle: {
									color: '#212222'
								}
							},
							axisTick: {
								show: false,
								alignWithLabel: true,
							},
							axisLabel: {
								interval: 0,
								color: '#00a0e9'
							},
						},
					],
					yAxis: [
						{
							min: 0,
							max: 1200,
							type: 'value',
							axisLine: {
								show: true,
								lineStyle: {
									color: '#212222'
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
									color: '#333434'
								}
							},
						},
						{
							min: 0,
							max: 1200,
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
								color: '#996921'
							},
							splitLine: {
								lineStyle: {
									type: 'solid',
									color: '#333434'
								}
							},
						}
					],
					color: ['#3dc29c','#edc551'],
					series: [
						{
							yAxisIndex: 0,
							data: [520, 500, 400, 780, 610],
							type: 'line',
						},
						{
							yAxisIndex: 1,
							data: [670, 321, 445, 380, 890],
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
					data0.push(Math.round(Math.random() * 1200));
					data1.shift();
					data1.push(Math.round(Math.random() * 1200));
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
						text: '健康状态分析',
						left: 'center',
						textStyle: {
							color: '#fff'
						}
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
									color: '#212222'
								}
							},
							axisTick: {
								show: false,
								alignWithLabel: true,
							},
							axisLabel: {
								interval: 0,
								color: '#00a0e9'
							},
						},
					],
					yAxis: [
						{
							min: 0,
							max: 300,
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
								color: '#808181'
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
							max: 300,
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
								color: '#996921'
							},
							splitLine: {
								show: false,
								lineStyle: {
									type: 'solid',
									color: '#333434'
								}
							},
						}
					],
					color: ['#dda828','#e77f27'],
					series: [
						{
							yAxisIndex: 0,
							data: [180, 255, 120, 80, 160],
							type: 'line',
							areaStyle: {
								color: '#dda828',
								opacity: 0.5
							},
						},
						{
							yAxisIndex: 1,
							data: [150, 120, 177, 240, 210],
							type: 'line',
							areaStyle: {
								color: '#f39800',
								opacity: 0.5
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
					data0.push(Math.round(Math.random() * 300));
					data1.shift();
					data1.push(Math.round(Math.random() * 300));
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
						text: '政治思想分析',
						left: 'center',
						textStyle: {
							color: '#fff'
						}
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
					series: [
						{
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
						text: '总人数',
						subtext: '7000',
						textStyle:{
							color: '#00a0e9',
							fontSize: 16
						},
						subtextStyle: {
							color: '#00a0e9',
							fontSize: 16
						},
						x:'center',
						y: '35%'
					},
					tooltip : {
						trigger: 'item',
						formatter: "{a} <br/>{b} : {c} ({d}%)"
					},
					series: [
						{
							name:'兵种人数',
							type:'pie',
							radius: ['50%', '70%'],
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
								{value:1750, name:'炮兵'},
								{value:1750, name:'勤务兵'},
								{value:1750, name:'通讯兵'},
								{value:1750, name:'侦查兵'},
							]
						}
					]
				};
				myChart.setOption(option);
			},
			drawPie2(){
				let myChart = this.$echarts.init(document.getElementById("drawPie2"));
				let option = {
					title : {
						text: '出勤率',
						subtext: '96%',
						textStyle:{
							color: '#00a0e9',
							fontSize: 16
						},
						subtextStyle: {
							color: '#00a0e9',
							fontSize: 16
						},
						x:'center',
						y: '35%'
					},
					tooltip : {
						trigger: 'item',
						formatter: "{a} <br/>{b} : {c} ({d}%)"
					},
					series: [
						{
							name:'兵种人数',
							type:'pie',
							radius: ['50%', '70%'],
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
								{value: 32, name:'出差'},
								{value: 32, name:'休假'},
								{value: 32, name:'病假'},
								{value: 32, name:'事假'},
							]
						}
					]
				};
				myChart.setOption(option);
			},
			drawMap(){
				let myChart = this.$echarts.init(document.getElementById("maps"));
		    let geoCoordMap = {
			  "海门": [121.15, 31.89],
			  "鄂尔多斯": [109.781327, 39.608266],
			  "招远": [120.38, 37.35],
			  "舟山": [122.207216, 29.985295],
			  "齐齐哈尔": [123.97, 47.33],
			  "盐城": [120.13, 33.38],
			  "赤峰": [118.87, 42.28],
			  "青岛": [120.33, 36.07],
			  "乳山": [121.52, 36.89],
			  "金昌": [102.188043, 38.520089],
			  "泉州": [118.58, 24.93],
			  "莱西": [120.53, 36.86],
			  "日照": [119.46, 35.42],
			  "胶南": [119.97, 35.88],
			  "南通": [121.05, 32.08],
			  "拉萨": [91.11, 29.97],
			  "云浮": [112.02, 22.93],
			  "梅州": [116.1, 24.55],
			  "文登": [122.05, 37.2],
			  "上海": [121.48, 31.22],
			  "攀枝花": [101.718637, 26.582347],
			  "威海": [122.1, 37.5],
			  "承德": [117.93, 40.97],
			  "厦门": [118.1, 24.46],
			  "汕尾": [115.375279, 22.786211],
			  "潮州": [116.63, 23.68],
			  "丹东": [124.37, 40.13],
			  "太仓": [121.1, 31.45],
			  "曲靖": [103.79, 25.51],
			  "烟台": [121.39, 37.52],
			  "福州": [119.3, 26.08],
			  "瓦房店": [121.979603, 39.627114],
			  "即墨": [120.45, 36.38],
			  "抚顺": [123.97, 41.97],
			  "玉溪": [102.52, 24.35],
			  "张家口": [114.87, 40.82],
			  "阳泉": [113.57, 37.85],
			  "莱州": [119.942327, 37.177017],
			  "湖州": [120.1, 30.86],
			  "汕头": [116.69, 23.39],
			  "昆山": [120.95, 31.39],
			  "宁波": [121.56, 29.86],
			  "湛江": [110.359377, 21.270708],
			  "揭阳": [116.35, 23.55],
			  "荣成": [122.41, 37.16],
			  "连云港": [119.16, 34.59],
			  "葫芦岛": [120.836932, 40.711052],
			  "常熟": [120.74, 31.64],
			  "东莞": [113.75, 23.04],
			  "河源": [114.68, 23.73],
			  "淮安": [119.15, 33.5],
			  "泰州": [119.9, 32.49],
			  "南宁": [108.33, 22.84],
			  "营口": [122.18, 40.65],
			  "惠州": [114.4, 23.09],
			  "江阴": [120.26, 31.91],
			  "蓬莱": [120.75, 37.8],
			  "韶关": [113.62, 24.84],
			  "嘉峪关": [98.289152, 39.77313],
			  "广州": [113.23, 23.16],
			  "延安": [109.47, 36.6],
			  "太原": [112.53, 37.87],
			  "清远": [113.01, 23.7],
			  "中山": [113.38, 22.52],
			  "昆明": [102.73, 25.04],
			  "寿光": [118.73, 36.86],
			  "盘锦": [122.070714, 41.119997],
			  "长治": [113.08, 36.18],
			  "深圳": [114.07, 22.62],
			  "珠海": [113.52, 22.3],
			  "宿迁": [118.3, 33.96],
			  "咸阳": [108.72, 34.36],
			  "铜川": [109.11, 35.09],
			  "平度": [119.97, 36.77],
			  "佛山": [113.11, 23.05],
			  "海口": [110.35, 20.02],
			  "江门": [113.06, 22.61],
			  "章丘": [117.53, 36.72],
			  "肇庆": [112.44, 23.05],
			  "大连": [121.62, 38.92],
			  "临汾": [111.5, 36.08],
			  "吴江": [120.63, 31.16],
			  "石嘴山": [106.39, 39.04],
			  "沈阳": [123.38, 41.8],
			  "苏州": [120.62, 31.32],
			  "茂名": [110.88, 21.68],
			  "嘉兴": [120.76, 30.77],
			  "长春": [125.35, 43.88],
			  "胶州": [120.03336, 36.264622],
			  "银川": [106.27, 38.47],
			  "张家港": [120.555821, 31.875428],
			  "三门峡": [111.19, 34.76],
			  "锦州": [121.15, 41.13],
			  "南昌": [115.89, 28.68],
			  "柳州": [109.4, 24.33],
			  "三亚": [109.511909, 18.252847],
			  "自贡": [104.778442, 29.33903],
			  "吉林": [126.57, 43.87],
			  "阳江": [111.95, 21.85],
			  "泸州": [105.39, 28.91],
			  "西宁": [101.74, 36.56],
			  "宜宾": [104.56, 29.77],
			  "呼和浩特": [111.65, 40.82],
			  "成都": [104.06, 30.67],
			  "大同": [113.3, 40.12],
			  "镇江": [119.44, 32.2],
			  "桂林": [110.28, 25.29],
			  "张家界": [110.479191, 29.117096],
			  "宜兴": [119.82, 31.36],
			  "北海": [109.12, 21.49],
			  "西安": [108.95, 34.27],
			  "金坛": [119.56, 31.74],
			  "东营": [118.49, 37.46],
			  "牡丹江": [129.58, 44.6],
			  "遵义": [106.9, 27.7],
			  "绍兴": [120.58, 30.01],
			  "扬州": [119.42, 32.39],
			  "常州": [119.95, 31.79],
			  "潍坊": [119.1, 36.62],
			  "重庆": [106.54, 29.59],
			  "台州": [121.420757, 28.656386],
			  "南京": [118.78, 32.04],
			  "滨州": [118.03, 37.36],
			  "贵阳": [106.71, 26.57],
			  "无锡": [120.29, 31.59],
			  "本溪": [123.73, 41.3],
			  "克拉玛依": [84.77, 45.59],
			  "渭南": [109.5, 34.52],
			  "马鞍山": [118.48, 31.56],
			  "宝鸡": [107.15, 34.38],
			  "焦作": [113.21, 35.24],
			  "句容": [119.16, 31.95],
			  "北京": [116.46, 39.92],
			  "徐州": [117.2, 34.26],
			  "衡水": [115.72, 37.72],
			  "包头": [110, 40.58],
			  "绵阳": [104.73, 31.48],
			  "乌鲁木齐": [87.68, 43.77],
			  "枣庄": [117.57, 34.86],
			  "杭州": [120.19, 30.26],
			  "淄博": [118.05, 36.78],
			  "鞍山": [122.85, 41.12],
			  "溧阳": [119.48, 31.43],
			  "库尔勒": [86.06, 41.68],
			  "安阳": [114.35, 36.1],
			  "开封": [114.35, 34.79],
			  "济南": [117, 36.65],
			  "德阳": [104.37, 31.13],
			  "温州": [120.65, 28.01],
			  "九江": [115.97, 29.71],
			  "邯郸": [114.47, 36.6],
			  "临安": [119.72, 30.23],
			  "兰州": [103.73, 36.03],
			  "沧州": [116.83, 38.33],
			  "临沂": [118.35, 35.05],
			  "南充": [106.110698, 30.837793],
			  "天津": [117.2, 39.13],
			  "富阳": [119.95, 30.07],
			  "泰安": [117.13, 36.18],
			  "诸暨": [120.23, 29.71],
			  "郑州": [113.65, 34.76],
			  "哈尔滨": [126.63, 45.75],
			  "聊城": [115.97, 36.45],
			  "芜湖": [118.38, 31.33],
			  "唐山": [118.02, 39.63],
			  "平顶山": [113.29, 33.75],
			  "邢台": [114.48, 37.05],
			  "德州": [116.29, 37.45],
			  "济宁": [116.59, 35.38],
			  "荆州": [112.239741, 30.335165],
			  "宜昌": [111.3, 30.7],
			  "义乌": [120.06, 29.32],
			  "丽水": [119.92, 28.45],
			  "洛阳": [112.44, 34.7],
			  "秦皇岛": [119.57, 39.95],
			  "株洲": [113.16, 27.83],
			  "石家庄": [114.48, 38.03],
			  "莱芜": [117.67, 36.19],
			  "常德": [111.69, 29.05],
			  "保定": [115.48, 38.85],
			  "湘潭": [112.91, 27.87],
			  "金华": [119.64, 29.12],
			  "岳阳": [113.09, 29.37],
			  "长沙": [113, 28.21],
			  "衢州": [118.88, 28.97],
			  "廊坊": [116.7, 39.53],
			  "菏泽": [115.480656, 35.23375],
			  "合肥": [117.27, 31.86],
			  "武汉": [114.31, 30.52],
			  "大庆": [125.03, 46.58]
		  };
			  var alirl = [
				  [
					  [121.15, 31.89],
					  [109.781327, 39.608266]
				  ],
				  [
					  [120.38, 37.35],
					  [122.207216, 29.985295]
				  ],
				  [
					  [123.97, 47.33],
					  [120.13, 33.38]
				  ],
				  [
					  [118.87, 42.28],
					  [120.33, 36.07]
				  ],
				  [
					  [121.52, 36.89],
					  [117.93, 40.97]
				  ],
				  [
					  [102.188043, 38.520089],
					  [122.1, 37.5]
				  ],
				  [
					  [118.58, 24.93],
					  [101.718637, 26.582347]
				  ],
				  [
					  [120.53, 36.86],
					  [121.48, 31.22]
				  ],
				  [
					  [119.46, 35.42],
					  [122.05, 37.2]
				  ],
				  [
					  [119.97, 35.88],
					  [116.1, 24.55]
				  ],
				  [
					  [121.05, 32.08],
					  [112.02, 22.93]
				  ],
				  [
					  [91.11, 29.97],
					  [118.1, 24.46]
				  ]
			  ]
			  var convertData = function(data) {
				  var res = [];
				  for (var i = 0; i < data.length; i++) {
					  var geoCoord = geoCoordMap[data[i].name];
					  if (geoCoord) {
						  res.push({
							  name: data[i].name,
							  value: geoCoord.concat(data[i].value)
						  });
					  }
				  }
				  // console.log(res)
				  return res;
			  };
			  let option = {
				  title: {
					  x: 'left',
					  top: "10",
					  textStyle: {
						  color: '#000',
						  fontSize: 14
					  }
				  },
				  tooltip: {
					  show: true,
				  },
				  geo3D: {
					  map: 'china',
					  roam: true,
					  itemStyle: {
					  	color: 'rgba(56, 141, 120, 0.5)',
						  areaColor: '#1d5e98',
						  opacity: .5,
						  borderWidth: 0.4,
						  borderColor: '#000'
					  },
					  label: {
						  show: true,
						  textStyle: {
							  color: '#000', //地图初始化区域字体颜色
							  fontSize: 8,
							  opacity: 1,
							  backgroundColor: 'rgba(0,23,11,0)'
						  },
					  },
					  emphasis: { //当鼠标放上去  地区区域是否显示名称
						  label: {
							  show: true,
							  textStyle: {
								  color: '#fff',
								  fontSize: 3,
								  backgroundColor: 'rgba(0,23,11,0)'
							  }
						  }
					  },
					  //shading: 'lambert',
					  light: { //光照阴影
						  main: {
							  color: '#fff', //光照颜色
							  intensity: 1.2, //光照强度
							  //shadowQuality: 'high', //阴影亮度
							  shadow: false, //是否显示阴影
							  alpha: 55,
							  beta: 10
						  },
						  ambient: {
							  intensity: 0.3
						  }
					  }
				  },
				  series: [
					  //柱状图
					  {
						  type: "bar3D",
						  coordinateSystem: 'geo3D',
						  barSize: 1, //柱子粗细
						  shading: 'lambert',
						  opacity: 1,
						  bevelSize: 0.3,
						  color: 'rgba(255,255,255,.5)',
						  label: {
							  show: false,
							  formatter: '{b}'
						  },
						  data: convertData([{
							  name: "海门",
							  value: (Math.random() * 300).toFixed(2)
						  }, {
							  name: "鄂尔多斯",
							  value: (Math.random() * 300).toFixed(2)
						  }, {
							  name: "招远",
							  value: (Math.random() * 300).toFixed(2)
						  }, {
							  name: "舟山",
							  value: (Math.random() * 300).toFixed(2)
						  }, {
							  name: "齐齐哈尔",
							  value: (Math.random() * 300).toFixed(2)
						  }, {
							  name: "盐城",
							  value: (Math.random() * 300).toFixed(2)
						  }, {
							  name: "赤峰",
							  value: (Math.random() * 300).toFixed(2)
						  }, {
							  name: "青岛",
							  value: (Math.random() * 300).toFixed(2)
						  }, {
							  name: "乳山",
							  value: (Math.random() * 200).toFixed(2)
						  }, {
							  name: "金昌",
							  value: (Math.random() * 200).toFixed(2)
						  }, {
							  name: "泉州",
							  value: (Math.random() * 200).toFixed(2)
						  }, {
							  name: "莱西",
							  value: (Math.random() * 200).toFixed(2)
						  }, {
							  name: "日照",
							  value: (Math.random() * 300).toFixed(2)
						  }, {
							  name: "胶南",
							  value: (Math.random() * 300).toFixed(2)
						  }, {
							  name: "南通",
							  value: (Math.random() * 300).toFixed(2)
						  }, {
							  name: "拉萨",
							  value: (Math.random() * 300).toFixed(2)
						  }, {
							  name: "云浮",
							  value: (Math.random() * 300).toFixed(2)
						  }, {
							  name: "梅州",
							  value: (Math.random() * 300).toFixed(2)
						  }, {
							  name: "文登",
							  value: (Math.random() * 300).toFixed(2)
						  }, {
							  name: "上海",
							  value: (Math.random() * 300).toFixed(2)
						  }, {
							  name: "攀枝花",
							  value: (Math.random() * 200).toFixed(2)
						  }, {
							  name: "威海",
							  value: (Math.random() * 200).toFixed(2)
						  }, {
							  name: "承德",
							  value: (Math.random() * 200).toFixed(2)
						  }, {
							  name: "厦门",
							  value: (Math.random() * 200).toFixed(2)
						  }, {
							  name: "汕尾",
							  value: (Math.random() * 200).toFixed(2)
						  }, {
							  name: "潮州",
							  value: (Math.random() * 200).toFixed(2)
						  }, {
							  name: "丹东",
							  value: (Math.random() * 200).toFixed(2)
						  }, {
							  name: "太仓",
							  value: (Math.random() * 200).toFixed(2)
						  }, {
							  name: "曲靖",
							  value: (Math.random() * 200).toFixed(2)
						  }, {
							  name: "烟台",
							  value: (Math.random() * 200).toFixed(2)
						  }, {
							  name: "福州",
							  value: (Math.random() * 200).toFixed(2)
						  }, {
							  name: "瓦房店",
							  value: (Math.random() * 200).toFixed(2)
						  }, {
							  name: "即墨",
							  value: (Math.random() * 200).toFixed(2)
						  }, {
							  name: "抚顺",
							  value: (Math.random() * 200).toFixed(2)
						  }, {
							  name: "玉溪",
							  value: (Math.random() * 200).toFixed(2)
						  },
							  
							  
							  {
								  name: "宁波",
								  value: (Math.random() * 200).toFixed(2)
							  }, {
								  name: "湛江",
								  value: (Math.random() * 200).toFixed(2)
							  }, {
								  name: "揭阳",
								  value: (Math.random() * 200).toFixed(2)
							  }, {
								  name: "荣成",
								  value: (Math.random() * 200).toFixed(2)
							  }, {
								  name: "连云港",
								  value: (Math.random() * 200).toFixed(2)
							  }, {
								  name: "葫芦岛",
								  value: (Math.random() * 200).toFixed(2)
							  }, {
								  name: "常熟",
								  value: (Math.random() * 200).toFixed(2)
							  }, {
								  name: "东莞",
								  value: (Math.random() * 200).toFixed(2)
							  }, {
								  name: "河源",
								  value: (Math.random() * 200).toFixed(2)
							  }, {
								  name: "淮安",
								  value: (Math.random() * 200).toFixed(2)
							  }, {
								  name: "泰州",
								  value: (Math.random() * 200).toFixed(2)
							  }, {
								  name: "南宁",
								  value: (Math.random() * 200).toFixed(2)
							  }, {
								  name: "营口",
								  value: (Math.random() * 200).toFixed(2)
							  }, {
								  name: "惠州",
								  value: (Math.random() * 200).toFixed(2)
							  }, {
								  name: "江阴",
								  value: (Math.random() * 200).toFixed(2)
							  }, {
								  name: "蓬莱",
								  value: (Math.random() * 200).toFixed(2)
							  }, {
								  name: "韶关",
								  value: (Math.random() * 200).toFixed(2)
							  }, {
								  name: "嘉峪关",
								  value: (Math.random() * 200).toFixed(2)
							  }, {
								  name: "广州",
								  value: (Math.random() * 200).toFixed(2)
							  }, {
								  name: "延安",
								  value: (Math.random() * 200).toFixed(2)
							  }, {
								  name: "太原",
								  value: (Math.random() * 200).toFixed(2)
							  }, {
								  name: "清远",
								  value: (Math.random() * 200).toFixed(2)
							  }, {
								  name: "中山",
								  value: (Math.random() * 200).toFixed(2)
							  }, {
								  name: "昆明",
								  value: (Math.random() * 200).toFixed(2)
							  }, {
								  name: "寿光",
								  value: (Math.random() * 200).toFixed(2)
							  }, {
								  name: "盘锦",
								  value: (Math.random() * 200).toFixed(2)
							  }, {
								  name: "长治",
								  value: (Math.random() * 300).toFixed(2)
							  }, {
								  name: "深圳",
								  value: (Math.random() * 200).toFixed(2)
							  }, {
								  name: "珠海",
								  value: (Math.random() * 200).toFixed(2)
							  }, {
								  name: "宿迁",
								  value: (Math.random() * 300).toFixed(2)
							  }, {
								  name: "咸阳",
								  value: (Math.random() * 300).toFixed(2)
							  }, {
								  name: "铜川",
								  value: (Math.random() * 300).toFixed(2)
							  }, {
								  name: "平度",
								  value: (Math.random() * 300).toFixed(2)
							  }, {
								  name: "佛山",
								  value: (Math.random() * 300).toFixed(2)
							  }, {
								  name: "海口",
								  value: (Math.random() * 300).toFixed(2)
							  }, {
								  name: "江门",
								  value: (Math.random() * 200).toFixed(2)
							  }, {
								  name: "章丘",
								  value: (Math.random() * 200).toFixed(2)
							  }, {
								  name: "肇庆",
								  value: (Math.random() * 300).toFixed(2)
							  }, {
								  name: "大连",
								  value: (Math.random() * 200).toFixed(2)
							  }, {
								  name: "临汾",
								  value: (Math.random() * 300).toFixed(2)
							  }, {
								  name: "吴江",
								  value: (Math.random() * 200).toFixed(2)
							  }, {
								  name: "石嘴山",
								  value: (Math.random() * 200).toFixed(2)
							  }, {
								  name: "沈阳",
								  value: (Math.random() * 200).toFixed(2)
							  }, {
								  name: "苏州",
								  value: (Math.random() * 200).toFixed(2)
							  }, {
								  name: "茂名",
								  value: (Math.random() * 200).toFixed(2)
							  }, {
								  name: "嘉兴",
								  value: (Math.random() * 200).toFixed(2)
							  }, {
								  name: "长春",
								  value: (Math.random() * 300).toFixed(2)
							  }, {
								  name: "胶州",
								  value: (Math.random() * 200).toFixed(2)
							  }, {
								  name: "银川",
								  value: (Math.random() * 200).toFixed(2)
							  }, {
								  name: "张家港",
								  value: (Math.random() * 200).toFixed(2)
							  }, {
								  name: "三门峡",
								  value: (Math.random() * 200).toFixed(2)
							  }, {
								  name: "锦州",
								  value: (Math.random() * 200).toFixed(2)
							  }, {
								  name: "南昌",
								  value: (Math.random() * 200).toFixed(2)
							  }, {
								  name: "柳州",
								  value: (Math.random() * 200).toFixed(2)
							  }, {
								  name: "三亚",
								  value: (Math.random() * 300).toFixed(2)
							  }, {
								  name: "自贡",
								  value: (Math.random() * 200).toFixed(2)
							  }, {
								  name: "吉林",
								  value: (Math.random() * 200).toFixed(2)
							  }, {
								  name: "阳江",
								  value: (Math.random() * 200).toFixed(2)
							  }, {
								  name: "泸州",
								  value: (Math.random() * 200).toFixed(2)
							  }, {
								  name: "西宁",
								  value: (Math.random() * 200).toFixed(2)
							  }, {
								  name: "宜宾",
								  value: (Math.random() * 200).toFixed(2)
							  }, {
								  name: "呼和浩特",
								  value: (Math.random() * 200).toFixed(2)
							  }, {
								  name: "成都",
								  value: (Math.random() * 200).toFixed(2)
							  }, {
								  name: "大同",
								  value: (Math.random() * 200).toFixed(2)
							  }, {
								  name: "镇江",
								  value: (Math.random() * 100).toFixed(2)
							  }, {
								  name: "桂林",
								  value: (Math.random() * 200).toFixed(2)
							  }, {
								  name: "张家界",
								  value: (Math.random() * 200).toFixed(2)
							  }, {
								  name: "宜兴",
								  value: (Math.random() * 200).toFixed(2)
							  }, {
								  name: "北海",
								  value: (Math.random() * 200).toFixed(2)
							  }, {
								  name: "西安",
								  value: (Math.random() * 200).toFixed(2)
							  }, {
								  name: "金坛",
								  value: (Math.random() * 200).toFixed(2)
							  },
							  
							  {
								  name: "包头",
								  value: (Math.random() * 200).toFixed(2)
							  }, {
								  name: "绵阳",
								  value: (Math.random() * 200).toFixed(2)
							  }, {
								  name: "乌鲁木齐",
								  value: (Math.random() * 200).toFixed(2)
							  }, {
								  name: "枣庄",
								  value: (Math.random() * 200).toFixed(2)
							  }, {
								  name: "杭州",
								  value: (Math.random() * 200).toFixed(2)
							  }, {
								  name: "淄博",
								  value: (Math.random() * 200).toFixed(2)
							  }, {
								  name: "鞍山",
								  value: (Math.random() * 200).toFixed(2)
							  }, {
								  name: "溧阳",
								  value: (Math.random() * 200).toFixed(2)
							  }, {
								  name: "库尔勒",
								  value: (Math.random() * 200).toFixed(2)
							  }, {
								  name: "安阳",
								  value: (Math.random() * 200).toFixed(2)
							  }, {
								  name: "开封",
								  value: (Math.random() * 200).toFixed(2)
							  }, {
								  name: "济南",
								  value: (Math.random() * 100).toFixed(2)
							  }, {
								  name: "德阳",
								  value: (Math.random() * 200).toFixed(2)
							  }, {
								  name: "温州",
								  value: (Math.random() * 200).toFixed(2)
							  }, {
								  name: "九江",
								  value: (Math.random() * 100).toFixed(2)
							  }, {
								  name: "邯郸",
								  value: (Math.random() * 200).toFixed(2)
							  }, {
								  name: "临安",
								  value: (Math.random() * 100).toFixed(2)
							  }, {
								  name: "兰州",
								  value: (Math.random() * 200).toFixed(2)
							  }, {
								  name: "沧州",
								  value: (Math.random() * 200).toFixed(2)
							  },
							  
							  {
								  name: "秦皇岛",
								  value: (Math.random() * 200).toFixed(2)
							  }, {
								  name: "株洲",
								  value: (Math.random() * 200).toFixed(2)
							  }, {
								  name: "石家庄",
								  value: (Math.random() * 200).toFixed(2)
							  }, {
								  name: "莱芜",
								  value: (Math.random() * 200).toFixed(2)
							  }, {
								  name: "常德",
								  value: (Math.random() * 200).toFixed(2)
							  }, {
								  name: "保定",
								  value: (Math.random() * 200).toFixed(2)
							  }, {
								  name: "湘潭",
								  value: (Math.random() * 100).toFixed(2)
							  }, {
								  name: "金华",
								  value: (Math.random() * 200).toFixed(2)
							  }, {
								  name: "岳阳",
								  value: (Math.random() * 200).toFixed(2)
							  }, {
								  name: "长沙",
								  value: (Math.random() * 100).toFixed(2)
							  }, {
								  name: "衢州",
								  value: (Math.random() * 200).toFixed(2)
							  }, {
								  name: "廊坊",
								  value: (Math.random() * 200).toFixed(2)
							  }, {
								  name: "菏泽",
								  value: (Math.random() * 100).toFixed(2)
							  }, {
								  name: "合肥",
								  value: (Math.random() * 200).toFixed(2)
							  }, {
								  name: "武汉",
								  value: (Math.random() * 200).toFixed(2)
							  }, {
								  name: "大庆",
								  value: (Math.random() * 200).toFixed(2)
							  }
						  ]),
					  },
					  
					  
					  {
						  name: 'scatter3D',
						  type: "scatter3D",
						  coordinateSystem: 'geo3D',
						  symbol: 'pin',
						  symbolSize: 30,
						  opacity: 1,
						  label: {
							  show: false,
							  formatter: '{b}'
						  },
						  itemStyle: {
							  borderWidth: 0.5,
							  borderColor: '#fff'
						  },
						  data: convertData([{
							  name: "阳泉",
							  value: ((Math.random() * 100) + 50).toFixed(2)
						  }, {
							  name: "莱州",
							  value: ((Math.random() * 100) + 50).toFixed(2)
						  }, {
							  name: "湖州",
							  value: ((Math.random() * 100) + 50).toFixed(2)
						  }, {
							  name: "汕头",
							  value: ((Math.random() * 100) + 50).toFixed(2)
						  }, {
							  name: "昆山",
							  value: ((Math.random() * 100) + 50).toFixed(2)
						  }, {
							  name: "张家口",
							  value: ((Math.random() * 100) + 50).toFixed(2)
						  }])
					  },
					  
					  
					  //画线
					  
					  {
						  type: 'lines3D',
						  
						  coordinateSystem: 'geo3D',
						  
						  effect: {
							  show: true,
							  trailWidth: 1,
							  trailOpacity: 0.5,
							  trailLength: 0.2,
							  constantSpeed: 5
						  },
						  
						  blendMode: 'lighter',
						  
						  lineStyle: {
							  width: 0.2,
							  opacity: 0.05
						  },
						  
						  data: alirl
					  }
				  ]
			  };
				myChart.setOption(option);
			},
		},
		mounted() {
			this.drawEchart1();
			this.drawEchart2();
			this.drawEchart3();
			this.drawEchart4();
			this.drawEchart5();
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
	@import "~@/assets/css/css.less";
	.brigade .content .rightSide #echart10 .content .left li:nth-child(1) .line[data-v-da6a636c]:after,
	.brigade .content .rightSide #echart10 .content .right li:nth-child(1) .line[data-v-da6a636c]:after{
		background-color: #ae5da1;
		background-image:none;
	}
	.brigade .content .rightSide #echart10 .content .left li:nth-child(2) .line[data-v-da6a636c]:after,
	.brigade .content .rightSide #echart10 .content .right li:nth-child(2) .line[data-v-da6a636c]:after{
		background-color: #556fb5;
		background-image:none;
	}
	.brigade .content .rightSide #echart10 .content .left li:nth-child(3) .line[data-v-da6a636c]:after,
	.brigade .content .rightSide #echart10 .content .right li:nth-child(3) .line[data-v-da6a636c]:after{
		background-color: #00a0e9;
		background-image:none;
	}
	.brigade .content .rightSide #echart10 .content .left li:nth-child(4) .line[data-v-da6a636c]:after,
	.brigade .content .rightSide #echart10 .content .right li:nth-child(4) .line[data-v-da6a636c]:after{
		background-color: #009944;
		background-image:none;
	}
	.brigade .content .rightSide #echart10 .content .left li:nth-child(5) .line[data-v-da6a636c]:after,
	.brigade .content .rightSide #echart10 .content .right li:nth-child(6) .line[data-v-da6a636c]:after{
		background-color: #e4007f;
		background-image:none;
	}
</style>
