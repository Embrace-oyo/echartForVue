<template>
    <div class="test">
        <div id="map"></div>
    </div>
</template>

<script>
    export default {
        name: "test",
        methods: {
            drawBaidu(){
                mapboxgl.accessToken = 'pk.eyJ1IjoiZW1icmFjZSIsImEiOiJjazI5ODVhazIzZTN2M2htdnp4djUxbjN5In0.8fTeijCVdOx6tmDdDimkDg';
                mapboxgl.setRTLTextPlugin('@/assets/script/mapbox-gl-rtl-text.js');
                let myChart = this.$echarts.init(document.getElementById("map"));
                let geoCoordMap = {
                    '77旅': [103.9526, 30.7617],
                    '一团': [105.4578,28.493],
                    '二团': [99.9207,31.0803],
                    '三团': [107.6111,31.333],
                    '通讯营': [101.9641,27.6746],
                    '后勤保障营': [102.4805,32.4536],
                    '侦查连': [105.6885,32.2284],
                };
                let CDCData = [
                    [{
                        name: '77旅'
                    }, {
                        name: '77旅',
                        value: 200
                    }],
                    [{
                        name: '77旅'
                    }, {
                        name: '一团',
                        value: 100
                    }],
                    [{
                        name: '77旅'
                    }, {
                        name: '二团',
                        value: 100
                    }],
                    [{
                        name: '77旅'
                    }, {
                        name: '三团',
                        value: 100
                    }],
                    [{
                        name: '77旅'
                    }, {
                        name: '通讯营',
                        value: 100
                    }],
                    [{
                        name: '77旅'
                    }, {
                        name: '后勤保障营',
                        value: 100
                    }],
                    [{
                        name: '77旅'
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
                                    coords:[[fromCoord],[toCoord]],
                                    value: 10,
                                    name: '123',
                                    lineStyle: {
                                        color: 'red'
                                    }
                                }
                            )
                        }
                    }
                    return res;
                };
                let series = [];
                [['二团', CDCData]].forEach(function(item, i) {
                    console.log(convertData(item[1]))
                    series.push(
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
                            blendMode: 'lighter',
                            polyline: true,
                            lineStyle: {
                                width: 0.1,
                                color: '#ff270a',
                                opacity: 0
                            },
                            data: convertData(item[1])
                        },
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
                            blendMode: 'lighter',
                            polyline: true,
                            lineStyle: {
                                width: 0.1,
                                color: '#ff270a',
                                opacity: 0
                            },
                            data: convertData(item[1])
                        },
                        {
                            name: item[0],
                            type: 'scatter3D',
                            coordinateSystem: 'mapbox',
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
                                    value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value]),
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
                    mapbox: {
                        center: [104.082256,30.720392],
                        zoom: 5,
                        //style: 'mapbox://styles/mapbox/satellite-v9',
                        style: 'mapbox://styles/mapbox/cjaudgl840gn32rnrepcb9b9g',
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
            }
        },
        mounted() {
            this.drawBaidu();
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
        }
    }
</style>