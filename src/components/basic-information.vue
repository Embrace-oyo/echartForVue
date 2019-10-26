<template>
    <div class="basic-information">
        <div class="inline-box">
            <div class="inline-item">
                <div class="chart-item">
                    <div class="chart-label">政治面貌</div>
                    <div id="politicsStatus" class="chart"></div>
                </div>
                <div class="chart-item">
                    <div class="chart-label">年龄</div>
                    <div id="age" class="chart"></div>
                </div>
                <div class="chart-item">
                    <div class="chart-label">身高分布</div>
                    <div id="stature" class="chart"></div>
                </div>
                <div class="chart-item">
                    <div class="chart-label">体重分布</div>
                    <div id="weight" class="chart"></div>
                </div>
            </div>
            <div class="inline-item">
                <div class="chart-item">
                    <div class="chart-label">学历分布</div>
                    <div id="educationBackground" class="chart"></div>
                </div>
                <div class="chart-item">
                    <div class="chart-label">特长</div>
                    <div id="speciality" class="chart"></div>
                </div>
                <div class="chart-item">
                    <div class="chart-label">血型</div>
                    <div id="bloodType" class="chart"></div>
                </div>
                <div class="chart-item">
                    <div class="chart-label">病史</div>
                    <div id="medicalHistory" class="chart"></div>
                </div>
            </div>
        </div>
        <div class="close" @click="close">关闭</div>
        <div class="title">基础信息</div>
    </div>
</template>

<script>
    export default {
        name: "basic-information",
        props: {
            pandectData: {
                type: Object,
                default: () => {
                    return {}
                }
            }
        },
        mounted(){
            this.loadAll();
        },
        methods: {
            loadAll() {
                console.log("渲染了2")
                this.$chart.loadPet("政治面貌分类统计", this.pandectData.politicsStatus, "politicsStatus");
                this.$chart.loadPet("血型", this.pandectData.bloodType, "bloodType");
                this.$chart.loadLine("身高", this.pandectData.stature, "stature");
                this.$chart.loadLine("体重", this.pandectData.weight, "weight");
                this.$chart.loadLine("学历", this.pandectData.educationBackground, "educationBackground");
                this.$chart.loadCategory("年龄", this.pandectData.age, "age");
                this.$chart.loadCategory("病史", this.pandectData.medicalHistory, "medicalHistory");
                this.$chart.loadPet("特长", this.pandectData.speciality, "speciality");
            },
            close(){
                this.$emit("close");
            }
        }
    }
</script>

<style lang="less" scoped>
    .basic-information {
        z-index: 3000;
        height: calc(100% - 60px);
        width: 100%;
        position: absolute;
        background-color: rgba(0, 0, 0, 0.7);
        display: flex;
        align-items: center;
        justify-content: center;
        .inline-box {
            background-image: url("../assets/img/bankground.png");
            background-size: cover;
            height: 70%;
            width: 80%;
            .inline-item {
                height: 50%;
                display: flex;
                .chart-item {
                    height: 100%;
                    width: 25%;
                    /*background-image: url("../assets/img/inner-box.png");*/
                    /*background-size: cover;*/
                    @labelHeight: 40px;
                    .chart-label {
                        height: @labelHeight;
                        color: white;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }
                    .chart {
                        height: calc(100% - @labelHeight);
                        color: white;
                        padding: 0 5%;
                        .info {
                            .info-time {
                                margin-right: 10px;
                            }

                            &:hover {
                                cursor: pointer;
                                color: #2ACAFF;
                            }
                        }
                    }
                }
            }
        }
        .close{
            position: absolute;
            bottom: 5%;
            left: calc(50% - 100px);
            height: 50px;
            width: 200px;
            display: flex;
            align-items: center;
            justify-content: center;
            background-image: url("../assets/img/bankground.png");
            background-size: cover;
            color: white;
            cursor: pointer;
            font-size: 24px;
        }
        .title{
            position: absolute;
            top: 5%;
            left: calc(50% - 100px);
            color: white;
            font-weight: bold;
            font-size: 30px;
        }
    }
</style>
