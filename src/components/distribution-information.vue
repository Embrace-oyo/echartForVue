<template>
    <div class="distribution-information">
        <div class="inline-box">
            <div class="inline-item">
                <div class="chart-item">
                    <div class="chart-label">体能分布</div>
                    <div id="stamina" class="chart"></div>
                </div>
                <div class="chart-item">
                    <div class="chart-label">射击分布</div>
                    <div id="shoot" class="chart"></div>
                </div>
                <div class="chart-item">
                    <div class="chart-label">障碍分布</div>
                    <div id="obstacle" class="chart"></div>
                </div>
                <div class="chart-item">
                    <div class="chart-label">特种侦查专业技术能力分布</div>
                    <div id="specialInvestigation" class="chart"></div>
                </div>
            </div>
            <div class="inline-item">
                <div class="chart-item">
                    <div class="chart-label">后勤保障专业技术能力分布</div>
                    <div id="logisticalSupport" class="chart"></div>
                </div>
                <div class="chart-item">
                    <div class="chart-label">军官专业技术能力分布</div>
                    <div id="militaryOfficer" class="chart"></div>
                </div>
                <div class="chart-item">
                    <div class="chart-label">炮兵专业技术能力分布</div>
                    <div id="artillery" class="chart"></div>
                </div>
                <div class="chart-item">
                    <div class="chart-label">医护专业技术能力分布</div>
                    <div id="professionalSkill" class="chart"></div>
                </div>
            </div>
        </div>
        <div class="close" @click="close">关闭</div>
        <div class="title">分布信息</div>
    </div>
</template>

<script>
    export default {
        name: "distribution-information",
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
                console.log("渲染了1")
                this.$chart.loadLine("体能分布", this.pandectData.stamina, "stamina");
                this.$chart.loadLine("射击分布", this.pandectData.shoot, "shoot");
                this.$chart.loadLine("障碍分布", this.pandectData.obstacle, "obstacle");
                this.$chart.loadPet("特种侦查专业技术能力分布",this.pandectData.specialInvestigation,"specialInvestigation");
                this.$chart.loadPet("后勤保障专业技术能力分布",this.pandectData.logisticalSupport,"logisticalSupport");
                this.$chart.loadPet("军官专业技术能力分布",this.pandectData.militaryOfficer,"militaryOfficer");
                this.$chart.loadPet("炮兵专业技术能力分布",this.pandectData.artillery,"artillery");
                this.$chart.loadPet("医护专业技术能力分布",this.pandectData.professionalSkill,"professionalSkill");
            },
            close(){
                this.$emit("close");
            }
        }
    }
</script>

<style lang="less" scoped>
    .distribution-information {
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
