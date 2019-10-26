<template>
    <div class="details">
        <div class="details-left">
            <div class="details-padding">

                <div class="class-frame">
                    <div class="class">一班</div>
                    <div class="class">二班</div>
                    <div class="class">三班</div>
                </div>

                <div class="left-below">
                    <div class="name-list">
                        <div :class="{'name':true,'now-soldier':nowSoldier.name===item.name}"
                             v-for="item in detailsData.soldier" v-bind:key="item.name">
                            {{item.name}}
                        </div>
                    </div>
                    <div class="performance-frame">
                        <div class="performance" v-for="item in nowSoldier.performance" v-bind:key="item.name">
                            <div class="name">{{item.name}}</div>
                            <div class="value">{{item.value}}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div class="details-centre">
            <div class="details-padding">
                <div class="info">
                    <div class="headline"></div><!--个人基础数据信息-->
                    <div style="height: 100%;width: 100%">
                        <div class="info-center">
                            <div class="info-center-head-portrait">
                                <img style="height: 70%;width: 80%;object-fit: contain"
                                     :src="nowSoldier.portrait"/>
                            </div>
                            <div class="info-center-analyze">
                                <span style="margin: 5px 0px">单兵综合素质分析</span>
                                <div id="analyze"></div>
                            </div>
                            <div class="info-center-turn">
                                <div style="margin: 20px 0px">出勤状态</div>
                                <div style="font-size: 25px">{{nowSoldier.turnType}}</div>
                            </div>
                        </div>
                        <div class="info-details">
                            <div class="info-details-text">
                                <div><span>姓名：</span><span>{{nowSoldier.name}}</span></div>
                                <div><span>电话：</span><span>{{nowSoldier.phone}}</span></div>
                                <div><span>年龄：</span><span>{{nowSoldier.age}}</span></div>
                                <div><span>籍贯：</span><span>{{nowSoldier.nativePlace}}</span></div>
                                <div><span>身高：</span><span>{{nowSoldier.stature}}</span></div>
                                <div><span>学历：</span><span>{{nowSoldier.education}}</span></div>
                            </div>
                            <div class="info-details-text">
                                <div><span>兵种：</span><span>{{nowSoldier.soldierServices}}</span></div>
                                <div><span>特长：</span><span>{{nowSoldier.speciality}}</span></div>
                                <div><span>血型：</span><span>{{nowSoldier.bloodType}}</span></div>
                                <div><span>病史：</span><span>{{nowSoldier.medicalHistory }}</span></div>
                                <div><span>民族：</span><span>{{nowSoldier.nation}}</span></div>
                                <div><span>政治面貌：</span><span>{{nowSoldier.politicsStatus}}</span></div>
                            </div>
                            <div class="info-details-text">
                                <div><span>家庭关系：</span><span>{{nowSoldier.familyTies}}</span></div>
                                <div><span>婚姻状况：</span><span>{{nowSoldier.maritalStatus}}</span></div>
                                <div><span>是否有小孩：</span><span>{{nowSoldier.haveChildren}}</span></div>
                                <div><span>心理状态：</span><span>{{nowSoldier.mentalHealth}}</span></div>
                            </div>

                        </div>
                    </div>


                </div>
                <div class="behavioural">
                    <div class="behavioural-meter" id="behavioural">

                    </div>
                </div>
            </div>
        </div>

        <div class="details-right">
            <div class="details-padding">
                <div class="details-right-t">
                    <div style="width: 100%;overflow-y: scroll;margin-left: 15%">
                        <div class="details-right-meter">
                            <div style="margin: 10px 0px;text-align: center">士兵当前位置</div>
                            <div class="meter" id="analyze1"></div>
                        </div>
                        <div class="details-right-meter">
                            <div style="margin: 10px 0px;text-align: center">身体综合素质分析</div>
                            <div class="meter" id="analyze2"></div>
                        </div>
                        <div class="details-right-meter">
                            <div style="margin: 10px 0px;text-align: center">战术能力综合分析</div>
                            <div class="meter" id="analyze3"></div>
                        </div>
                        <div style="height: 100px">
                        </div>
                    </div>


                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import echarts from "echarts";
    import sthMap from '@/assets/json/sth.json'
    import {getDetailsData} from "@/assets/data/detailsData"

    let detailsData = getDetailsData();
    export default {
        name: "details1",
        data() {
            return {
                detailsData: detailsData,
                nowSoldier: {}
            }

        },
        created() {

        },
        mounted() {
            this.nowSoldier = this.detailsData.soldier[0];
            this.initialize();

        },
        methods: {
            initialize() {
                this.$chart.loadRadar("单兵综合素质分析", this.nowSoldier.analyze, "analyze");
                // this.$chart.loadRadar("单兵综合素质分析", this.nowSoldier.analyze, "analyze1");
                this.$chart.loadCategory("月度考核", this.nowSoldier.behavioural, "behavioural");

                this.goMap(this.nowSoldier.currentPosition)
                this.$chart.loadRadar("身体综合素质分析", this.nowSoldier.analyze, "analyze2");
                this.$chart.loadRadar("战术能力综合分析", this.nowSoldier.analyze, "analyze3");
            },
            resize() {
                this.$chart.resize("analyze");
                this.$chart.resize("analyze1");
                this.$chart.resize("analyze2");
                this.$chart.resize("analyze3");
            },
            goMap(valueMap) {
                // let _this = this;
                echarts.registerMap('xx', JSON.stringify(sthMap));
                let myChart = echarts.init(document.getElementById("analyze1")); //这里是为了获得容器所在位置

                var geoCoordMap = valueMap[0];
                var data = valueMap[1];
                var convertData = function (data) {
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
                let option = {
                    // backgroundColor: '#020933',
                    // title: {
                    //     top: 20,
                    //     text: '旅部-地图测试',
                    //     subtext: '',
                    //     x: 'center',
                    //     textStyle: {
                    //         color: '#ccc'
                    //     }
                    // },

                    tooltip: {
                        trigger: 'item',
                        formatter: function () {
                            //   if(typeof(params.value)[2] == "undefined"){
                            //   	return params.name + ' : ' + params.value;
                            //   }else{
                            //   	return params.name + ' : ' + params.value[2];
                            //   }
                        }
                    },
                    /*   legend: {
                           orient: 'vertical',
                           y: 'bottom',
                           x: 'right',
                            data:['pm2.5'],
                           textStyle: {
                               color: '#fff'
                           }
                       },*/
                    legend: {
                        orient: 'vertical',
                        y: 'bottom',
                        x: 'right',
                        data: ['pm2.5'],
                        textStyle: {
                            color: '#fff'
                        }
                    },
                    visualMap: {
                        show: false,
                        min: 0,
                        max: 500,
                        left: 'left',
                        top: 'bottom',
                        text: ['高', '低'], // 文本，默认为数值文本
                        calculable: true,
                        seriesIndex: [1],
                        inRange: {
                            // color: ['#3B5077', '#031525'] // 蓝黑
                            // color: ['#ffc0cb', '#800080'] // 红紫
                            // color: ['#3C3B3F', '#605C3C'] // 黑绿
                            //color: ['#0f0c29', '#302b63', '#24243e'] // 黑紫黑
                            //color: ['#23074d', '#cc5333'] // 紫红
                            // color: ['#00467F', '#A5CC82'] // 蓝绿
                            // color: ['#1488CC', '#2B32B2'] // 浅蓝
                            // color: ['#00467F', '#A5CC82'] // 蓝绿
                            // color: ['#00467F', '#A5CC82'] // 蓝绿
                            // color: ['#00467F', '#A5CC82'] // 蓝绿
                            // color: ['#00467F', '#A5CC82'] // 蓝绿

                        }
                    },
                    geo: {
                        show: true,
                        map: 'xx',
                        label: {
                            normal: {
                                show: false
                            },
                            emphasis: {
                                show: false,
                            }
                        },
                        roam: true,
                        itemStyle: {
                            normal: {
                                areaColor: 'transparent',
                                borderColor: '#067d09',
                                borderWidth: 2,
                                shadowColor: 'rgba(63, 218, 255, 0.5)',
                                shadowBlur: 30
                            },
                            emphasis: {
                                areaColor: '#2B91B7',
                            }
                        }
                    },
                    series: [
                        {
                            name: 'light',
                            type: 'scatter',
                            coordinateSystem: 'geo',
                            data: convertData(data),
                            symbolSize: function (val) {
                                return val[2] / 10;
                            },
                            label: {
                                normal: {
                                    formatter: '{b}',
                                    position: 'right',
                                    show: true
                                },
                                emphasis: {
                                    show: true
                                }
                            },
                            itemStyle: {
                                normal: {
                                    color: '#F4E925'
                                }
                            }
                        },
                        {
                            type: 'map',
                            map: 'jiangxi',
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
                            data: data
                        },
                        {
                            name: 'Top 5',
                            type: 'effectScatter',
                            coordinateSystem: 'geo',
                            data: convertData(data.sort(function (a, b) {
                                return b.value - a.value;
                            }).slice(0, 3)),
                            symbolSize: function (val) {
                                return val[2] / 10;
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
                                    // color: '#F4E925',
                                    color: '#F4E925',
                                    shadowBlur: 10,
                                    shadowColor: '#05C3F9'
                                }
                            },
                            zlevel: 1
                        },

                    ]


                };
                myChart.setOption(option);

            }
        }
    }
