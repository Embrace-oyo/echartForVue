import echarts from 'echarts'

const install = function (Vue) {
    Object.defineProperties(Vue.prototype, {
        $chart: {
            get() {
                return {
                    /**
                     * 自定义data
                     * @param id
                     * @param data
                     */
                    custom: function (id, data, mapJson) {
                        if (mapJson !== undefined) {
                            echarts.registerMap(1, mapJson);
                        }
                        this.chart = echarts.init(document.getElementById(id));
                        this.chart.clear();
                        this.chart.setOption(data);

                    },
                    /**
                     * 简单的饼状图
                     * @param id
                     * @param list
                     * @param Map params 选传
                     * 标题：title：{text:'标题'}
                     */
                    pie: function (id, list, params) {
                        //list模板
                        // let list = [{name: "1", value: 50}, {name: "2", value: 50}];
                        let pms = params === undefined ? {} : params;
                        let legendData = [];
                        for (let item of list) {
                            legendData.push(item.name);
                        }
                        const pieData = {
                            title: pms.title !== undefined ? {
                                /*标题*/
                                text: pms.title.text,
                                subtext: '',
                                x: 'center'
                            } : {},
                            tooltip: {
                                trigger: 'item',
                                formatter: "{a} <br/>{b} : {c} ({d}%)"
                            },
                            legend: {
                                x: 'center',
                                y: 'bottom',
                                data: legendData
                            },
                            series: [
                                {
                                    selectedMode: 'single',
                                    name: '访问来源',
                                    type: 'pie',
                                    radius: '60%',
                                    center: ['50%', '50%'],
                                    data: list,
                                    itemStyle: {
                                        emphasis: {
                                            shadowBlur: 10,
                                            shadowOffsetX: 0,
                                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                                        }
                                    }
                                }
                            ]
                        };
                        this.chart = echarts.init(document.getElementById(id));
                        this.chart.clear();
                        this.chart.setOption(pieData);
                    },
                    /**
                     * 简单的折现图
                     * @param id
                     * @param list
                     * @param Map params 选传
                     * 标题：title：{text:'标题'}
                     * 是否滚动放大：dataZoom：Boolean
                     * 是否有间隔：boundaryGap：Boolean
                     */
                    line: function (id, list, params) {
                        //list模板
                        // let list = [
                        //     {
                        //         name: '已支付',
                        //         value: [
                        //             {name: "项目1", value: 19},
                        //             {name: "项目2", value: 5},
                        //             {name: "项目3", value: 28,}
                        //         ]
                        //     }, {
                        //         name: '未支付',
                        //         value: [
                        //             {name: "项目1", value: 18},
                        //             {name: "项目2", value: 22},
                        //             {name: "项目3", value: 30}
                        //         ]
                        //     }
                        // ];
                        let pms = params === undefined ? {} : params;
                        //封装name数据
                        let nameData = [];
                        for (let item of list[0].value) {
                            nameData.push(item.name);
                        }
                        //封装value数据
                        let valueData = [];
                        let legendNameData = [];

                        for (let item of list) {
                            let valueMap = {
                                data: [],
                                type: 'line',
                                name: ""
                            };
                            valueMap.name = item.name;
                            legendNameData.push(item.name)
                            for (let item2 of item.value) {
                                valueMap.data.push(item2.value);
                            }
                            valueData.push(valueMap);
                        }
                        const pieData = {
                            dataZoom: pms.dataZoom == true ? [{
                                /*滚动缩小放大*/
                                type: 'inside'
                            }, {
                                type: 'slider'
                            }] : false,
                            title: pms.title != undefined ? {
                                /*标题*/
                                text: pms.title.text,
                                subtext: '',
                                x: 'center'
                            } : {},
                            legend: {
                                x: 'center',
                                y: 'bottom',
                                data: legendNameData
                            },
                            tooltip: {
                                trigger: 'axis'
                            },
                            grid: {
                                left: '3%',
                                right: '3%',
                                containLabel: true
                            },
                            xAxis: {
                                type: 'category',
                                data: nameData,
                                boundaryGap: pms.boundaryGap === undefined ? true : pms.boundaryGap
                            },
                            yAxis: {
                                type: 'value'
                            },
                            series: valueData
                        };
                        this.chart = echarts.init(document.getElementById(id));
                        this.chart.clear();
                        this.chart.setOption(pieData);
                    },
                    /**
                     * 简单的柱状图
                     * @param id
                     * @param list
                     * @param Map params 选传
                     * 标题：title：{text:'标题'}
                     * 是否滚动放大：dataZoom：Boolean
                     */
                    bar: function (id, list, params) {
                        //list模板
                        // let list = [{name: "1", value: 50}, {name: "2", value: 50}];
                        let pms = params == undefined ? {} : params;
                        let nameData = [];
                        let valueData = [];
                        for (let item of list) {
                            nameData.push(item.name);
                            valueData.push(item.value);
                        }
                        const pieData = {
                            // color: ['#3398DB'],
                            dataZoom: pms.dataZoom == true ? [{
                                /*滚动缩小放大*/
                                type: 'inside'
                            }, {
                                type: 'slider'
                            }] : false,
                            title: pms.title != undefined ? {
                                /*标题*/
                                text: pms.title.text,
                                subtext: '',
                                x: 'center'
                            } : {},
                            tooltip: {
                                trigger: 'axis',
                                axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                                    type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                                }
                            },
                            grid: {
                                left: '3%',
                                right: '4%',
                                bottom: '3%',
                                containLabel: true
                            },
                            xAxis: [
                                {
                                    type: 'category',
                                    data: nameData,
                                    axisTick: {
                                        alignWithLabel: true
                                    }
                                }
                            ],
                            yAxis: [
                                {
                                    type: 'value'
                                }
                            ],
                            series: [
                                {
                                    // name: '直接访问',
                                    type: 'bar',
                                    barWidth: '60%',
                                    data: valueData
                                }
                            ]
                        };
                        this.chart = echarts.init(document.getElementById(id));
                        this.chart.clear();
                        this.chart.setOption(pieData);
                    },
                    /**
                     * 调整大小
                     */
                    resize: function (id) {
                        this.chart = echarts.init(document.getElementById(id));
                        window.addEventListener("resize", this.chart.resize);
                    },
                    loadPet: (name, data, elementID) => {
                        let options = {
                            tooltip: {
                                trigger: 'item',
                                formatter: "{a} <br/>{b} : {c} ({d}%)"
                            },
                            series: [
                                {
                                    name: name,
                                    type: 'pie',
                                    radius: ['60%', '80%'],
                                    avoidLabelOverlap: false,
                                    label: {
                                        normal: {
                                            show: false,
                                            position: 'center',
                                            formatter: function (parms) {
                                                return parms.data.legendname
                                            }
                                        },
                                        emphasis: {
                                            show: true,
                                            textStyle: {
                                                fontSize: '15',
                                                fontWeight: 'bold',
                                                color: "#fff"
                                            }
                                        }
                                    },
                                    labelLine: {
                                        normal: {
                                            show: false
                                        }
                                    },
                                    data: data
                                }
                            ]
                        };
                        let chart = echarts.init(document.getElementById(elementID));
                        chart.setOption(options);
                    },
                    loadLine: (name, data, elementID) => {
                        let series = [];
                        for (let item of data.series) {
                            let params = {
                                name: item.name,
                                type: 'line',
                                stack: '总人数',
                                areaStyle: {},
                                data: item.data,
                            };
                            series.push(params)
                        }
                        let options = {
                            tooltip: {
                                trigger: 'axis',
                                axisPointer: {
                                    type: 'cross',
                                    label: {
                                        backgroundColor: '#6a7985'
                                    }
                                }
                            },
                            grid: {
                                top: "5%",
                                left: '3%',
                                right: '4%',
                                bottom: '3%',
                                containLabel: true
                            },
                            xAxis: [
                                {
                                    type: 'category',
                                    boundaryGap: false,
                                    data: data.xAxisData,
                                    axisLabel: {
                                        textStyle: {
                                            color: '#ffffff',
                                        }
                                    },
                                }
                            ],
                            yAxis: [
                                {
                                    type: 'value',
                                    axisLabel: {
                                        textStyle: {
                                            color: '#ffffff',
                                        }
                                    },
                                }
                            ],
                            series: series
                        };
                        let chart = echarts.init(document.getElementById(elementID));
                        chart.setOption(options);
                    },
                    loadCategory: (name, data, elementID) => {
                        let series = [];
                        for (let item of data.series) {
                            let params = {
                                name: item.name,
                                type: 'bar',
                                areaStyle: {},
                                barWidth: '60%',
                                data: item.data,
                                itemStyle: {
                                    normal: {
                                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                            offset: 0,
                                            color: 'rgba(0,244,255,1)' // 0% 处的颜色
                                        }, {
                                            offset: 1,
                                            color: 'rgba(0,77,167,1)' // 100% 处的颜色
                                        }], false),
                                        shadowColor: 'rgba(0,160,221,1)',
                                        shadowBlur: 2,
                                    }
                                },
                            };
                            series.push(params)
                        }
                        let options = {
                            tooltip: {
                                trigger: 'axis',
                                axisPointer: {
                                    type: 'shadow'
                                }
                            },
                            grid: {
                                top: "5%",
                                left: '3%',
                                right: '4%',
                                bottom: '3%',
                                containLabel: true
                            },
                            xAxis: [
                                {
                                    type: 'category',
                                    data: data.xAxisData,
                                    axisTick: {
                                        alignWithLabel: true
                                    },
                                    axisLabel: {
                                        textStyle: {
                                            color: '#ffffff',
                                        }
                                    }
                                }
                            ],
                            yAxis: [
                                {
                                    type: 'value',
                                    axisLabel: {
                                        textStyle: {
                                            color: '#ffffff',
                                        }
                                    },
                                }
                            ],
                            series: series
                        };
                        let chart = echarts.init(document.getElementById(elementID));
                        chart.setOption(options);
                    },
                    loadRadar: (name, data, elementID) => {
                        let options = {
                            tooltip: {},
                            radar: {
                                // shape: 'circle',
                                name: {
                                    textStyle: {
                                        color: '#fff',
                                        borderRadius: 3,
                                        padding: [3, 5]
                                    }
                                },
                                indicator: data.indicatorData,
                                radius: "50%"
                            },
                            series: [{
                                name: name,
                                type: 'radar',
                                itemStyle: {
                                    normal: {
                                        color: 'rgba(5, 128, 242, 1)'
                                    }
                                },
                                lineStyle: {
                                    normal: {
                                        width: 1,
                                        opacity: 0.4
                                    }
                                },
                                areaStyle: {
                                    normal: {
                                        color: '#0580f2',
                                        opacity: 0.5
                                    }
                                },
                                data: data.series
                            }]
                        };
                        let chart = echarts.init(document.getElementById(elementID));
                        chart.setOption(options);
                    },
                    loadBrokenLine: (data, elementID) => {
                        console.log(data);
                        let series = [];
                        for(let item of data.series){
                            let obj = {
                                name: item.name,
                                type: 'line',
                                data: item.data,
                                itemStyle: {
                                    normal: {
                                        color: item.lineColor || "#00CED1",
                                    }
                                }
                            };
                            series.push(obj);
                        }


                        let options = {
                            title: {
                                text: data.title,
                                textStyle:{
                                    color:"#fff",
                                    fontSize:12
                                },
                                left:"center"
                            },
                            tooltip: {
                                trigger: 'axis'
                            },
                            xAxis: {
                                type: 'category',
                                boundaryGap: false,
                                data: data.xAxisData,
                                axisLabel: {
                                    textStyle: {
                                        color: '#ffffff',
                                    }
                                },
                            },
                            grid: {
                                top: "10%",
                                left: '3%',
                                right: '4%',
                                bottom: '3%',
                                containLabel: true
                            },
                            yAxis: {
                                type: 'value',
                                axisLabel: {
                                    textStyle: {
                                        color: '#ffffff',
                                    }
                                },
                            },
                            series: series
                        };
                        let chart = echarts.init(document.getElementById(elementID));
                        chart.setOption(options);
                    },
                }
            }
        }
    })
};


export default {
    install
}
