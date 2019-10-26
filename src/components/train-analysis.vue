<template>
    <div class="train-analysis analysis">
        <div class="title">
            训练分析
            <div class="grade">综合评分:50</div>
        </div>
        <div class="analysis-chart">
            <div id="stamina" class="analysis-item"></div>
            <div id="shoot" class="analysis-item"></div>
            <div id="obstacle" class="analysis-item"></div>
            <div id="fieldOperations" class="analysis-item"></div>
        </div>
    </div>
</template>

<script>
    import {personageData} from "./../assets/data/personageData";

    export default {
        name: "train-analysis",
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
                this.$chart.loadBrokenLine(this.personageData.stamina, "stamina");
                this.$chart.loadBrokenLine(this.personageData.shoot, "shoot");
                this.$chart.loadBrokenLine(this.personageData.obstacle, "obstacle");
                this.$chart.loadBrokenLine(this.personageData.fieldOperations, "fieldOperations");
            }
        }
    }
</script>
