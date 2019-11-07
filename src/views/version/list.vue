<template>
    <div class="upLoadBox">
        <div class="goBack">
            <router-link tag="span" to="/newIndex"> < 返回</router-link>
        </div>
        <div class="title">
            <div class="left"></div>
            <span><i></i>士兵全息大数据管理与分析系统</span>
            <div class="right"></div>
        </div>
        <div class="upLoad">
            <div class="contentBox">
                <div class="content">
                    <div class="listTitle">
                        <span>兵种</span>
                        <span>姓名</span>
                        <span>体能考验</span>
                        <span>射击考验</span>
                        <span>障碍考验（400m）</span>
                        <span>专业考验（10分）</span>
                        <span>擅长技能</span>
                        <span>心里监控（10分）</span>
                        <span>综合评分（10分）</span>
                    </div>
                    <div class="listBox">
                        <li v-for="(item, index) of list" :key="index">
                            <span>{{item.type}}</span>
                            <span>{{item.name}}</span>
                            <span>{{item.physical}}</span>
                            <span>{{item.shot}}</span>
                            <span>{{item.obstacle}}</span>
                            <span>{{item.profession}}</span>
                            <span>{{item.skill}}</span>
                            <span>{{item.heart}}</span>
                            <span>{{item.Comprehensive}}</span>
                        </li>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "upLoad",
        data(){
            return {
                list: [
                    {
                        type: '炮手（一炮手）',
                        name: '沈某',
                        physical: 98,
                        shot: 50,
                        obstacle: '50s',
                        profession: 9,
                        skill: '驾驶',
                        heart: 8,
                        Comprehensive: 9,
                    },
                    {
                        type: '炮手（二炮手）',
                        name: '王某',
                        physical: 70,
                        shot: 98,
                        obstacle: '45s',
                        profession: 8,
                        skill: '维修',
                        heart: 9,
                        Comprehensive: 7,
                    },
                    {
                        type: '通讯兵',
                        name: '李某',
                        physical: 75,
                        shot: 60,
                        obstacle: '48s',
                        profession: 7,
                        skill: '计算机',
                        heart: 6,
                        Comprehensive: 7,
                    },
                    {
                        type: '侦查兵',
                        name: '赵某',
                        physical: 66,
                        shot: 88,
                        obstacle: '44s',
                        profession: 8,
                        skill: '爆破',
                        heart: 8,
                        Comprehensive: 6,
                    },
                    {
                        type: '炮手（一炮手）',
                        name: '沈某',
                        physical: 98,
                        shot: 50,
                        obstacle: '50s',
                        profession: 9,
                        skill: '驾驶',
                        heart: 8,
                        Comprehensive: 9,
                    },
                    {
                        type: '炮手（二炮手）',
                        name: '王某',
                        physical: 70,
                        shot: 98,
                        obstacle: '45s',
                        profession: 8,
                        skill: '维修',
                        heart: 9,
                        Comprehensive: 7,
                    },
                    {
                        type: '通讯兵',
                        name: '李某',
                        physical: 75,
                        shot: 60,
                        obstacle: '48s',
                        profession: 7,
                        skill: '计算机',
                        heart: 6,
                        Comprehensive: 7,
                    },
                    {
                        type: '侦查兵',
                        name: '赵某',
                        physical: 66,
                        shot: 88,
                        obstacle: '44s',
                        profession: 8,
                        skill: '爆破',
                        heart: 8,
                        Comprehensive: 6,
                    },
                    {
                        type: '炮手（一炮手）',
                        name: '沈某',
                        physical: 98,
                        shot: 50,
                        obstacle: '50s',
                        profession: 9,
                        skill: '驾驶',
                        heart: 8,
                        Comprehensive: 9,
                    },
                    {
                        type: '炮手（二炮手）',
                        name: '王某',
                        physical: 70,
                        shot: 98,
                        obstacle: '45s',
                        profession: 8,
                        skill: '维修',
                        heart: 9,
                        Comprehensive: 7,
                    },
                    {
                        type: '通讯兵',
                        name: '李某',
                        physical: 75,
                        shot: 60,
                        obstacle: '48s',
                        profession: 7,
                        skill: '计算机',
                        heart: 6,
                        Comprehensive: 7,
                    },
                    {
                        type: '侦查兵',
                        name: '赵某',
                        physical: 66,
                        shot: 88,
                        obstacle: '44s',
                        profession: 8,
                        skill: '爆破',
                        heart: 8,
                        Comprehensive: 6,
                    },
                    {
                        type: '炮手（一炮手）',
                        name: '沈某',
                        physical: 98,
                        shot: 50,
                        obstacle: '50s',
                        profession: 9,
                        skill: '驾驶',
                        heart: 8,
                        Comprehensive: 9,
                    },
                    {
                        type: '炮手（二炮手）',
                        name: '王某',
                        physical: 70,
                        shot: 98,
                        obstacle: '45s',
                        profession: 8,
                        skill: '维修',
                        heart: 9,
                        Comprehensive: 7,
                    },
                    {
                        type: '通讯兵',
                        name: '李某',
                        physical: 75,
                        shot: 60,
                        obstacle: '48s',
                        profession: 7,
                        skill: '计算机',
                        heart: 6,
                        Comprehensive: 7,
                    },
                    {
                        type: '侦查兵',
                        name: '赵某',
                        physical: 66,
                        shot: 88,
                        obstacle: '44s',
                        profession: 8,
                        skill: '爆破',
                        heart: 8,
                        Comprehensive: 6,
                    },
                    {
                        type: '炮手（一炮手）',
                        name: '沈某',
                        physical: 98,
                        shot: 50,
                        obstacle: '50s',
                        profession: 9,
                        skill: '驾驶',
                        heart: 8,
                        Comprehensive: 9,
                    },
                    {
                        type: '炮手（二炮手）',
                        name: '王某',
                        physical: 70,
                        shot: 98,
                        obstacle: '45s',
                        profession: 8,
                        skill: '维修',
                        heart: 9,
                        Comprehensive: 7,
                    },
                    {
                        type: '通讯兵',
                        name: '李某',
                        physical: 75,
                        shot: 60,
                        obstacle: '48s',
                        profession: 7,
                        skill: '计算机',
                        heart: 6,
                        Comprehensive: 7,
                    },
                    {
                        type: '侦查兵',
                        name: '赵某',
                        physical: 66,
                        shot: 88,
                        obstacle: '44s',
                        profession: 8,
                        skill: '爆破',
                        heart: 8,
                        Comprehensive: 6,
                    },
                ],
            }
        },
    }
