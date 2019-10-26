<template>
    <div class="pandect-mode">
        <div class="left">
            <div class="left-item">
                <div class="label">政治面貌分类统计</div>
                <div id="politicsStatus" class="drawing"></div>
            </div>
            <div class="left-item">
                <div class="label">年龄</div>
                <div id="age" class="drawing"></div>
            </div>
            <div class="left-item">
                <div class="label">身高分布</div>
                <div id="stature" class="drawing"></div>
            </div>
            <div class="left-item">
                <div class="label">体重分布</div>
                <div id="weight" class="drawing"></div>
            </div>
            <div class="left-item">
                <div class="label">学历分布</div>
                <div id="educationBackground" class="drawing"></div>
            </div>

            <div class="left-item">
                <div class="label">特长</div>
                <div id="speciality" class="drawing"></div>
            </div>
            <div class="left-item">
                <div class="label">血型</div>
                <div id="bloodType" class="drawing"></div>
            </div>
            <div class="left-item">
                <div class="label">病史</div>
                <div id="medicalHistory" class="drawing"></div>
            </div>
        </div>
        <div class="center">
            <div class="top">
                <div class="top-two-mode">
                    <div class="top-two-mode-item">
                        <div class="label">兵种人数总览</div>
                        <div id="theNumberOfUnits" class="drawing"></div>
                    </div>
                    <div class="top-two-mode-item">
                        <div class="label">士兵情况</div>
                        <div id="affair" class="drawing"></div>
                    </div>
                </div>
                <div class="top-three-mode">
                    <div class="top-three-mode-item">
                        <div class="label">单兵素质分析</div>
                        <div id="quality" class="drawing"></div>
                    </div>
                    <div class="top-three-mode-item">
                        <div class="label">单兵战力分析</div>
                        <div id="fightingCapacity" class="drawing"></div>
                    </div>
                    <div class="top-three-mode-item">
                        <div class="label">单兵综合分析</div>
                        <div id="comprehensiveAbilities" class="drawing"></div>
                    </div>
                </div>
            </div>
            <div class="bottom">
                <div class="label">实时动态</div>
                <div class="drawing">
                    <div class="info" v-for="(item,index) in pandectData.dynamicCondition" :key="index">
                        <span class="info-time">{{item.time}}</span>
                        <span class="info-content">{{item.content}}</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="right">
            <div class="right-item">
                <div class="label">体能分布</div>
                <div id="stamina" class="drawing"></div>
            </div>
            <div class="right-item">
                <div class="label">射击分布</div>
                <div id="shoot" class="drawing"></div>
            </div>
            <div class="right-item">
                <div class="label">障碍分布</div>
                <div id="obstacle" class="drawing"></div>
            </div>
            <div class="right-item">
                <div class="label">特种侦查专业技术能力分布</div>
                <div id="specialInvestigation" class="drawing"></div>
            </div>
            <div class="right-item">
                <div class="label">后勤保障专业技术能力分布</div>
                <div id="logisticalSupport" class="drawing"></div>
            </div>
            <div class="right-item">
                <div class="label">军官专业技术能力分布</div>
                <div id="militaryOfficer" class="drawing"></div>
            </div>
            <div class="right-item">
                <div class="label">炮兵专业技术能力分布</div>
                <div id="artillery" class="drawing"></div>
            </div>
            <div class="right-item">
                <div class="label">医护专业技术能力分布</div>
                <div id="professionalSkill" class="drawing"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "pandect-mode",
        props: {
            pandectData: {
                type: Object,
                default: () => {
                    return {}
                }
            }
        },
        mounted() {
            this.loadAll();
        }
        ,
        methods: {
            loadAll() {
                this.$chart.loadPet("政治面貌分类统计", this.pandectData.politicsStatus, "politicsStatus");
                this.$chart.loadPet("血型", this.pandectData.bloodType, "bloodType");
                this.$chart.loadPet("士兵情况",this.pandectData.affair,"affair");
                this.$chart.loadPet("特种侦查专业技术能力分布",this.pandectData.specialInvestigation,"specialInvestigation");
                this.$chart.loadPet("后勤保障专业技术能力分布",this.pandectData.logisticalSupport,"logisticalSupport");
                this.$chart.loadPet("军官专业技术能力分布",this.pandectData.militaryOfficer,"militaryOfficer");
                this.$chart.loadPet("炮兵专业技术能力分布",this.pandectData.artillery,"artillery");
                this.$chart.loadPet("医护专业技术能力分布",this.pandectData.professionalSkill,"professionalSkill");
                this.$chart.loadPet("特长",this.pandectData.speciality,"speciality");
                this.$chart.loadLine("身高分布",this.pandectData.stature,"stature");
                this.$chart.loadLine("体重分布",this.pandectData.weight,"weight");
                this.$chart.loadLine("学历分布",this.pandectData.educationBackground,"educationBackground");
                this.$chart.loadLine("体能分布",this.pandectData.stamina,"stamina");
                this.$chart.loadLine("射击分布",this.pandectData.shoot,"shoot");
                this.$chart.loadLine("障碍分布",this.pandectData.obstacle,"obstacle");
                this.$chart.loadCategory("年龄",this.pandectData.age,"age");
                this.$chart.loadCategory("病史",this.pandectData.medicalHistory,"medicalHistory");
                this.$chart.loadCategory("兵种人数总览",this.pandectData.theNumberOfUnits,"theNumberOfUnits");
                this.$chart.loadRadar("单兵素质分析",this.pandectData.quality,"quality");
                this.$chart.loadRadar("单兵战力分析",this.pandectData.quality,"fightingCapacity");
                this.$chart.loadRadar("单兵综合分析",this.pandectData.comprehensiveAbilities,"comprehensiveAbilities");
            }
        }
    }