</script>

<style lang="less">

    .details {
        height: 100%;
        display: flex;
        color: #fff;
        @detailsPadding: 10px;
        .details-padding {
            width: calc(100% - @detailsPadding * 2);
            height: calc(100% - @detailsPadding * 2);
            padding: @detailsPadding @detailsPadding @detailsPadding @detailsPadding;
        }
        .headline {
            width: 100%;
            color: #2FD5FF;
            text-align: center;
            height: 40px;
            line-height: 40px;
        }

        .details-left {
            height: 100%;
            width: 25%;
            /*border: 1px aqua solid;*/
            .class-frame {
                display: flex;
                justify-content: flex-start;
                .class {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background-image: url("~@/assets/img/inner-box.png");
                    background-size: cover;
                    background-size: 100% 100%;
                    width: 20%;
                    height: 40px;
                    font-size: 22px;
                    margin-right: 10px;
                    cursor: pointer;
                }
                @media (max-height: 900px) {
                    .class {
                        font-size: 16px;
                    }
                }

            }
            .left-below {
                display: flex;
                height: calc(100% - 60px);
                padding-top: 20px;
                .name-list {
                    height: 95%;
                    width: 45%;
                    background-image: url("~@/assets/img/out-box.png");
                    background-size: cover;
                    background-size: 100% 100%;
                    display: flex;
                    /*justify-content: center;*/
                    align-items: center;
                    flex-direction: column;
                    .name {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        color: #2ACAFF;
                        height: 9%;
                        width: 95%;
                        border-bottom: 2px #0A2447 solid;
                        cursor: pointer;
                    }
                    .now-soldier {
                        color: #fff;
                    }
                    @media (max-height: 900px) {
                        .name {
                            font-size: 16px;
                        }
                    }
                }
                .performance-frame {
                    height: 100%;
                    width: 45%;
                    margin-left: 7%;
                    .performance {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        flex-direction: column;
                        margin-top: 5%;
                        height: 14%;
                        background-image: url("~@/assets/img/small-box.png");
                        background-size: cover;
                        background-size: 100% 100%;
                        font-size: 18px;
                        .name {
                            color: #2ACAFF;
                            margin: 10px 0px;
                        }
                        .value {
                            color: #fff;
                        }
                    }
                    @media (max-height: 900px) {
                        .performance {
                            font-size: 15px;
                        }
                    }

                }
            }
        }

        .details-centre {
            height: 100%;
            width: 47%;
            /*border: 1px aqua solid;*/
            .info {
                height: 58%;
                /*border: 1px #ff8713 solid;*/
                background-image: url("~@/assets/img/bg-details-info.png");
                background-size: cover;
                background-size: 100% 100%;
                .info-center {
                    display: flex;
                    justify-content: space-around;
                    height: 47%;
                    /*border: 1px #ff8713 solid;*/
                    margin-top: 1%;
                    .info-center-head-portrait {
                        width: 30%;
                        background-image: url("~@/assets/img/inner-box.png");
                        background-size: cover;
                        background-size: 100% 100%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
                    .info-center-analyze {
                        width: 35%;
                        height: 100%;
                        background-image: url("~@/assets/img/inner-box.png");
                        background-size: cover;
                        background-size: 100% 100%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        flex-direction: column;
                        #analyze {
                            /*width: calc(100% - 1px);*/
                            /*height: calc(100% - 1px);*/
                            /*width: 182px;*/
                            /*height: 182px;*/
                            height: 100%;
                            width: 100%;
                            /*div {*/
                            /*height: 100% !important;*/
                            /*width: 100% !important;*/
                            /*}*/

                        }
                    }
                    @media (max-height: 900px) {
                        .info-center-analyze {
                            font-size: 12px;
                        }
                    }

                    .info-center-turn {
                        width: 20%;
                        background-image: url("~@/assets/img/single-box.png");
                        background-size: cover;
                        background-size: 100% 100%;
                        color: white;
                        display: flex;
                        align-items: center;
                        flex-direction: column;

                    }
                }
                .info-details {
                    display: flex;
                    justify-content: space-around;
                    padding-left: 5%;
                    .info-details-text {
                        color: #fff;
                        width: 30%;
                        line-height: 30px;
                    }
                    @media (max-height: 900px) {
                        .info-details-text {
                            line-height: 22px;
                            font-size: 16px;
                            margin-top: 2%;
                        }
                    }
                    @media (max-height: 700px) {
                        .info-details-text {
                            line-height: 16px;
                            font-size: 10px;
                        }
                    }
                }
            }
            .behavioural {
                margin-top: 3%;
                height: 40%;
                /*border: 1px #ff001e solid;*/
                background-image: url("~@/assets/img/bg-details-behavioural.png");
                background-size: cover;
                background-size: 100% 100%;
                padding-top: 6%;
                display: flex;
                justify-content: center;
                .behavioural-meter {
                    height: 80%;
                    width: 80%;
                }
            }
        }

        .details-right {
            height: 100%;
            width: 28%;

            /*border: 1px aqua solid;*/
            .details-right-t {
                height: 100%;
                width: 100%;
                background-image: url("~@/assets/img/bg-details-war.png");
                background-size: cover;
                background-size: 100% 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                padding-top: 5%;
                .details-right-meter {
                    height: 300px;
                    width: 85%;
                    background-image: url("~@/assets/img/inner-box.png");
                    background-size: cover;
                    background-size: 100% 100%;
                    /*border: 1px salmon solid;*/
                    margin-top: 10%;
                    padding-top: 1%;
                    display: flex;
                    align-items: center;
                    flex-direction: column;
                    .meter {
                        height: 90%;
                        width: 90%;
                    }
                }
                @media (max-height: 900px) {
                    .details-right-meter {
                        font-size: 12px;
                    }
                }

            }

        }
    }
</style>