</script>

<style scoped lang="less">
    ::-webkit-scrollbar {
        display: none;
        -ms-overflow-style: none;
        height: 100%;
        width: calc(100vw + 18px); /*浏览器滚动条的长度大约是 18px*/
        overflow: auto;
    }
    .upLoadBox{
        width: 100%;
        height: 100%;
        position: relative;
        .goBack{
            justify-items: flex-start;
            flex: 1;
            color: #81939b;
            font-size: 20px;
            position: absolute;
            left: 2%;
            top: 4%;
            span{
                display: block;
                width: 150px;
                height: 40px;
                line-height: 40px;
                margin-right: 50px;
                background-color: rgba(56, 141, 120, 0.2);
                border: 1px solid rgba(56, 141, 120, 0.5);
                color: #81939b;
                font-size: 18px;
                border-radius: 5px;
                outline: none;
                position: relative;
                text-align: center;
                cursor: pointer;
            }
        }
        .title{
            padding-top: 15px;
            height: 50px;
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            position: relative;
            span{
                font-size: 30px;
                font-weight: bold;
                font-stretch: normal;
                width: 700px;
                position: relative;
                text-align: center;
                i{
                    display: block;
                    width: 72px;
                    height: 67px;
                    background-image: url('~@/assets/img/bg/junhui.png');
                    background-size: 100%;
                    position: absolute;
                    top: -20px;
                }
            }
            .backButton{
                position: absolute;
                left: 30px;
                top: -20px;
                color: #1de9b6;
                font-size: 20px;
                cursor: pointer;
            }
            .left{
                width: 542px;
                display: block;
                height: 100%;
                background-image: url("~@/assets/img/bg/leftBg.png");
                background-size: 100% 100%;
            }
            .right{
                width: 542px;
                display: block;
                height: 100%;
                background-image: url("~@/assets/img/bg/rightBg.png");
                background-size: 100% 100%;
            }
        }
        .upLoad{
            position: absolute;
            width: 96%;
            height: 90%;
            left: 2%;
            top: 9%;
            border: 1px solid rgba(56, 141, 120, 0.5);
            .top{
                display: flex;
                align-items: center;
                justify-content: flex-end;
                width: 100%;
                height: 100px;
                border-bottom: 1px solid rgba(56, 141, 120, 0.5);
                .button{
                    width: 200px;
                    height: 60px;
                    line-height: 60px;
                    margin-right: 50px;
                    background-color: rgba(56, 141, 120, 0.2);
                    border: 1px solid rgba(56, 141, 120, 0.5);
                    color: #81939b;
                    font-size: 18px;
                    border-radius: 5px;
                    outline: none;
                    position: relative;
                    text-align: center;
                    cursor: pointer;
                    input{
                        display: block;
                        position: absolute;
                        width: 100%;
                        height: 100%;
                        opacity: 0;
                        left: 0;
                        top: 0;
                        z-index: 999;
                        cursor: pointer;
                    }
                }
            }
            .contentBox{
                width: 100%;
                height: calc(100% - 100px);
                .content{
                    width: 100%;
                    min-height: 100%;
                    .listTitle{
                        width: 100%;
                        height: 100px;
                        font-size: 20px;
                        border-bottom: 1px solid rgba(56, 141, 120, 0.5);
                        span{
                            float: left;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            height: 100%;
                            width: 204px;
                            font-size: 20px;
                            line-height: 20px;
                            &:nth-child(2n){
                                background-color: rgba(56, 141, 120, 0.5);
                            }
                        }
                    }
                    .listBox{
                        width: 100%;
                        height: 1055px;
                        overflow: auto;
                        li{
                            list-style: none;
                            width: 100%;
                            height: 100px;
                            float: left;
                            font-size: 20px;
                            display: flex;
                            align-items: center;
                            background-color: rgba(56, 141, 120, 0.5);
                            span{
                                float: left;
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                height: 100%;
                                width: 204px;
                                font-size: 20px;
                                line-height: 20px;
                            }
                            &:nth-child(2n){
                                background-color: #000;
                            }
                        }
                    }
                }
            }
        }
    }
</style>