</script>

<style lang="less" scoped>
    .pandect-mode {
        height: 100%;
        display: flex;
        @allPadding: 20px;
        @labelHeight: 40px;
        .left, .center, .right {
            padding: 20px;
            height: calc(100% - @allPadding * 2);
        }
        .left, .right {
            width: calc(25% - @allPadding * 2);
            overflow-y: scroll;
            .left-item, .right-item {
                background-image: url("../assets/img/inner-box.png");
                background-size: cover;
                margin-bottom: 20px;
                height: 33.3%;
                .label {
                    height: @labelHeight;
                }
                .drawing {
                    height: calc(100% - @labelHeight);
                }
            }
        }
        .center {
            width: calc(50% - @allPadding * 2);
            .top {
                height: 70%;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                .top-two-mode, .top-three-mode {
                    height: 48%;
                    display: flex;
                    justify-content: space-between;
                    .top-two-mode-item, .top-three-mode-item {
                        height: 100%;
                        .label {
                            height: @labelHeight;
                        }
                        .drawing {
                            height: calc(100% - @labelHeight);
                        }
                    }
                    .top-two-mode-item {
                        width: 48%;
                        background-image: url("../assets/img/inner-box.png");
                        background-size: cover;
                    }
                    .top-three-mode-item {
                        width: 32%;
                        background-image: url("../assets/img/single-box.png");
                        background-size: cover;
                    }
                }
            }
            .bottom {
                height: 30%;
                background-image: url("../assets/img/inner-box.png");
                background-size: cover;
                .label {
                    height: @labelHeight;
                }
                .drawing {
                    height: calc(100% - @labelHeight);
                    color: white;
                    padding: 0 5%;
                    .info{
                        .info-time{
                            margin-right: 10px;
                        }

                        &:hover{
                            cursor: pointer;
                            color: #2ACAFF;
                        }
                    }
                }
            }
        }
    }
</style>

<style lang="less" scoped>
    div::-webkit-scrollbar {
        display: none
    }
    .label{
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>