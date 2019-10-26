<template>
    <div class="body-analysis analysis">
        <div class="title">
            身体分析
            <div class="grade">综合评分:50</div>
        </div>
        <div class="analysis-chart">
            <div id="heartRate" class="analysis-item"></div>
            <div id="bloodPressure" class="analysis-item"></div>
            <div class="analysis-item"></div>
            <div class="analysis-item"></div>
        </div>
    </div>
</template>

<script>
    import {personageData} from "./../assets/data/personageData";

    export default {
        name: "body-analysis",
        data() {
            return {
                personageData: personageData()
            }
        },
        mounted() {
            this.loadAll();
        },
        methods: {
            loadAll() {
                this.$chart.loadBrokenLine(this.personageData.heartRate, "heartRate");
                this.$chart.loadBrokenLine(this.personageData.bloodPressure, "bloodPressure");
            }
        }
    }
</script>