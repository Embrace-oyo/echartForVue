<template>
	<div class="brigade">
		<div class="title">
			<router-link tag="div" to="/commander" class="backButton"> < 二排</router-link>
			<div class="left"></div>
			<span><i></i>士兵全息大数据管理与分析系统</span>
			<div class="right"></div>
		</div>
		<div class="content">
			<div class="leftSide">
				<div id="echart7"></div>
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
				<div id="maps">
					<i class="icon"></i>
					<router-link tag="li" to="/details" v-for="(item, index) in 28">
						<span>{{index % 3 === 0 ? '张某某' : (index % 3 === 1 ? '李世林' : '孙悦')}}</span>
						<span>{{index % 3 === 0 ? '炮兵' : (index % 3 === 1 ? '通讯兵' : '侦查兵')}}</span>
						<span>{{index % 3 === 0 ? '一班' : (index % 3 === 1 ? '二班' : '三班')}}</span>
					</router-link>
				</div>
				<div class="infoBox">
					<i></i>
					<p>xxx训练、演习等等正在进行</p>
					<p>一班技战术考核正在进行</p>
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
				<div id="echart4"></div>
				<div id="echart6"></div>
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
	import 'echarts/map/js/world.js';
	export default {
		name: "row",
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
						data: ['体能', '射击', '障碍', '技术', '通讯'],
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
				let axisData = ['体能', '射击', '障碍', '技术', '通讯']
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
							data: ['体能', '射击', '障碍', '技术', '通讯'],
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
						subtext: '10',
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
				function randomData() {
					return Math.round(Math.random() * 300);
				}
				let geoCoordMap = {
					上海: [121.4648, 31.2891],
					尼日利亚: [-4.388361, 11.186148],
					美国洛杉矶: [-118.24311, 34.052713],
					香港邦泰: [114.195466, 22.282751],
					美国芝加哥: [-87.801833, 41.870975],
					加纳库马西: [-4.62829, 7.72415],
					英国曼彻斯特: [-1.657222, 51.886863],
					德国汉堡: [10.01959, 54.38474],
					哈萨克斯坦阿拉木图: [45.326912, 41.101891],
					俄罗斯伊尔库茨克: [89.116876, 67.757906],
					巴西: [-48.678945, -10.493623],
					埃及达米埃塔: [31.815593, 31.418032],
					西班牙巴塞罗纳: [2.175129, 41.385064],
					柬埔寨金边: [104.88659, 11.545469],
					意大利米兰: [9.189948, 45.46623],
					乌拉圭蒙得维的亚: [-56.162231, -34.901113],
					莫桑比克马普托: [32.608571, -25.893473],
					阿尔及利亚阿尔及尔: [3.054275, 36.753027],
					阿联酋迪拜: [55.269441, 25.204514],
					匈牙利布达佩斯: [17.108519, 48.179162],
					澳大利亚悉尼: [150.993137, -33.675509],
					美国加州: [-121.910642, 41.38028],
					澳大利亚墨尔本: [144.999416, -37.781726],
					墨西哥: [-99.094092, 19.365711],
					加拿大温哥华: [-123.023921, 49.311753]
				};
				let BJData = [
					[{
						name: "尼日利亚",
						value: randomData()
					}, {
						name: "上海",
					}],
					[{
						name: "美国洛杉矶",
						value: randomData()
					}, {
						name: "上海"
					}],
					[{
						name: "香港邦泰",
						value: randomData()
					}, {
						name: "上海"
					}],
					[{
						name: "美国芝加哥",
						value: randomData()
					}, {
						name: "上海"
					}],
					[{
						name: "加纳库马西",
						value: randomData()
					}, {
						name: "上海"
					}],
					[{
						name: "英国曼彻斯特",
						value: randomData()
					}, {
						name: "上海"
					}],
					[{
						name: "德国汉堡",
						value: randomData()
					}, {
						name: "上海"
					}],
					[{
						name: "哈萨克斯坦阿拉木图",
						value: randomData()
					}, {
						name: "上海"
					}],
					[{
						name: "俄罗斯伊尔库茨克",
						value: randomData()
					}, {
						name: "上海"
					}],
					[{
						name: "巴西",
						value: randomData()
					}, {
						name: "上海"
					}],
					[{
						name: "埃及达米埃塔",
						value: randomData()
					}, {
						name: "上海"
					}],
					[{
						name: "西班牙巴塞罗纳",
						value: randomData()
					}, {
						name: "上海"
					}],
					[{
						name: "柬埔寨金边",
						value: randomData()
					}, {
						name: "上海"
					}],
					[{
						name: "意大利米兰",
						value: randomData()
					}, {
						name: "上海"
					}],
					[{
						name: "乌拉圭蒙得维的亚",
						value: randomData()
					}, {
						name: "上海"
					}],
					[{
						name: "莫桑比克马普托",
						value: randomData()
					}, {
						name: "上海"
					}],
					[{
						name: "阿尔及利亚阿尔及尔",
						value: randomData()
					}, {
						name: "上海"
					}],
					[{
						name: "阿联酋迪拜",
						value: randomData()
					}, {
						name: "上海"
					}],
					[{
						name: "匈牙利布达佩斯",
						value: randomData()
					}, {
						name: "上海"
					}],
					[{
						name: "澳大利亚悉尼",
						value: randomData()
					}, {
						name: "上海"
					}],
					[{
						name: "美国加州",
						value: randomData()
					}, {
						name: "上海"
					}],
					[{
						name: "澳大利亚墨尔本",
						value: randomData()
					}, {
						name: "上海"
					}],
					[{
						name: "墨西哥",
						value: randomData()
					}, {
						name: "上海"
					}],
					[{
						name: "加拿大温哥华",
						value: randomData()
					}, {
						name: "上海"
					}]
				];
				let convertData = function(data) {
					var res = [];
					for (var i = 0; i < data.length; i++) {
						var dataItem = data[i];
						var fromCoord = geoCoordMap[dataItem[0].name];
						var toCoord = geoCoordMap[dataItem[1].name];
						if (fromCoord && toCoord) {
							res.push([{
								coord: fromCoord,
								value: dataItem[0].value
							},
								{
									coord: toCoord
								}
							]);
						}
					}
					return res;
				};
				let convertData2 = function(data) {
					var res = [];
					for (var i = 0; i < data.length; i++) {
						var dataItem = data[i];
						var fromCoord = geoCoordMap[dataItem[1].name];
						var toCoord = geoCoordMap[dataItem[0].name];
						if (fromCoord && toCoord) {
							res.push([{
								coord: fromCoord,
								value: dataItem[0].value
							},
								{
									coord: toCoord
								}
							]);
						}
					}
					return res;
				};
				let series = [];
				[["上海", BJData]].forEach(function(item, i) {
					series.push({
							name:'攻击线1',
							type: "lines",
							zlevel: 2,
							effect: {
								show: true,
								color: "#0bc7f3",
								period: 4, //箭头指向速度，值越小速度越快
								trailLength: 0.02, //特效尾迹长度[0,1]值越大，尾迹越长重
								symbol: "arrow", //箭头图标
								symbolSize: 5 //图标大小
							},
							lineStyle: {
								normal: {
									color:'#0bc7f3',
									width: 1, //尾迹线条宽度
									opacity: 0, //尾迹线条透明度
									curveness: 0.3 //尾迹线条曲直度
								}
							},
							data: convertData(item[1])
						}, {
							name:'攻击线2',
							type: "lines",
							zlevel: 2,
							effect: {
								show: true,
								color: '#FF0000',
								period: 4, //箭头指向速度，值越小速度越快
								trailLength: 0.02, //特效尾迹长度[0,1]值越大，尾迹越长重
								symbol: "arrow", //箭头图标
								symbolSize: 5 //图标大小
							},
							lineStyle: {
								normal: {
									color: '#FF0000',
									width: 1, //尾迹线条宽度
									opacity: 0, //尾迹线条透明度
									curveness: -0.3 //尾迹线条曲直度
								}
							},
							data: convertData2(item[1])
						}, {
							
							type: "effectScatter",
							coordinateSystem: "geo",
							zlevel: 2,
							rippleEffect: {
								//涟漪特效
								period: 4, //动画时间，值越小速度越快
								brushType: "stroke", //波纹绘制方式 stroke, fill
								scale: 4 //波纹圆环最大限制，值越大波纹越大
							},
							label: {
								normal: {
									show: true,
									position: "right", //显示位置
									offset: [5, 0], //偏移设置
									formatter: "{b}" //圆环显示文字
								},
								emphasis: {
									show: true,
									color: "#FF6A6A"
								}
							},
							symbol: "circle",
							symbolSize: function(val) {
								return 8 + val[2] / 1000; //圆环大小
							},
							itemStyle: {
								normal: {
									show: true,
								},
								emphasis: {
									show: true,
									color: "#FF6A6A"
								}
							},
							data: item[1].map(function(dataItem) {
								return {
									name: dataItem[0].name,
									value: geoCoordMap[dataItem[0].name].concat([dataItem[0].value])
								};
							})
						},
						//被攻击点
						{
							type: "scatter",
							coordinateSystem: "geo",
							zlevel: 2,
							rippleEffect: {
								period: 4,
								brushType: "stroke",
								scale: 4
							},
							label: {
								normal: {
									show: true,
									color: "red",
									position: "right",
									formatter: "{b}",
								},
								emphasis: {
									show: true,
									color: "#FF6A6A"
								}
							},
							symbol: "pin",
							symbolSize: 30,
							itemStyle: {
								normal: {
									show: true,
									color: "red",
								},
								emphasis: {
									show: true,
									color: "#FF6A6A"
								}
							},
							data: [{
								name: item[0],
								value: geoCoordMap[item[0]].concat([100]),
								visualMap: false
							}]
						}
					);
				});
				let svg="path://M32.597,9.782 L30.475,11.904 C30.085,12.294 29.452,12.294 29.061,11.904 C28.671,11.513 28.671,10.880 29.061,10.489 L31.182,8.368 C31.573,7.978 32.206,7.978 32.597,8.368 C32.987,8.759 32.987,9.392 32.597,9.782 ZM30.000,30.500 C30.000,31.328 29.329,32.000 28.500,32.000 L5.500,32.000 C4.672,32.000 4.000,31.328 4.000,30.500 C4.000,29.672 4.672,29.000 5.500,29.000 L8.009,29.000 L8.009,18.244 C8.009,13.139 12.034,9.000 17.000,9.000 C21.966,9.000 25.992,13.139 25.992,18.244 L25.992,29.000 L28.500,29.000 C29.329,29.000 30.000,29.672 30.000,30.500 ZM17.867,14.444 L13.000,22.000 L17.000,22.000 L17.133,26.556 L21.000,20.000 L17.000,20.000 L17.867,14.444 ZM25.221,6.327 C25.033,6.846 24.459,7.113 23.940,6.924 C23.421,6.735 23.153,6.162 23.342,5.643 L24.368,2.823 C24.557,2.304 25.131,2.037 25.650,2.226 C26.169,2.415 26.436,2.989 26.248,3.508 L25.221,6.327 ZM17.000,5.000 C16.448,5.000 16.000,4.552 16.000,4.000 L16.000,1.000 C16.000,0.448 16.448,0.000 17.000,0.000 C17.552,0.000 18.000,0.448 18.000,1.000 L18.000,4.000 C18.000,4.552 17.552,5.000 17.000,5.000 ZM10.028,7.197 C9.509,7.386 8.935,7.118 8.746,6.599 L7.720,3.780 C7.532,3.261 7.799,2.687 8.318,2.498 C8.837,2.309 9.411,2.577 9.600,3.096 L10.626,5.915 C10.815,6.434 10.547,7.008 10.028,7.197 ZM3.354,12.268 L1.232,10.146 C0.842,9.756 0.842,9.123 1.232,8.732 C1.623,8.342 2.256,8.342 2.646,8.732 L4.768,10.854 C5.158,11.244 5.158,11.877 4.768,12.268 C4.377,12.658 3.744,12.658 3.354,12.268 Z"
				let option = {
					backgroundColor: '#000',
					tooltip: {
						trigger: "item",
						backgroundColor: "#1540a1",
						borderColor: "#FFFFCC",
						showDelay: 0,
						hideDelay: 0,
						enterable: true,
						transitionDuration: 0,
						extraCssText: "z-index:100",
						formatter: function(params, ticket, callback) {
							//根据业务自己拓展要显示的内容
							var res = "";
							var name = params.name;
							var value = params.value[params.seriesIndex + 1];
							res =
								"<span style='color:#fff;'>" +
								name +
								"</span><br/>数据：" +
								value;
							return res;
						}
					},
					visualMap: {
						//图例值控制
						show: false,
						type: 'piecewise',
						pieces: [{
							max: 80,
							color: 'red'
						},
							{
								min: 80,
								max: 120,
								color: 'yellow'
							},
							{
								min: 120,
								color: 'green'
							}
						],
						calculable: true,
					},
					geo: {
						map: "world",
						show: true,
						label: {
							emphasis: {
								show: false
							}
						},
						roam: true, //是否允许缩放
						layoutCenter: ["50%", "50%"], //地图位置
						layoutSize: "120%",
						itemStyle: {
							normal: {
								show: 'true',
								color: "#04284e", //地图背景色
								borderColor: "#5bc1c9" //省市边界线
							},
							emphasis: {
								show: 'true',
								color: "rgba(37, 43, 61, .5)" //悬浮背景
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
			this.drawEchart3();
			this.drawEchart4();
			this.drawEchart5();
			this.drawEchart6()
			this.drawEchart7()
			this.drawEchart8()
			this.drawEchart9()
			this.drawPie1();
			this.drawPie2();
			//this.drawMap();
		}
	}
</script>

<style scoped lang="less">
	@import "~@/assets/css/rowCss.less";
</style>
