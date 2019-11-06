<template>
    <div class="migration" id="migration"></div>
</template>

<script>
    import 'echarts/map/js/china.js'
    export default {
        name: "migration",
        methods: {
            drawBox(){
                let chinaGeoCoordMap = {
                    '重庆': [108.384366, 30.439702],
                    '黑龙江': [127.9688, 45.368],
                    '内蒙古': [110.3467, 41.4899],
                    '吉林': [125.8154, 44.2584],
                    '辽宁': [123.1238, 42.1216],
                    '河北': [114.4995, 38.1006],
                    '天津': [117.4219, 39.4189],
                    '山西': [112.3352, 37.9413],
                    '陕西': [109.1162, 34.2004],
                    '甘肃': [103.5901, 36.3043],
                    '宁夏': [106.3586, 38.1775],
                    '青海': [101.4038, 36.8207],
                    '新疆': [87.9236, 43.5883],
                    '西藏': [91.11, 29.97],
                    '四川': [103.9526, 30.7617],
                    '山东': [117.1582, 36.8701],
                    '河南': [113.4668, 34.6234],
                    '江苏': [118.8062, 31.9208],
                    '安徽': [117.29, 32.0581],
                    '湖北': [114.3896, 30.6628],
                    '浙江': [119.5313, 29.8773],
                    '福建': [119.4543, 25.9222],
                    '江西': [116.0046, 28.6633],
                    '湖南': [113.0823, 28.2568],
                    '贵州': [106.6992, 26.7682],
                    '云南': [102.9199, 25.4663],
                    '广东': [113.12244, 23.009505],
                    '广西': [108.479, 23.1152],
                    '海南': [110.3893, 19.8516],
                    '上海': [121.4648, 31.2891]
                };
                let myChart = this.$echarts.init(document.getElementById("migration"));
                let convertData = function(data) {
                    let res = [];
                    for (let i = 0; i < data.length; i++) {
                        let dataItem = data[i];
                        let toCoord = chinaGeoCoordMap[dataItem[0].name];
                        let fromCoord = [108.384366, 30.439702];
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
                let chinaDatas = [
                    [{
                        name: '重庆',
                        value: 1
                    }],
                    [{
                        name: '黑龙江',
                        value: 0
                    }],
                    [{
                        name: '内蒙古',
                        value: 0
                    }],
                    [{
                        name: '吉林',
                        value: 0
                    }],
                    [{
                        name: '辽宁',
                        value: 0
                    }],
                    [{
                        name: '河北',
                        value: 0
                    }],
                    [{
                        name: '天津',
                        value: 0
                    }],
                    [{
                        name: '山西',
                        value: 0
                    }],
                    [{
                        name: '陕西',
                        value: 0
                    }],
                ];
                let chinaDatas2 = [
                    [{
                        name: '重庆',
                        value: 1
                    }],
                    [{
                        name: '甘肃',
                        value: 0
                    }],
                    [{
                        name: '宁夏',
                        value: 0
                    }],
                    [{
                        name: '青海',
                        value: 0
                    }],
                    [{
                        name: '新疆',
                        value: 0
                    }],
                    [{
                        name: '西藏',
                        value: 0
                    }],
                    [{
                        name: '四川',
                        value: 0
                    }],
                    [{
                        name: '山东',
                        value: 0
                    }],
                ];
                let chinaDatas3 = [
                    [{
                        name: '重庆',
                        value: 1
                    }],
                    [{
                        name: '河南',
                        value: 0
                    }],
                    [{
                        name: '江苏',
                        value: 0
                    }],
                    [{
                        name: '安徽',
                        value: 0
                    }],
                    [{
                        name: '湖北',
                        value: 0
                    }],
                    [{
                        name: '浙江',
                        value: 0
                    }],
                    [{
                        name: '福建',
                        value: 0
                    }],
                    [{
                        name: '江西',
                        value: 0
                    }],
                ];
                let chinaDatas4 = [
                    [{
                        name: '重庆',
                        value: 1
                    }],
                    [{
                        name: '湖南',
                        value: 0
                    }],
                    [{
                        name: '贵州',
                        value: 0
                    }],
                    [{
                        name: '云南',
                        value: 0
                    }],
                    [{
                        name: '广东',
                        value: 0
                    }],
                    [{
                        name: '广西',
                        value: 0
                    }],
                    [{
                        name: '海南',
                        value: 0
                    }],
                    [{
                        name: '上海',
                        value: 0
                    }]
                ];
                let series = [];
                let series2 = [];
                let series3 = [];
                let series4 = [];
                [['重庆', chinaDatas]].forEach(function(item, i) {
                    series.push(
                        {
                            type: 'lines',
                            zlevel: 2,
                            effect: {
                                show: true,
                                period: 4, //箭头指向速度，值越小速度越快
                                trailLength: 0.02, //特效尾迹长度[0,1]值越大，尾迹越长重
                                symbol: 'arrow', //箭头图标
                                symbolSize: 3, //图标大小
                            },
                            lineStyle: {
                                normal: {
                                    color: '#1de9b6',
                                    width: 0.1, //尾迹线条宽度
                                    opacity: 0.5, //尾迹线条透明度
                                    curveness: .3 //尾迹线条曲直度
                                }
                            },
                            data: convertData(item[1])
                        },
                        {
                            type: 'effectScatter',
                            coordinateSystem: 'geo',
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
                                    color: '#1de9b6',
                                    shadowBlur: 10,
                                    shadowColor: '#1de9b6'
                                }
                            },
                            zlevel: 1,
                            data: item[1].map(function(dataItem) {
                                return {
                                    name: dataItem[0].name,
                                    value: chinaGeoCoordMap[dataItem[0].name].concat([dataItem[0].value])
                                };
                            }),
                        },
                    );
                });
                [['重庆', chinaDatas2]].forEach(function(item, i) {
                    series2.push(
                        {
                            type: 'lines',
                            zlevel: 2,
                            effect: {
                                show: true,
                                period: 4, //箭头指向速度，值越小速度越快
                                trailLength: 0.02, //特效尾迹长度[0,1]值越大，尾迹越长重
                                symbol: 'arrow', //箭头图标
                                symbolSize: 3, //图标大小
                            },
                            lineStyle: {
                                normal: {
                                    color: '#f46e36',
                                    width: 0.1, //尾迹线条宽度
                                    opacity: 0.5, //尾迹线条透明度
                                    curveness: .3 //尾迹线条曲直度
                                }
                            },
                            data: convertData(item[1])
                        },
                        {
                            type: 'effectScatter',
                            coordinateSystem: 'geo',
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
                                    color: '#f46e36',
                                    shadowBlur: 10,
                                    shadowColor: '#f46e36'
                                }
                            },
                            zlevel: 1,
                            data: item[1].map(function(dataItem) {
                                return {
                                    name: dataItem[0].name,
                                    value: chinaGeoCoordMap[dataItem[0].name].concat([dataItem[0].value])
                                };
                            }),
                        },
                    );
                });
                [['重庆', chinaDatas3]].forEach(function(item, i) {
                    series3.push(
                        {
                            type: 'lines',
                            zlevel: 2,
                            effect: {
                                show: true,
                                period: 4, //箭头指向速度，值越小速度越快
                                trailLength: 0.02, //特效尾迹长度[0,1]值越大，尾迹越长重
                                symbol: 'arrow', //箭头图标
                                symbolSize: 3, //图标大小
                            },
                            lineStyle: {
                                normal: {
                                    color: '#5dbd32',
                                    width: 0.1, //尾迹线条宽度
                                    opacity: 0.5, //尾迹线条透明度
                                    curveness: .3 //尾迹线条曲直度
                                }
                            },
                            data: convertData(item[1])
                        },
                        {
                            type: 'effectScatter',
                            coordinateSystem: 'geo',
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
                                    color: '#5dbd32',
                                    shadowBlur: 10,
                                    shadowColor: '#5dbd32'
                                }
                            },
                            zlevel: 1,
                            data: item[1].map(function(dataItem) {
                                return {
                                    name: dataItem[0].name,
                                    value: chinaGeoCoordMap[dataItem[0].name].concat([dataItem[0].value])
                                };
                            }),
                        },
                    );
                });
                [['重庆', chinaDatas4]].forEach(function(item, i) {
                    series4.push(
                        {
                            type: 'lines',
                            zlevel: 2,
                            effect: {
                                show: true,
                                period: 4, //箭头指向速度，值越小速度越快
                                trailLength: 0.02, //特效尾迹长度[0,1]值越大，尾迹越长重
                                symbol: 'arrow', //箭头图标
                                symbolSize: 3, //图标大小
                            },
                            lineStyle: {
                                normal: {
                                    color: '#a6c84c',
                                    width: 0.1, //尾迹线条宽度
                                    opacity: 0.5, //尾迹线条透明度
                                    curveness: .3 //尾迹线条曲直度
                                }
                            },
                            data: convertData(item[1])
                        },
                        {
                            type: 'effectScatter',
                            coordinateSystem: 'geo',
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
                                    color: '#a6c84c',
                                    shadowBlur: 10,
                                    shadowColor: '#a6c84c'
                                }
                            },
                            zlevel: 1,
                            data: item[1].map(function(dataItem) {
                                return {
                                    name: dataItem[0].name,
                                    value: chinaGeoCoordMap[dataItem[0].name].concat([dataItem[0].value])
                                };
                            }),
                        },
                    );
                });
                let option = {
                    timeline: {
                        data: ['2016士兵外出趋势', '2017士兵外出趋势', '2018士兵外出趋势', '2019士兵外出趋势'],
                        axisType: 'category',
                        autoPlay: true,
                        playInterval: 3000,
                        left: '10%',
                        right: '10%',
                        bottom: '3%',
                        width: '80%',
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
                            color: '#fff'
                        },
                        checkpointStyle: {
                            color: '#55ff26',
                            borderColor: '#55ff26',
                            borderWidth: 2
                        },
                        emphasis: {
                            itemStyle: {
                                color: '#55ff26'
                            }
                        },
                        controlStyle: {
                            showNextBtn: true,
                            showPrevBtn: true,
                            normal: {
                                color: '#fff',
                                borderColor: '#fff'
                            },
                            emphasis: {
                                color: '#fff',
                                borderColor: '#fff'
                            }
                        },
                    },
                    baseOption: {
                        title: {
                            text: '士兵外出趋势图',
                            left: 'center',
                            top: 50,
                            textStyle: {
                                color: '#fff',
                                fontSize: 30,
                            }
                        },
                        geo: {
                            map: 'china',
                            roam: true,
                            zoom: 1.5,
                            label: {
                                emphasis: {
                                    show: false
                                }
                            },
                            itemStyle: {
                                borderColor: 'rgba(56, 141, 120, 0.5)',
                                borderWidth: 1,
                                areaColor: {
                                    type: 'radial',
                                    x: 0.5,
                                    y: 0.5,
                                    r: 0.8,
                                    colorStops: [{
                                        offset: 0,
                                        color: 'rgba(56, 141, 120, 0)' // 0% 处的颜色
                                    }, {
                                        offset: 1,
                                        color: 'rgba(56, 141, 120, 0.2)' // 100% 处的颜色
                                    }],
                                    globalCoord: false // 缺省为 false
                                },
                                shadowColor: 'rgba(56, 141, 120, 1)',
                                shadowOffsetX: -2,
                                shadowOffsetY: 2,
                                shadowBlur: 10,
                                emphasis: {
                                    areaColor: 'rgba(56, 141, 120, .5)',
                                    borderWidth: 0
                                }
                            }
                        },
                        animation: true,
                        animationDuration: 1000,
                        animationEasing: 'cubicInOut',
                        animationDurationUpdate: 1000,
                        animationEasingUpdate: 'cubicInOut',
                    },
                    options: [
                        {
                            series: series
                        },
                        {
                            series: series2
                        },
                        {
                            series: series3
                        },
                        {
                            series: series4
                        }
                    ],
                }
                myChart.setOption(option);
            }
        },
        mounted() {
            this.drawBox();
        }
    }
</script>

<style scoped lang="less">
    .migration{
        width: 100%;
        height: 100%;
    }
</style>