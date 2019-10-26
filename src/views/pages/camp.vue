<template>
	<div class="brigade">
		<div class="title">
			<div class="left"></div>
			<span><i></i>士兵全息大数据管理与分析系统</span>
			<div class="right"></div>
		</div>
		<div class="content">
			<div class="leftSide">
				<div id="echart4"></div>
				<div id="echart3"></div>
				<div id="echart1"></div>
				<div id="echart2"></div>
				<div id="echart5"></div>
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
				<div id="echart6"></div>
				<div id="echart7"></div>
				<div id="echart9"></div>
			</div>
		</div>
	
	</div>
</template>

<script>
	import 'echarts/map/js/china.js';
	import data from '@/assets/json/data-1559032707973-kPCDcrc0f.json'
	export default {
		name: "camp",
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
						color: ['#012979', '#10d3e9'],
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
						color: ["#F58080", "#47D8BE", "#F9A589"],
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
							color: "#F58080",
							lineStyle: {
								normal: {
									width: 5,
									color: {
										type: 'linear',
										colorStops: [{
											offset: 0,
											color: '#FFCAD4' // 0% 处的颜色
										}, {
											offset: 0.4,
											color: '#F58080' // 100% 处的颜色
										}, {
											offset: 1,
											color: '#F58080' // 100% 处的颜色
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
							lineStyle: {
								normal: {
									width: 5,
									color: {
										type: 'linear',
										
										colorStops: [{
											offset: 0,
											color: '#AAF487' // 0% 处的颜色
										},
											{
												offset: 0.4,
												color: '#47D8BE' // 100% 处的颜色
											}, {
												offset: 1,
												color: '#47D8BE' // 100% 处的颜色
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
						{
							type: 'line',
							data: [350, 650, 440, 780, 784, 560],
							lineStyle: {
								normal: {
									width: 5,
									color: {
										type: 'linear',
										
										colorStops: [{
											offset: 0,
											color: '#F6D06F' // 0% 处的颜色
										},
											{
												offset: 0.4,
												color: '#F9A589' // 100% 处的颜色
											}, {
												offset: 1,
												color: '#F9A589' // 100% 处的颜色
											}
										],
										globalCoord: false // 缺省为 false
									},
									shadowColor: 'rgba(249,165,137, 0.5)',
									shadowBlur: 10,
									shadowOffsetY: 7
								}
							},
							itemStyle: {
								normal: {
									color: '#F6D06F',
									borderWidth: 10,
									/*shadowColor: 'rgba(72,216,191, 0.3)',
									 shadowBlur: 100,*/
									borderColor: "#F6D06F"
								}
							},
							smooth: true,
							symbol:'none',
						}
					]
				};
				myChart.setOption(option);
				let data0 = option.series[0].data;
				let data1 = option.series[1].data;
				let data2 = option.series[2].data;
				let axisData = ['体能', '设计', '障碍', '技术', '通讯']
				let num = 0;
				setInterval(() => {
					data0.shift();
					data0.push(Math.round(Math.random() * 1000));
					data1.shift();
					data1.push(Math.round(Math.random() * 1000));
					data2.shift();
					data2.push(Math.round(Math.random() * 1000));
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
							data:[156, 160, 170, 120, 160],
							color: ['#00a0e9'],
							barGap: 0,
						},
						{
							//name:'降水量',
							type:'bar',
							data:[198, 120, 99, 187, 144],
							color: ['#f39800'],
							barGap: 0,
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
						color: ['#9cf3fd', '#10d3e9'],
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
			  let colors = [
				  ["#1DE9B6", "#F46E36", "#04B9FF", "#5DBD32", "#FFC809", "#FB95D5", "#BDA29A", "#6E7074", "#546570", "#C4CCD3"],
				  ["#37A2DA", "#67E0E3", "#32C5E9", "#9FE6B8", "#FFDB5C", "#FF9F7F", "#FB7293", "#E062AE", "#E690D1", "#E7BCF3", "#9D96F5", "#8378EA", "#8378EA"],
				  ["#DD6B66", "#759AA0", "#E69D87", "#8DC1A9", "#EA7E53", "#EEDD78", "#73A373", "#73B9BC", "#7289AB", "#91CA8C", "#F49F42"],
			  ];
		    let colorIndex = 0;
			  let geoCoordMap = {
				  '北碚': [106.50,29.81],
				  '城口': [108.6520475,31.90676506],
				  '大足': [105.7692868,29.65392091],
				  '垫江': [107.4004904,30.24903189],
				  '丰都': [107.7461781,29.91492542],
				  '奉节': [109.3758974,30.98202119],
				  '合川': [106.2833096,30.09766756],
				  '江北': [106.6214893,29.64821182],
				  '江津': [106.2647885,28.98483627],
				  '开州': [108.1818518,31.29466521],
				  '南岸': [106.6379653,29.47704825],
				  '南川': [107.1406799,29.12047319],
				  '彭水': [108.2573507,29.36444557],
				  '綦南': [106.8036647,28.96872774],
				  '黔江': [108.7559876,29.44290625],
				  '石柱': [108.2438988,30.07512144],
				  '市区': [106.4377397,29.52648606],
				  '铜梁': [106.0616035,29.81036286],
				  '潼南': [105.8116920, 30.13795513],
				  '万州': [108.0828876,30.73353669],
				  '巫山': [109.8779184,31.09568937],
				  '巫溪': [109.2970739,31.48090521],
				  '武隆': [107.6831317,29.36831708],
				  '秀山': [108.9997005,28.49462861],
				  '永川': [105.8347961,29.41042605],
				  '酉阳': [108.7911679,28.88330557],
				  '云阳': [108.7533957,30.96025875],
				  '长寿': [107.24,29.95],
				  '忠县': [107.9279014,30.33522658],
				  '川东': [107.3488646,29.68233099]
			  };
			  
			  let voltageLevel = ["全部", "35kV", "110kV", "220kV", "500kV"];
			  let mapData = [
				  [], [], [], [], [], [], [],[], [], [], [],[], [], [], [],
				  [], [], [], [], [], [], [], [], [],
				  [], [], [], [], [], [], [], [], [], [], [], []
			  ];
			  /*柱子Y名称*/
			  let categoryData = [];
			  let barData = [];
			  for (var key in geoCoordMap) {
				  categoryData.push(key);
				  mapData[0].push({
					  "year": 2014,
					  "name": key,
					  "value": randomNum(100, 300)
				  });
				  mapData[1].push({
					  "year": 2015,
					  "name": key,
					  "value": randomNum(100, 300)
				  });
				  mapData[2].push({
					  "year": 2016,
					  "name": key,
					  "value": randomNum(100, 300)
				  });
				  mapData[3].push({
					  "year": 2017,
					  "name": key,
					  "value": randomNum(100, 300)
				  });
				  mapData[4].push({
					  "year": 2018,
					  "name": key,
					  "value": randomNum(100, 300)
				  });
				  mapData[5].push({
					  "year": 2019,
					  "name": key,
					  "value": randomNum(100, 300)
				  });
			  }
			  for (var i = 0; i < mapData.length; i++) {
				  barData.push([]);
				  for (var j = 0; j < mapData[i].length; j++) {
					  barData[i].push(mapData[i][j].value)
				  }
			  }
		    this.$echarts.registerMap('xianyang3', data);
			  let convertData = function(data) {
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
				  return res;
			  };
		    let convertToLineData = function(data) {
			  var res = [];
			  for (var i = 0; i < data.length; i++) {
				  var dataItem = data[i];
				  var fromCoord = geoCoordMap[dataItem.name];
				  var toCoord = [106.55, 29.57]; //市区
				  if (fromCoord && toCoord) {
					  res.push([{
						  coord: fromCoord,
						  value: dataItem.value
					  }, {
						  coord: toCoord,
					  }]);
				  }
			  }
			  return res;
		  };
		    let optionXyMap01 = {
					timeline: {
						show: false,
						data: voltageLevel,
						axisType: 'category',
						autoPlay: true,
						playInterval: 3000,
						left: '10%',
						right: '10%',
						bottom: '3%',
						width: '80%',
						//  height: null,
						label: {
							normal: {
								textStyle: {
									color: '#ddd'
								}
							},
							emphasis: {
								textStyle: {
									color: '#fff'
								}
							}
						},
						symbolSize: 10,
						lineStyle: {
							color: '#555'
						},
						checkpointStyle: {
							borderColor: '#777',
							borderWidth: 2
						},
						controlStyle: {
							showNextBtn: true,
							showPrevBtn: true,
							normal: {
								color: '#666',
								borderColor: '#666'
							},
							emphasis: {
								color: '#aaa',
								borderColor: '#aaa'
							}
						},
					
					},
					baseOption: {
						animation: true,
						animationDuration: 1000,
						animationEasing: 'cubicInOut',
						animationDurationUpdate: 1000,
						animationEasingUpdate: 'cubicInOut',
						grid: {
							right: '1%',
							top: '15%',
							bottom: '10%',
							width: '20%'
						},
						tooltip: {
							trigger: 'axis', // hover触发器
							axisPointer: { // 坐标轴指示器，坐标轴触发有效
								type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
								shadowStyle: {
									color: 'rgba(150,150,150,0.1)' //hover颜色
								}
							}
						},
						geo: {
							show: true,
							map: 'xianyang3',
							roam: true,
							zoom: 1,
							center: [108.5, 30],  //中心点
							label: {
								emphasis: {
									show: false
								}
							},
							itemStyle: {
								normal: {
									borderColor: 'rgba(147, 235, 248, 1)',
									borderWidth: 1,
									areaColor: {
										type: 'radial',
										x: 0.5,
										y: 0.5,
										r: 0.5,
										colorStops: [{
											offset: 0,
											color: 'rgba(147, 235, 248, 0)' // 0% 处的颜色
										}, {
											offset: 1,
											color: 'rgba(147, 235, 248, .2)' // 100% 处的颜色
										}],
										globalCoord: false // 缺省为 false
									},
									// shadowColor: 'rgba(128, 217, 248, 1)',
									// shadowColor: 'rgba(255, 255, 255, 1)',
									// shadowOffsetX: -2,
									// shadowOffsetY: 2,
									// shadowBlur: 10
								},
								emphasis: {
									areaColor: '#389BB7',
									borderWidth: 0
								}
							}
						},
					},
					options: []
				};
			  for (var n = 0; n < voltageLevel.length; n++) {
				  optionXyMap01.options.push({
					  backgroundColor: 'rgba(0,0,0,0)',
					  xAxis: {
						  type: 'value',
						  scale: true,
						  position: 'top',
						  min: 0,
						  boundaryGap: false,
						  splitLine: {
							  show: false
						  },
						  axisLine: {
							  show: false
						  },
						  axisTick: {
							  show: false
						  },
						  axisLabel: {
						  	show: false,
							  margin: 2,
							  textStyle: {
								  color: '#aaa'
							  }
						  },
					  },
					  yAxis: {
						  type: 'category',
						  //  name: 'TOP 20',
						  nameGap: 16,
						  axisLine: {
							  show: true,
							  lineStyle: {
								  color: '#ddd'
							  }
						  },
						  axisTick: {
							  show: false,
							  lineStyle: {
								  color: '#ddd'
							  }
						  },
						  axisLabel: {
							  interval: 0,
							  textStyle: {
								  color: '#ddd'
							  }
						  },
						  data: categoryData
					  },
					  series: [
					  	{
							  //文字和标志
							  name: 'light',
							  type: 'scatter',
							  coordinateSystem: 'geo',
							  data: convertData(mapData[n]),
							  symbolSize: function(val) {
								  return val[2] / 10;
							  },
							  itemStyle: {
								  normal: {
									  color: colors[colorIndex][n]
								  }
							  }
					    },
						  {
							  type: 'map',
							  map: 'xianyang3',
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
							  data: mapData
						  },
						  {
							  //  name: 'Top 5',
							  type: 'effectScatter',
							  coordinateSystem: 'geo',
							  data: convertData(mapData[n].sort(function(a, b) {
								  return b.value - a.value;
							  }).slice(0, 20)),
							  symbolSize: function(val) {
								  return val[2] / 100;
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
									  color: colors[colorIndex][n],
									  shadowBlur: 5,
									  shadowColor: colors[colorIndex][n]
								  }
							  },
							  zlevel: 1
						  },
						  {
							  zlevel: 1.5,
							  type: 'bar',
							  symbol: 'none',
							  itemStyle: {
								  normal: {
									  color: colors[colorIndex][n]
								  }
							  },
							  data: barData[n]
						  }
					  ]
				  })
			  }
		    myChart.setOption(optionXyMap01);
			  function randomNum(minNum, maxNum) {
				  let res = null;
				  switch (arguments.length) {
					  case 1:
						  res = parseInt(Math.random() * minNum + 1, 10);
						  break;
					  case 2:
						  res=  parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
						  break;
					  default:
						  res =  0;
						  break;
				  }
				  return res;
			  }
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
</style>
