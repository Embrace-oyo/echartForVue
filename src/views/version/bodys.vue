<template>
    <div class="body">
        <div class="box">
            <div class="left">
	             <div class="nameAndButton">
								 <router-link tag="div" class="button" to="/newIndex"> < 返回 </router-link>
								 <h2>李世林</h2>
							 </div>
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
	              <div class="row2">
		              <div class="data1">
			              <div class="leftData">
				              <span class="index1">{{xinlvOne}}</span>
				              <span class="index2"><i>normal</i><i>心跳率</i></span>
			              </div>
			              <div class="rightData" id="xin1"></div>
		              </div>
		              <div class="data2">
			              <div class="leftData">
				              <span class="index1">{{xinlvTwo}}</span>
				              <span class="index2"><i>normal</i><i>呼吸率</i></span>
			              </div>
			              <div class="rightData" id="xin2"></div>
		              </div>
		              <div class="data3">
			              <div class="leftData">
				              <span class="index1">{{xinlvThree}}</span>
				              <span class="index2"><i>normal</i><i>血压率</i></span>
			              </div>
			              <div class="rightData" id="xin3"></div>
		              </div>
	              </div>
	              <div class="row3">
		              <li>
			              <div class="showTxt">
				              <span>战术能力综合分析</span>
				              <span>功能全线排查仪器</span>
				              <span><i>STANDARD</i><i>POOR</i><i>TIME</i></span>
			              </div>
			              <span class="add">+</span>
			              <span class="txt">856<i>ME</i></span>
		              </li>
		              <li>
			              <div class="showTxt">
				              <span>身体综合素质分析</span>
				              <span>功能全线排查仪器</span>
				              <span><i>STANDARD</i><i>POOR</i><i>TIME</i></span>
			              </div>
			              <span class="add">+</span>
			              <span class="txt">136<i>ME</i></span>
		              </li>
		              <li>
			              <div class="showTxt">
				              <span>全天候作战能力分析</span>
				              <span>功能全线排查仪器</span>
				              <span><i>STANDARD</i><i>POOR</i><i>TIME</i></span>
			              </div>
			              <span class="jian">-</span>
			              <span class="txt">574<i>ME</i></span>
		              </li>
	              </div>
	              <div class="row4">
		              <div class="icon">
			              <i></i>
			              <i></i>
		              </div>
		              <div class="des">
			              <span>人体机能检测</span>
			              <span>心脏整体检测</span>
		              </div>
		              <div class="lines">
			              <i></i>
			              <i></i>
		              </div>
		              <div class="zonghe">
			              <span>综合评分<i style="color: #1dcdfd;">102</i></span>
			              <span>综合评分<i>163</i></span>
		              </div>
		              <div class="lines">
			              <i></i>
			              <i></i>
		              </div>
		              <div class="zonghe">
			              <span><i style="margin-right: 10px;color: #1dcdfd;">362</i>pwr</span>
			              <span><i style="margin-right: 10px">224</i>pwr</span>
		              </div>
		              <div class="lines">
			              <i></i>
			              <i></i>
		              </div>
	              </div>
            </div>
            <div class="center">
							<router-link tag="div" class="button" to="/gis">士兵行动轨迹</router-link>
						</div>
            <div class="right">
	            <div class="info">
		            <div class="time"><i></i><span class="hour">{{hour}}:{{minute}}</span><span class="sen">:{{second}}</span></div>
		            <div class="arrow"></div>
		            <div class="tianqi"><i></i><span>20/30</span><span style="color:#3aff6f;font-size: 0.15rem;">℃</span></div>
	            </div>
	            <div class="rRow1">
		            <div class="sysData">
			            <span class="num">127.<span class="textLittle">39</span></span>
			            <span class="text">免疫系统综合值</span>
		            </div>
		            <div class="sysIcon">
			            <div class="clom1">
				            <span>GDGW</span>
				            <span>GDGW</span>
			            </div>
			            <div class="clom2">标准值（63.27 - 156.86）</div>
			            <div class="clom3"></div>
		            </div>
	            </div>
	            <div class="rRow2">
		            <li>
			            <span class="icon"></span>
			            <span class="word">大脑</span>
			            <span class="mask">9473</span>
		            </li>
		            <li>
			            <span class="icon"></span>
			            <span class="word">心脏</span>
			            <span class="mask">746</span>
		            </li>
		            <li>
			            <span class="icon"></span>
			            <span class="word">基因</span>
			            <span class="mask">4337</span>
		            </li>
		            <li>
			            <span class="icon"></span>
			            <span class="word">骨骼</span>
			            <span class="mask">6457</span>
		            </li>
		            <li>
			            <span class="icon"></span>
			            <span class="word">肺</span>
			            <span class="mask">783</span>
		            </li>
	            </div>
	            <div class="rRow3">
		            <div class="style">
			            <li>
				            <span>GT6</span>
				            <span></span>
			            </li>
			            <li>
				            <span>BH2</span>
				            <span></span>
			            </li>
			            <li>
				            <span style="color:rgb(236,204,87)">HD7</span>
				            <span style="background-color:rgb(236,204,87)"></span>
			            </li>
		            </div>
		            <span>RP - 96573</span>
		            <i></i>
	            </div>
	            <div class="rRow4">
		            <li>
			            <div class="ge">
				            <span v-for="itme of 20"></span>
			            </div>
			            <div class="txt">RP-63534</div>
		            </li>
		            <li>
			            <div class="ge">
				            <span style="background-color: rgb(236, 204, 87);" v-for="itme of 20"></span>
			            </div>
			            <div class="txt" style="color: rgb(236, 204, 87);">BD-75436</div>
		            </li>
	            </div>
	            <div class="rRow5">
		            <div class="list" id="list">
			           <!-- <li v-for="item in 30" :style="{'height': Math.floor(Math.random() * (100 - 1)) + 1 + '%'}"></li>-->
		            </div>
		            <div class="desc">
			            <span>00.32</span>
			            <span>01.01</span>
			            <span>01.65</span>
			            <span>08.32</span>
			            <span>00.06</span>
			            <span>00.32</span>
			            <span>00.75</span>
			            <span>02.68</span>
		            </div>
	            </div>
	            <div class="rRow6">
		            <li>
			            <i></i>
			            <span>当前心率HR</span>
		            </li>
		            <li>
			            <i></i>
			            <span>血红担保HGB</span>
		            </li>
		            <li>
			            <i></i>
			            <span>血小板PLT</span>
		            </li>
	            </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "bodys",
		    data(){
        	return {
        			xinlvOne: 0,
        			xinlvTwo: 0,
        			xinlvThree: 0,
							hour: 0,
							minute: 0,
							second: 0
	        }
		    },
		    methods: {
          xin1(){
							let myChart = this.$echarts.init(document.getElementById("xin1"));
							let date = [];
							let randomData = [];
							for(let i = 0; i<30; i++){
									date.push('第' + (i+1) + '天');
									let rank = Math.floor(Math.random()*150);
									randomData.push(rank);
									this.xinlvOne = rank;
							}
							let option = {
									grid: {
										left: 0,
										top: 0,
										right: 0,
										bottom: 0
									},
									xAxis: {
											axisLine: {
												show: false,
											},
											splitLine: {
													show: true,
													lineStyle: {
															color: '#1b1f20'
													}
											},
											type: 'category',
											data: date
									},
									yAxis: {
											axisLine: {
													show: false,
											},
											splitLine: {
													show: true,
													lineStyle: {
															color: '#1b1f20'
													}
											},
											type: 'value'
									},
									series: [{
											data: randomData,
											type: 'line',
											symbol: "none",
											lineStyle: {
													color: '#3aff6f'
											}
									}]
							};
							myChart.setOption(option);
							let len = date.length;
							let that = this;
							setInterval(function(){
									let rank = Math.floor(Math.random()*150);
									that.xinlvOne = rank;
									randomData.push(rank);
									randomData.shift();
									date.push(len++);
									date.shift();
									myChart.setOption({
											xAxis: {
													data: date
											},
											series: [{
													data: randomData
											}]
									});
							}, 1000)
					},
					xin2(){
							let myChart = this.$echarts.init(document.getElementById("xin2"));
							let date = [];
							let randomData = [];
							for(let i = 0; i<30; i++){
									date.push('第' + (i+1) + '天');
									let rank = Math.floor(Math.random()*150);
									randomData.push(rank);
									this.xinlvTwo = rank;
							}
							let option = {
									grid: {
											left: 0,
											top: 0,
											right: 0,
											bottom: 0
									},
									xAxis: {
											axisLine: {
													show: false,
											},
											splitLine: {
													show: true,
													lineStyle: {
															color: '#1b1f20'
													}
											},
											type: 'category',
											data: date
									},
									yAxis: {
											axisLine: {
													show: false,
											},
											splitLine: {
													show: true,
													lineStyle: {
															color: '#1b1f20'
													}
											},
											type: 'value'
									},
									series: [{
											data: randomData,
											type: 'line',
											symbol: "none",
											lineStyle: {
													color: 'rgb(225,119,53)'
											}
									}]
							};
							myChart.setOption(option);
							let len = date.length;
							let that = this;
							setInterval(function(){
									let rank = Math.floor(Math.random()*150);
									that.xinlvTwo = rank;
									randomData.push(rank);
									randomData.shift();
									date.push(len++);
									date.shift();
									myChart.setOption({
											xAxis: {
													data: date
											},
											series: [{
													data: randomData
											}]
									});
							}, 1000)
					},
					xin3(){
							let myChart = this.$echarts.init(document.getElementById("xin3"));
							let date = [];
							let randomData = [];
							for(let i = 0; i<30; i++){
									date.push('第' + (i+1) + '天');
									let rank = Math.floor(Math.random()*150);
									randomData.push(rank);
									this.xinlvThree = rank;
							}
							let option = {
									grid: {
											left: 0,
											top: 0,
											right: 0,
											bottom: 0
									},
									xAxis: {
											axisLine: {
													show: false,
											},
											splitLine: {
													show: true,
													lineStyle: {
															color: '#1b1f20'
													}
											},
											type: 'category',
											data: date
									},
									yAxis: {
											axisLine: {
													show: false,
											},
											splitLine: {
													show: true,
													lineStyle: {
															color: '#1b1f20'
													}
											},
											type: 'value'
									},
									series: [{
											data: randomData,
											type: 'line',
											symbol: "none",
											lineStyle: {
													color: 'rgb(239,199,76)'
											}
									}]
							};
							myChart.setOption(option);
							let len = date.length;
							let that = this;
							setInterval(function(){
									let rank = Math.floor(Math.random()*150);
									that.xinlvThree = rank;
									randomData.push(rank);
									randomData.shift();
									date.push(len++);
									date.shift();
									myChart.setOption({
											xAxis: {
													data: date
											},
											series: [{
													data: randomData
											}]
									});
							}, 1000)
					},
			    list(){
							let myChart = this.$echarts.init(document.getElementById("list"));
							let option = {
									color: ['#1dcdfd'],
									grid: {
											left: 0,
											top: 0,
											right: 0,
											bottom: 0
									},
									xAxis : [
											{
													type : 'category',
													axisLine: {
															show: false,
													},
													splitLine: {
															show: false,
															lineStyle: {
																	color: '#1b1f20'
															}
													},
													data : (function (){
															var now = new Date();
															var res = [];
															var len = 40;
															while (len--) {
																	res.unshift(now.toLocaleTimeString().replace(/^\D*/,''));
																	now = new Date(now - 2000);
															}
															return res;
													})(),
													axisTick: {
															alignWithLabel: true
													}
											}
									],
									yAxis : [
											{
													type : 'value',
													axisLine: {
															show: false,
													},
													splitLine: {
															show: false,
															lineStyle: {
																	color: '#1b1f20'
															}
													},
											}
									],
									series : [
											{
													type: 'bar',
													barWidth: '20%',
													data:(function (){
															var res = [];
															var len = 40;
															while (len--) {
																	res.push(Math.round(Math.random() * 1000));
															}
															return res;
													})()
											}
									]
							};
							myChart.setOption(option);
							setInterval(() => {
								let axisData = (new Date()).toLocaleTimeString().replace(/^\D*/,'');
								let data = option.series[0].data;
								data.shift();
								data.push(Math.round(Math.random() * 1000));
								option.xAxis[0].data.shift();
								option.xAxis[0].data.push(axisData);
								myChart.setOption(option);
								console.log(axisData, (Math.random() * 10 + 5).toFixed(1) - 0);
							}, 1500);
			    },
					getTime(){
						let date = new Date();
						let year = date.getFullYear();
						let month = date.getMonth() + 1;
						let thisDate = date.getDate();
						let day = new Array("星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六")[date.getDay()];
						let hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
						let minute = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
						let second = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
						this.hour = hour;
						this.minute = minute;
						this.second = second;
						let that = this;
						setTimeout(() => {
							that.getTime()
						}, 1000)
					},
		    },
		    mounted() {
        		this.xin1();
        		this.xin2();
        		this.xin3();
        		this.getTime();
        		this.list();
				}
		}
