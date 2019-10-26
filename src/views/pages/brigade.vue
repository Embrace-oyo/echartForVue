<template>
	<div class="brigade">
		<div class="title">
			<div class="left"></div>
			<span><i></i>士兵全息大数据管理与分析系统</span>
			<div class="right"></div>
		</div>
		<div class="content">
			<div class="leftSide">
				<div id="echart1"></div>
				<div id="echart2"></div>
				<div id="echart3"></div>
				<div id="echart4"></div>
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
				<div id="echart6"></div>
				<div id="echart7"></div>
				<div id="echart8"></div>
				<div id="echart9"></div>
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
	import 'echarts/map/js/china.js'
	export default {
		name: "brigade",
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
			  let chinaGeoCoordMap = {
				  '黑龙江': [127.9688, 45.368],
				  '大庆': [126.9688, 45.868],
				  '内蒙古': [110.3467, 41.4899],
				  "吉林": [125.8154, 44.2584],
				  '北京': [116.4551, 40.2539],
				  "辽宁": [123.1238, 42.1216],
				  "河北": [114.4995, 38.1006],
				  "天津": [117.4219, 39.4189],
				  "山西": [112.3352, 37.9413],
				  "陕西": [109.1162, 34.2004],
				  "甘肃": [103.5901, 36.3043],
				  "宁夏": [106.3586, 38.1775],
				  "青海": [101.4038, 36.8207],
				  "新疆": [87.9236, 43.5883],
				  "西藏": [91.11, 29.97],
				  "四川": [103.9526, 30.7617],
				  "重庆": [108.384366, 30.439702],
				  "山东": [117.1582, 36.8701],
				  "河南": [113.4668, 34.6234],
				  "江苏": [118.8062, 31.9208],
				  "安徽": [117.29, 32.0581],
				  "湖北": [114.3896, 30.6628],
				  "浙江": [119.5313, 29.8773],
				  "福建": [119.4543, 25.9222],
				  "江西": [116.0046, 28.6633],
				  "湖南": [113.0823, 28.2568],
				  "贵州": [106.6992, 26.7682],
				  "云南": [102.9199, 25.4663],
				  "广东": [113.12244, 23.009505],
				  "广西": [108.479, 23.1152],
				  "海南": [110.3893, 19.8516],
				  '上海': [121.4648, 31.2891]
			  };
			  let chinaDatas = [
				  [{
					  name: '黑龙江',
					  value: 0.88
				  }],
				  [{
					  name: '内蒙古',
					  value: 0.12
				  }],
				  [{
					  name: '吉林',
					  value: 0.89
				  }],
				  [{
					  name: '辽宁',
					  value: 0.86
				  }],
		/*		  [{
					  name: '河北',
					  value: 0.88
				  }],
				  [{
					  name: '北京',
					  value: 0.83
				  }],
				  [{
					  name: '天津',
					  value: 0.71
				  }],
				  [{
					  name: '山西',
					  value: 0.63
				  }],
				  [{
					  name: '陕西',
					  value: 0.56
				  }],*/
				  [{
					  name: '宁夏',
					  value: 0.17
				  }],
				  [{
					  name: '云南',
					  value: 0.11
				  }],
				  [{
					  name: '四川',
					  value: 1
				  }],
				  [{
					  name: '重庆',
					  value: 0.80
				  }],
/*				  [{
					  name: '山东',
					  value: 0.77
				  }],
				  [{
					  name: '河南',
					  value: 0.75
				  }],
				  [{
					  name: '江苏',
					  value: 0.88
				  }],*/
				  [{
					  name: '安徽',
					  value: 0.73
				  }],
/*				  [{
					  name: '湖北',
					  value: 0.75
				  }],*/
	/*			  [{
					  name: '浙江',
					  value: 0.82
				  }],*/
				  [{
					  name: '福建',
					  value: 0.67
				  }],
	/*			  [{
					  name: '江西',
					  value: 0.71
				  }],*/
				  [{
					  name: '湖南',
					  value: 0.75
				  }],
				  [{
					  name: '广东',
					  value: 0.78
				  }],
				  [{
					  name: '海南',
					  value: 0.1
				  }],
				  [{
					  name: '新疆',
					  value: 0
				  }],
/*				  [{
					  name: '上海',
					  value: 0.91
				  }]*/
			  ];
			  let convertData = function(data) {
				  var res = [];
				  for (var i = 0; i < data.length; i++) {
					  var dataItem = data[i];
					  var fromCoord = chinaGeoCoordMap[dataItem[0].name];
					  var toCoord = [126.9688, 45.868];
					  if (fromCoord && toCoord) {
						  res.push([{
							  coord: fromCoord,
							  value: dataItem[0].value
						  }, {
							  coord: toCoord,
						  }]);
					  }
				  }
				  return res;
			  };
			  var series = [];
			  [['大庆', chinaDatas]].forEach(function(item, i) {
				  series.push(
				  	{
						  type: 'lines',
						  zlevel: 2,
						  effect: {
							  show: true,
							  period: 4, //箭头指向速度，值越小速度越快
							  trailLength: 0.02, //特效尾迹长度[0,1]值越大，尾迹越长重
							  symbol: 'rect', //箭头图标
							  symbolSize: 5, //图标大小
						  },
						  lineStyle: {
							  normal: {
							  	color: '#1ab894',
								  width: 1, //尾迹线条宽度
								  opacity: 1, //尾迹线条透明度
								  curveness: .3 //尾迹线条曲直度
							  }
						  },
						  data: convertData(item[1])
					  },
					  {
						  type: 'effectScatter',
						  coordinateSystem: 'geo',
						  zlevel: 2,
						  rippleEffect: { //涟漪特效
							  period: 4, //动画时间，值越小速度越快
							  brushType: 'fill', //波纹绘制方式 stroke, fill
							  scale: 2 //波纹圆环最大限制，值越大波纹越大
						  },
						  label: {
							  normal: {
								  show: true,
								  position: 'right', //显示位置
								  offset: [5, 0], //偏移设置
								  formatter: function(params) { //圆环显示文字
									  return params.data.name;
								  },
								  fontSize: 13
							  },
							  emphasis: {
								  show: true
							  }
						  },
						  symbol: 'circle',
						  symbolSize: function(val) {
							  return 5 + val[2] * 5; //圆环大小
						  },
						  itemStyle: {
							  normal: {
								  show: false,
								  color: '#1de9b6'
							  }
						  },
						  data: item[1].map(function(dataItem) {
							  return {
								  name: dataItem[0].name,
								  value: chinaGeoCoordMap[dataItem[0].name].concat([dataItem[0].value])
							  };
						  }),
					  },
					  //被攻击点
					  {
						  type: 'scatter',
						  coordinateSystem: 'geo',
						  zlevel: 2,
						  rippleEffect: {
						  	color: '#fff',
							  period: 4,
							  brushType: 'stroke',
							  scale: 4
						  },
						  label: {
							  normal: {
								  show: true,
								  position: 'right',
								  //offset:[5, 0],
								  color: '#fff',
								  formatter: '{b}',
								  textStyle: {
									  color: "#1de9b6"
								  }
							  },
							  emphasis: {
								  show: true,
								  color: "#fff"
							  }
						  },
						  itemStyle: {
						  	show: false,
						    color: 'rgba(0,0,0,0)'
						  },
						  symbol: 'pin',
						  symbolSize: 20,
						  data: [{
							  name: item[0],
							  value: chinaGeoCoordMap[item[0]].concat([10]),
						  }],
					  }
				  );
			  });
			  let option = {
				  tooltip: {
					  trigger: 'item',
					  backgroundColor: 'rgba(166, 200, 76, 0)',
					  borderColor: '#FFFFCC',
					  showDelay: 0,
					  hideDelay: 0,
					  enterable: true,
					  transitionDuration: 0,
					  extraCssText: 'z-index:100',
					  formatter: function(params, ticket, callback) {
						  //根据业务自己拓展要显示的内容
						  var res = "";
						  var name = params.name;
						  var value = params.value[params.seriesIndex + 1];
						  res = "<span style='color:#fff;'>" + name + "</span><br/>数据：" + value;
						  return res;
					  }
				  },
				  backgroundColor: "rgba(0,0,0,0)",
	/*			  visualMap: { //图例值控制
					  min: 0,
					  max: 1,
					  calculable: true,
					  show: false,
					  //color: ['#f44336', '#fc9700', '#ffde00', '#ffde00', '#00eaff'],
					  textStyle: {
						  color: '#fff'
					  }
				  },*/
				  geo: {
					  map: 'china',
					  zoom: 1.2,
					  label: {
						  emphasis: {
							  show: false
						  }
					  },
					  roam: false, //是否允许缩放
					  itemStyle: {
						  normal: {
							  color: 'rgba(56, 141, 120, 0.2)', //地图背景色
							  borderColor: '#8ce1ef', //省市边界线00fcff 516a89
							  borderWidth: 1,
							  shadowColor: 'rgba(245,128,128, 0.5)',
							  shadowBlur: 2,
						  },
						  emphasis: {
							  color: 'rgba(56, 141, 120, 0.5)' //悬浮背景
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
			this.drawMap();
		}
  }
</script>

<style scoped lang="less">
	@import "~@/assets/css/css.less";
</style>
