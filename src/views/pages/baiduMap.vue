<template>
    <div class="test">
        <div id="baiduBox"></div>
    </div>
</template>

<script>
    import 'echarts/extension/bmap/bmap.js'
    export default {
        name: "test",
        methods: {
            drawBaidu(){
                let myChart = this.$echarts.init(document.getElementById("baiduBox"));
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
                let color = ['#3ed4ff', '#ffa022', '#a6c84c'];
                let series = [];
                [['77旅', CDCData]].forEach(function(item, i) {
                    series.push(
                        {
                            name: item[0],
                            type: 'lines',
                            coordinateSystem: 'bmap',
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
                            coordinateSystem: 'bmap',
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
                            coordinateSystem: 'bmap',
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
                    bmap: {
                        center: [104.027064,30.60906], // 中心位置坐标
                        zoom: 7, // 地图缩放比例
                        roam: true, // 开启用户缩放
                    },
                    series: series
                };
                myChart.setOption(option);
                // 百度地图实例
                let bmap = myChart.getModel().getComponent('bmap').getBMap();
                bmap.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
                bmap.setMapType(BMAP_HYBRID_MAP);
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
        #baiduBox{
            width: 800px;
            height: 800px;
        }
    }
</style>