</script>

<style scoped lang="less">
    .body{
        width: 100%;
        height: 100%;
        background-image: url("~@/assets/img/bodyBg.jpg");
        background-size: cover;
        position: relative;
        .box{
            display: flex;
						overflow: auto;
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
								display: flex;
								justify-content: center;
								align-items: flex-end;
								.button{
									display: block;
									width: 120px;
									height: 30px;
									line-height: 30px;
									background-color: rgba(58, 255, 111, 0.46);
									text-align: center;
									padding: 10px;
									border: 1px solid #3aff6f;
									margin-bottom: 10px;
									cursor: pointer;
									border-radius: 5px;
									font-size: 15px;
									font-weight: bold;
								}
            }
            .left{
                width: 700px;
                height: 100%;
                margin-left: 50px;
								.nameAndButton{
									display: flex;
									align-items: center;
									h2{
										float: left;
										margin: 0;
										font-size: 50px;
										font-weight: bold;
										margin-left: 50px;
									}
									.button{
										display: block;
										width: 120px;
										height: 30px;
										line-height: 30px;
										background-color: rgba(58, 255, 111, 0.46);
										text-align: center;
										padding: 10px;
										border: 1px solid #3aff6f;
										cursor: pointer;
										border-radius: 5px;
										font-size: 15px;
										font-weight: bold;
									}
								}
                .row1{
                    width: 100%;
                    border-bottom: 1px solid #42474a;
	                  float: left;
	                  display: flex;
	                  align-items: center;
	                  justify-content: space-between;
	                  padding-bottom: 30px;
                    .bodyPoint{
                        float: left;
                        display: flex;
                        justify-content: flex-start;
                        align-items: center;
                        .icon1{
                            display: block;
                            width: 98px;
                            height: 138px;
                            background-image: url("~@/assets/img/icon1.png");
	                          background-size: contain;
                            background-repeat: no-repeat;
                            background-position: center center;
	                          margin-right: 20px;
                        }
                        .bodyData{
                            display: flex;
                            flex-direction: column;
                            .num{
                                font-size: 100px;
                                color: #3aff6f;
                                .textLittle{
                                    font-size: 40px;
                                }
                            }
                            .text{
                                font-size: 40px;
                                color: #aaaeaf;
                            }
                        }
                        .icon2{
                            display: block;
                            width: 10px;
                            height: 150px;
                            background-image: url("~@/assets/img/icon2.png");
	                          background-size: contain;
                            background-repeat: no-repeat;
                            background-position: center center;
                            margin-left: 50px;
                        }
                    }
                    .live{
                        height: 150px;
                        float: left;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        margin: 0 40px;
                        .liveBox{
                            display: flex;
                            justify-content: flex-start;
                            align-items: center;
                            .progress{
                                display: block;
                                width: 12px;
                                height: 70px;
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
                                    font-size: 40px;
                                }
                                span:nth-child(2){
                                    font-size: 15px;
                                    color: #b7b8ba;
                                }
                            }
                        }
                    }
                }
	              .row2{
		              width: 100%;
		              display: flex;
		              flex-direction: column;
		              justify-content: space-between;
		              float: left;
		              border-bottom: 1px solid #42474a;
		              padding-bottom: 30px;
		              .data1, .data2, .data3{
			              width: 100%;
			              margin: 10px 0;
			              display: flex;
			              align-items: center;
			              justify-content: space-between;
			              .leftData{
				              display: flex;
				              align-items: center;
				              justify-content: flex-start;
				              .index1{
					              font-size: 50px;
					              color: #3aff6f;
				              }
				              .index2{
					              display: flex;
					              flex-direction: column;
					              margin-left: 20px;
					              i{
						              font-style: normal;
						              &:nth-child(1){
							              font-size: 12px;
							              position: relative;
							              text-indent: 14px;
							              color: #b7b8ba;
							              &:after{
								              content: '';
								              position: absolute;
								              left: 0;
								              top: 5px;
								              width: 8px;
								              height: 8px;
								              border-radius: 50%;
								              background-color: #3aff6f;
							              }
						              }
						              &:nth-child(2){
							              font-size: 22px;
						              }
					              }
				              }
			              }
			              .rightData{
				              width: 400px;
				              height: 60px;
				              margin-right: 5px;
				              border: 1px solid rgb(27,31,32);
			              }
		              }
		              .data2{
			              .leftData{
				              .index1{
					              color: rgb(247,80,10);
				              }
				              .index2{
					              i{
						              &:nth-child(1){
							              &:after{
								              background-color: rgb(247,80,10);
							              }
						              }
					              }
				              }
			              }
		              }
		              .data3{
			              .leftData{
				              .index1{
					              color: rgb(251,190,19);
				              }
				              .index2{
					              i{
						              &:nth-child(1){
							              &:after{
								              background-color: rgb(251,190,19);
							              }
						              }
					              }
				              }
			              }
		              }
	              }
	              .row3{
		              float: left;
		              width: 100%;
		              margin-top: 10px;
		              li{
			              list-style: none;
			              display: flex;
			              justify-content: space-between;
			              align-items: center;
			              border-bottom: 1px solid #42474a;
			              padding-bottom: 20px;
			              margin-top: 10px;
			              .showTxt{
				              display: flex;
				              flex-direction: column;
				              span:nth-child(1){
					              font-size: 28px;
				              }
				              span:nth-child(2){
												font-size: 15px;
					              margin: 5px 0;
					              color: #aaaeaf;
				              }
				              span:nth-child(3){
												font-size: 12px;
					              i{
						              font-style: normal;
						              padding: 0 10px;
						              &:nth-child(1){
							              padding-left: 0;
						              }
					              }
				              }
			              }
			              .add{
				              font-size: 50px;
				              color: #3aff6f;
			              }
			              .jian{
				              font-size: 50px;
				              color: rgb(29, 205, 253);
			              }
			              .txt{
				              font-size: 50px;
				              i{
					              font-style: normal;
					              margin-left: 30px;
					              font-size: 14px;
					              font-weight: bold;
				              }
			              }
		              }
	              }
	              .row4{
		              float: left;
		              display: flex;
		              justify-content: flex-start;
		              margin-top: 30px;
		              .icon{
			              display: flex;
			              flex-direction: column;
			              justify-content: space-around;
			              i{
				              display: block;
				              width: 50px;
				              height: 50px;
				              background-image: url("~@/assets/img/icon3.png");
				              background-size: cover;
				              background-position: center center;
				              background-repeat: no-repeat;
				              &:nth-child(2){
					              background-image: url("~@/assets/img/icon4.png");
				              }
			              }
		              }
		              .des{
			              margin-left: 20px;
			              display: flex;
			              flex-direction: column;
			              justify-content: space-around;
			              span{
				              font-size: 20px;
			              }
		              }
		              .lines{
			              margin-left: 25px;
			              display: flex;
			              flex-direction: column;
			              justify-content: space-around;
			              i{
				              display: block;
				              width: 1px;
				              height: 30px;
				              background-color: #aaaeaf;
			              }
		              }
		              .zonghe{
			              margin-left: 20px;
			              display: flex;
			              flex-direction: column;
			              justify-content: space-around;
			              span{
				              font-size: 15px;
				              color: #aaaeaf;
				              display: flex;
				              align-items: center;
				              i{
					              font-style: normal;
					              font-size: 40px;
					              margin-left: 10px;
					              color: #3aff6f;
				              }
			              }
		              }
	              }
            }
            .right{
                width: 700px;
                height: 100%;
                margin-right: 50px;
	              .info{
		              display: flex;
		              justify-content: flex-end;
		              align-items: center;
		              .time{
			              font-size: 50px;
			              display: flex;
			              align-items: center;
			              margin-right: 30px;
			              i{
				              display: block;
				              width: 30px;
				              height: 30px;
				              margin-right: 10px;
				              background-image: url("~@/assets/img/iconTime.jpg");
				              background-size: cover;
			              }
			              .sen{
				              font-size: 30px;
				              position: relative;
				              margin-left: 3px;
				              &:after{
					              content: '';
					              display: inline-block;
					              width: 100%;
					              height: 2px;
					              position: absolute;
					              background-color: #3aff6f;
					              left: 0;
					              bottom: 0;
				              }
			              }
		              }
		              .arrow{
			              width: 60px;
			              height: 40px;
			              margin-right: 30px;
			              background-image: url("~@/assets/img/iconArrow.jpg");
			              background-size: contain;
			              background-repeat: no-repeat;
			              background-position: center center;
		              }
		              .tianqi{
			              font-size: 50px;
			              display: flex;
			              align-items: center;
			              i{
				              display: block;
				              width: 30px;
				              height: 30px;
				              margin-right: 10px;
				              background-image: url("~@/assets/img/iconCloud.jpg");
				              background-size: cover;
			              }
		              }
	              }
	              .rRow1{
		              width: 100%;
		              float: left;
		              display: flex;
		              align-items: center;
		              justify-content: space-between;
		              margin-top: 20px;
		              .sysData{
			              display: flex;
			              flex-direction: column;
			              .num{
				              font-size: 100px;
				              color: #fff;
				              .textLittle{
					              font-size: 40px;
				              }
			              }
			              .text{
				              font-size: 40px;
				              color: #3aff6f;
			              }
		              }
		              .sysIcon{
			              display: flex;
			              flex-direction: column;
			             .clom1{
			               margin-bottom: 60px;
				             span{
					             display: block;
					             font-size: 20px;
					             float: right;
					             margin: 0 10px;
					             padding: 5px;
					             background: #fff;
					             color: #000;
					             &:nth-child(1){
						             background-color: #3aff6f;
					             }
				             }
			             }
		               .clom2{
			               font-size: 25px;
			               margin-bottom: 10px;
		               }
			             .clom3{
				             width: 100%;
				             height: 20px;
				             background-image: url("~@/assets/img/icon5.png");
				             background-size: cover;
			             }
		              }
	              }
	              .rRow2{
		              width: 100%;
		              float: left;
		              margin-top: 50px;
		              display: flex;
		              justify-content: space-between;
		              li{
			              list-style: none;
			              width: 100px;
			              height: 130px;
			              border: 1px solid #3aff6f;
			              border-radius: 10px;
			              position: relative;
			              .icon{
				              display: block;
				              position: absolute;
				              left: 25px;
				              top: 10px;
				              width: 50px;
				              height: 50px;
				              background-image: url("~@/assets/img/icon8.png");
				              background-size: cover;
				              background-repeat: no-repeat;
				              background-position: center center;
			              }
			              .word{
				              position: absolute;
				              bottom: 40px;
				              display: inline-block;
				              width: 100%;
				              font-size: 16px;
				              text-align: center;
			              }
			              .mask{
				              position: absolute;
				              width: 100%;
				              height: 30px;
				              font-size: 16px;
				              font-weight: bold;
				              background-color: rgba(58, 255, 111, 0.46);
				              bottom: 0;
				              border-radius: 0 0 10px 10px;
				              text-align: center;
				              line-height: 30px;
			              }
			              &:nth-child(2){
				              .icon{
					              background-image: url("~@/assets/img/icon9.png");
				              }
			              }
			              &:nth-child(3){
				              .icon{
					              background-image: url("~@/assets/img/icon10.png");
				              }
			              }
			              &:nth-child(4){
				              border: 1px solid rgb(29, 205, 253);
				              .icon{
					              background-image: url("~@/assets/img/icon11.png");
				              }
				              .mask{
					              background-color: rgba(29, 205, 253, 0.46);
				              }
			              }
			              &:nth-child(5){
				              border: 1px solid rgb(29, 205, 253);
				              .icon{
					              background-image: url("~@/assets/img/icon12.png");
				              }
				              .mask{
					              background-color: rgba(29, 205, 253, 0.46);
				              }
			              }
		              }
	              }
	              .rRow3{
		              width: 100%;
		              float: left;
		              display: flex;
		              justify-content: space-between;
		              align-items: center;
		              margin-top: 50px;
		              padding-bottom: 20px;
		              border-bottom: 1px solid #42474a;
		              .style{
			              li{
				              float: left;
				              margin-right: 10px;
				              list-style: none;
				              width: 80px;
				              height: 60px;
				              background-color: rgb(36, 44, 61);
				              display: flex;
				              flex-direction: column;
				              align-content: center;
				              justify-content: center;
				              span{
					              font-size: 26px;
					              text-align: center;
					              &:nth-child(2){
						              width: 50px;
						              height: 6px;
						              background-color: #fff;
						              margin: 10px auto;
					              }
				              }
			              }
		              }
		              span{}
		              i{
			              display: block;
			              width: 80px;
			              height: 80px;
			              background-image: url("~@/assets/img/icon99.jpg");
			              background-size: cover;
			              background-position: center center;
			              background-repeat: no-repeat;
		              }
	              }
	              .rRow4{
		              width: 100%;
		              float: left;
		              list-style: none;
		              margin-top: 20px;
		              li{
			              display: flex;
			              align-items: center;
			              justify-content: space-between;
			              margin-bottom: 15px;
			              .ge{
				              width: 400px;
				              height: 28px;
				              border: 1px solid #42474a;
				              display: flex;
				              align-items: center;
				              span{
					              display: block;
					              width: 10px;
					              height: 10px;
					              background-color: #3aff6f;
					              margin: 0 3px;
				              }
			              }
			              .txt{
				              color: #3aff6f;
				              font-size: 26px;
				              font-weight: bold;
			              }
		              }
	              }
	              .rRow5{
		              width: 100%;
		              float: left;
		              list-style: none;
		              margin-top: 20px;
									.list{
										display: flex;
										justify-content: space-between;
										align-items: flex-end;
										height: 150px;
										li{
											width: 5px;
											height: 100%;
											background-color: rgb(96, 210, 228);
										}
									}
		              .desc{
			              margin-top: 10px;
			              display: flex;
			              justify-content: space-between;
			              span{
				              font-size: 16px;
				              color: #aaaeaf;
			              }
		              }
	              }
	              .rRow6{
		              width: 100%;
		              float: left;
		              list-style: none;
		              margin-top: 20px;
		              list-style: none;
		              display: flex;
		              align-items: center;
		              justify-content: space-between;
		              li{
			              display: flex;
			              flex-direction: column;
			              align-items: center;
			              i{
				              width: 100px;
				              height: 100px;
				              background-image: url("~@/assets/img/icon13.png");
				              background-size: cover;
				              background-repeat: no-repeat;
				              background-position: center center;
			              }
			              span{
				              font-size: 20px;
				              margin-top: 10px;
			              }
			              &:nth-child(2){
				              i{
					              background-image: url("~@/assets/img/icon14.png");
				              }
			              }
			              &:nth-child(3){
				              i{
					              background-image: url("~@/assets/img/icon15.png");
				              }
			              }
		              }
	              }
            }
        }
    }
</style>
