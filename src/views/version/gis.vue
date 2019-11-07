<template>
	<div class="box">
		<div class="title">
			<div class="left"></div>
			<span><i></i>士兵全息大数据管理与分析系统</span>
			<div class="right"></div>
		</div>
		<div class="gis" id="gis" v-show="index === 0"></div>
		<div class="gis" id="gis2" v-show="index === 1"></div>
		<button @click="clickMb">场地人员分布</button>
		<button @click="clickMb" style="top: 20%">人员行动路线</button>
	</div>
</template>

<script>
		import hike from '@/assets/json/hike.geo.json'
		export default {
				name: "gis",
				data(){
						return {
								index: 0,
								isAct: false,
						}
				},
				methods: {
						mapBox(){
								let myChart = this.$echarts.init(document.getElementById("gis"));
								let geoCoordMap = {
										'营房': [-74.00554,40.71335],
										'重要装备仓库': [-74.005441,40.714129],
										'指挥部': [-74.005019,40.714683],
										'训练场': [-74.004139,40.713582],
								};
								let CDCData = [
										[{
												name: '营房'
										}, {
												name: '营房',
												value: 100
										}],
										[{
												name: '营房'
										}, {
												name: '重要装备仓库',
												value: 100
										}],
										[{
												name: '营房'
										}, {
												name: '指挥部',
												value: 100
										}],
										[{
												name: '营房'
										}, {
												name: '训练场',
												value: 100
										}],

								];
								let color = ['#3ed4ff', '#ffa022', '#a6c84c'];
								let planePath = 'path://M.6,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705';
								let convertData = function(data) {
										let res = [];
										for (let i = 0; i < data.length; i++) {
												let dataItem = data[i];
												let fromCoord = geoCoordMap[dataItem[0].name];
												let toCoord = geoCoordMap[dataItem[1].name];
												if (fromCoord && toCoord) {
														res.push(
																{
																		coords:[fromCoord,toCoord],
																		value: 10,
																}
														)
												}
										}
										return res;
								};
								let series = [];
								[['营房', CDCData]].forEach(function(item, i) {
										series.push(
												/* 柱子 */
												{
														type: 'bar3D',
														coordinateSystem: 'mapbox',
														shading: 'lambert',
														minHeight: 50,
														barSize: 0.1,
														silent: true,
														itemStyle: {
																color: '#1fe133',
																opacity: 1
														},
														label: {
																show: true,
																formatter: '{b}',
																textStyle: {
																		color: '#fff',
																		backgroundColor: 'rgba(0,0,0,0)'
																}
														},
														data: item[1].map(function(dataItem) {
																return {
																		name: dataItem[1].name,
																		value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value]),
																};
														})
												},
										);
								});
								let option = {
										mapbox: {
												// 海拔的缩放
												altitudeScale: 1,
												center: [-74.005262,40.713644],
												zoom: 16,
												pitch: 45,
												bearing: -17.6,
												style: 'mapbox://styles/mapbox/dark-v10',
												antialias: true
										},
										series: series
								}
								myChart.setOption(option);
								let map = myChart.getModel().getComponent('mapbox3D').getMapbox();
								map.addControl(new MapboxLanguage({
										defaultLanguage: 'zh'
								}));
								function rotateCamera(timestamp) {
										map.rotateTo((timestamp / 100) % 360, {duration: 0});
										requestAnimationFrame(rotateCamera);
								}
								map.on('load', function () {
										rotateCamera(0);
										let layers = map.getStyle().layers;
										for (let i = 0; i < layers.length; i++) {
												if (layers[i].type === 'symbol' && layers[i].layout['text-field']) {
														map.removeLayer(layers[i].id);
												}
										}
										map.addLayer({
												'id': '3d-buildings',
												'source': 'composite',
												'source-layer': 'building',
												'filter': ['==', 'extrude', 'true'],
												'type': 'fill-extrusion',
												'minzoom': 15,
												'paint': {
														'fill-extrusion-color': '#aaa',
														'fill-extrusion-height': [
																"interpolate", ["linear"], ["zoom"],
																15, 0,
																15.05, ["get", "height"]
														],
														'fill-extrusion-base': [
																"interpolate", ["linear"], ["zoom"],
																15, 0,
																15.05, ["get", "min_height"]
														],
														'fill-extrusion-opacity': .6
												}
										});
								});
						},
						mapBox2(){
							this.isAct = true;
							let map = new mapboxgl.Map({
									container: 'gis2',
									style: 'mapbox://styles/mapbox/satellite-v9',
									zoom: 0
							});
							map.on('load', function () {
									let coordinates = hike.features[0].geometry.coordinates;
									hike.features[0].geometry.coordinates = [coordinates[0]];
									map.addSource('trace', { type: 'geojson', data: hike });
									map.addLayer({
											"id": "trace",
											"type": "line",
											"source": "trace",
											"paint": {
													"line-color": "yellow",
													"line-opacity": 0.75,
													"line-width": 5
											}
									});
									map.jumpTo({ 'center': coordinates[0], 'zoom': 14 });
									map.setPitch(30);
									let i = 0;
									let timer = window.setInterval(function() {
											if (i < coordinates.length) {
													hike.features[0].geometry.coordinates.push(coordinates[i]);
													map.getSource('trace').setData(hike);
													map.panTo(coordinates[i]);
													i++;
											} else {
													window.clearInterval(timer);
											}
									}, 10);
							});
						},
						clickMb(){
								if(this.index === 0){
									this.index = 1
									if(!this.isAct) {
											this.$nextTick(() => {
													this.mapBox2();
											})
									}
								}else if(this.index === 1){
									this.index = 0;
								}
						}
				},
				mounted() {
						this.mapBox();
				}
		}
</script>

<style scoped lang="less">
	.box{
		position: relative;
		width: 100%;
		height: 100%;
		overflow: hidden;
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
		.gis{
			position: absolute;
			width: 96%;
			height: 90%;
			left: 2%;
			top: 9%;
			border: 1px solid rgba(56, 141, 120, 0.5);
		}
		button{
			display: block;
			position: absolute;
			right: 4%;
			top: 11%;
			width: 200px;
			height: 60px;
			line-height: 60px;
			background-color: rgba(56, 141, 120, 0.8);
			border: 1px solid rgba(56, 141, 120, 0.5);
			color: #81939b;
			font-size: 18px;
			border-radius: 5px;
			outline: none;
			text-align: center;
			cursor: pointer;
		}
	}
</style>
