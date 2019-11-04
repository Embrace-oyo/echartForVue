<template>
    <div class="test">
        <div id="map"></div>
        <div id="map2"></div>
    </div>
</template>

<script>
    export default {
        name: "test",
        methods: {
            drawBaidu(){
                let myChart = this.$echarts.init(document.getElementById("map"));
                let geoCoordMap = {
                    '二团': [103.9526, 30.7617],
                    '一营': [105.4578,28.493],
                    '二营': [99.9207,31.0803],
                    '三营': [107.6111,31.333],
                    '通讯连': [101.9641,27.6746],
                    '后勤保障营': [102.4805,32.4536],
                    '侦查连': [105.6885,32.2284],
                };
                let CDCData = [
                    [{
                        name: '二团'
                    }, {
                        name: '二团',
                        value: 200
                    }],
                    [{
                        name: '二团'
                    }, {
                        name: '一营',
                        value: 100
                    }],
                    [{
                        name: '二团'
                    }, {
                        name: '二营',
                        value: 100
                    }],
                    [{
                        name: '二团'
                    }, {
                        name: '三营',
                        value: 100
                    }],
                    [{
                        name: '二团'
                    }, {
                        name: '通讯连',
                        value: 100
                    }],
                    [{
                        name: '二团'
                    }, {
                        name: '后勤保障营',
                        value: 100
                    }],
                    [{
                        name: '二团'
                    }, {
                        name: '侦查连',
                        value: 100
                    }],
                ];
                let color = ['#3ed4ff', '#ffa022', '#a6c84c'];
                let planePath = 'path://M.6,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705';
                let convertData = function(data) {
                    var res = [];
                    for (var i = 0; i < data.length; i++) {
                        var dataItem = data[i];
                        var fromCoord = geoCoordMap[dataItem[0].name];
                        var toCoord = geoCoordMap[dataItem[1].name];
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
                [['二团', CDCData]].forEach(function(item, i) {
                    series.push(
                        /* 飞线轨迹 */
                        {
                            type: 'lines3D',
                            coordinateSystem: 'mapbox',
                            effect: {
                                show: true,
                                constantSpeed: 15,
                                trailWidth: 2,
                                trailLength: 0.3,
                                trailOpacity: 1,
                                spotIntensity: 10
                            },
                            polyline: true,
                            zlevel: 10,
                            lineStyle: {
                                normal: {
                                    color: '#fff',
                                    width: 1,
                                    opacity: 0.4,
                                    curveness: 0.2
                                }
                            },
                            data: convertData(item[1])
                        },
                        /* 飞线 */
                        {
                            name: item[0],
                            type: 'lines3D',
                            coordinateSystem: 'mapbox',
                            polyline: true,
                            zlevel: 10,
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
                        /* 坐标点 */
                        {
                            name: item[0],
                            type: 'scatter3D',
                            coordinateSystem: 'mapbox',
                            symbol: 'pin',
                            zlevel: 10,
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
                            blendMode: 'lighter',
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
                                    value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value]),
                                };
                            })
                        }
                       /* {
                            type: 'bar3D',
                            coordinateSystem: 'mapbox',
                            shading: 'lambert',
                            minHeight: 50,
                            barSize: 0.3,
                            silent: true,
                            data: [
                                [103.9526, 30.7617,100],
                                [-85.5,73.5,100],
                                [-78,73,100],
                            ]
                        }*/
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
                    mapbox: {
                        center: [104.082256,30.720392],
                        zoom: 5,
                        pitch: 60,
                        bearing: 0,
                        // 海拔的缩放
                        altitudeScale: 3e2,
                        style: 'mapbox://styles/mapbox/satellite-v9',
                        //style: 'mapbox://styles/mapbox/dark-v10',
                    },
                    series: series
                }
                myChart.setOption(option);
                let map = myChart.getModel().getComponent('mapbox3D').getMapbox();
                map.on('load', function () {
                    map.addSource('dem', {
                        "type": "raster-dem",
                        "url": "mapbox://mapbox.terrain-rgb"
                    });
                    map.addLayer({
                        "id": "hillshading",
                        "source": "dem",
                        "type": "hillshade"
                    }, 'waterway-river-canal-shadow');
                });
                map.addControl(new MapboxLanguage({
                    defaultLanguage: 'zh'
                }));
            },
            drawBaidu2(){
                let myChart = this.$echarts.init(document.getElementById("map2"));
                let geoCoordMap = {
                    '旅': [-74.0066, 40.7135],
                    '一团': [-74.006429,40.714146],
                    '二团': [-74.007768,40.713298],
                    '三团': [-74.008109,40.714607],
                    '通讯营': [-74.00483,40.713305],
                    '后勤保障营': [-74.005643,40.714293],
                    '侦查连': [-74.008738,40.714354],
                };
                let CDCData = [
                    [{
                        name: '旅'
                    }, {
                        name: '旅',
                        value: 100
                    }],
                    [{
                        name: '旅'
                    }, {
                        name: '一团',
                        value: 100
                    }],
                    [{
                        name: '旅'
                    }, {
                        name: '二团',
                        value: 100
                    }],
                    [{
                        name: '旅'
                    }, {
                        name: '三团',
                        value: 100
                    }],
                    [{
                        name: '旅'
                    }, {
                        name: '通讯营',
                        value: 100
                    }],
                    [{
                        name: '旅'
                    }, {
                        name: '后勤保障营',
                        value: 100
                    }],
                    [{
                        name: '旅'
                    }, {
                        name: '侦查连',
                        value: 100
                    }],
                ];
                let color = ['#3ed4ff', '#ffa022', '#a6c84c'];
                let planePath = 'path://M.6,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705';
                let convertData = function(data) {
                    var res = [];
                    for (var i = 0; i < data.length; i++) {
                        var dataItem = data[i];
                        var fromCoord = geoCoordMap[dataItem[0].name];
                        var toCoord = geoCoordMap[dataItem[1].name];
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
                [['旅', CDCData]].forEach(function(item, i) {
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
                               color: '#01a6e1',
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
                        /* 坐标点 */
                       /* {
                            name: item[0],
                            type: 'scatter3D',
                            coordinateSystem: 'mapbox',
                            zlevel: 10,
                            symbolSize: 20,
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
                            blendMode: 'lighter',
                            itemStyle: {
                                normal: {
                                    color: color[i]
                                }
                            },
                            data: item[1].map(function(dataItem) {
                                console.log(geoCoordMap[dataItem[1].name][0], geoCoordMap[dataItem[1].name].concat([dataItem[1].value]));
                                return {
                                    name: dataItem[1].name,
                                    value: [geoCoordMap[dataItem[1].name][0] + 0.0001, geoCoordMap[dataItem[1].name][1] + 0.0001, dataItem[1].value],
                                };
                            })
                        }*/
                    );
                });
                let option = {
                    mapbox: {
                        // 海拔的缩放
                        altitudeScale: 1,
                        center: [-74.0066, 40.7135],
                        zoom: 15.3,
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
                    var layers = map.getStyle().layers;
                    for (var i = 0; i < layers.length; i++) {
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
            }
        },
        mounted() {
            this.drawBaidu();
            this.drawBaidu2();
        }
    }
</script>

<style scoped lang="less">
    .test{
        width: 100vw;
        height: 100vh;
        overflow: hidden;
        #map{
            width: 800px;
            height: 800px;
            float: left;
        }
        #map2{
            width: 800px;
            height: 800px;
            float: left;
            margin-left: 10px;
        }
    }
</style>