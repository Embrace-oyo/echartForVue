<template>
    <div class="body">
        <h2>士兵数据可视化分析</h2>
        <div class="box">
            <div class="left">
                <div class="row1">
                    <div class="bodyPoint">
                        <i class="icon1"></i>
                        <div class="bodyData">
                            <span class="num">102.<span class="textLittle">67</span></span>
                            <span class="text">人体综合指数</span>
                        </div>
                        <i class="icon2"></i>
                    </div>
                    <div class="live">
                        <div class="liveBox">
                            <span class="progress"></span>
                            <div class="words">
                                <span>102</span>
                                <span>最高血压</span>
                            </div>
                        </div>
                        <div class="liveBox">
                            <span class="progress"></span>
                            <div class="words">
                                <span>86</span>
                                <span>最低血压</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="center"></div>
            <div class="right"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "body"
    }
</script>

<style scoped lang="less">
    .body{
        width: 100%;
        height: 100%;
        background-image: url("~@/assets/img/bodyBg.jpg");
        background-size: cover;
        position: relative;
        h2{
            margin: 0;
            font-size: 25px;
            font-weight: bold;
            padding: 50px;
        }
        .box{
            display: flex;
            justify-content: space-between;
            align-items: center;
            width:100%;
            height: 100%;
            position: absolute;
            top: 0;
            .center{
                width: 700px;
                height: 100%;
                background-image: url("~@/assets/img/body.png");
                background-size: contain;
                background-repeat: no-repeat;
                background-position: center center;
            }
            .left{
                width: 500px;
                height: 80%;
                margin-left: 50px;
                .row1{
                    width: 100%;
                    height: 150px;
                    border-bottom: 1px solid #42474a;
                    margin-top: 30px;
                    .bodyPoint{
                        float: left;
                        display: flex;
                        justify-content: flex-start;
                        align-items: center;
                        .icon1{
                            display: block;
                            width: 58px;
                            height: 98px;
                            background-image: url("~@/assets/img/icon1.png");
                            background-repeat: no-repeat;
                            background-position: center center;
                        }
                        .bodyData{
                            display: flex;
                            flex-direction: column;
                            .num{
                                font-size: 55px;
                                color: #3aff6f;
                                .textLittle{
                                    font-size: 40px;
                                }
                            }
                            .text{
                                font-size: 25px;
                                color: #aaaeaf;
                            }
                        }
                        .icon2{
                            display: block;
                            width: 4px;
                            height: 114px;
                            background-image: url("~@/assets/img/icon2.png");
                            background-repeat: no-repeat;
                            background-position: center center;
                            margin-left: 30px;
                        }
                    }
                    .live{
                        height: 116px;
                        float: left;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        margin-left: 30px;
                        .liveBox{
                            display: flex;
                            justify-content: flex-start;
                            align-items: center;
                            .progress{
                                display: block;
                                width: 6px;
                                height: 50px;
                                background-color: #a9adae;
                                position: relative;
                                &:after{
                                    content: '';
                                    display: block;
                                    width: 100%;
                                    height: 30px;
                                    position: absolute;
                                    bottom: 0;
                                    background-color: #26ff72;
                                }
                            }
                            .words{
                                display: flex;
                                flex-direction: column;
                                justify-content: center;
                                margin-left: 10px;
                                span:nth-child(1){
                                    font-size: 30px;
                                }
                                span:nth-child(2){
                                    font-size: 15px;
                                    color: #b7b8ba;
                                }
                            }
                        }
                    }
                }
            }
            .right{
                width: 500px;
                height: 80%;
                margin-right: 50px;
            }
        }
    }
</style>