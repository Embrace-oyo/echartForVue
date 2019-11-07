<template>
	<div class="upLoadBox">
		<div class="title">
			<div class="left"></div>
			<span><i></i>士兵全息大数据管理与分析系统</span>
			<div class="right"></div>
		</div>
		<div class="upLoad">
			<div class="top">
				<router-link tag="div" to="/newIndex" class="button">返回</router-link>
				<div class="button">
					批量导入
					<input type="file" multiple="multiple" ref="file">
				</div>
			</div>
			<div class="contentBox">
				<div class="content">
					<li v-for="(item, index) of fileList" :key="index">
						<span class="name">{{item.name}}</span>
						<span class="size">{{getSize(item.size)}}</span>
						<span class="time">{{getTime(item.time)}}</span>
					</li>
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
							fileList: [],
					}
				},
				methods: {
						getTime(date){
								let year = date.getFullYear();
								let month = date.getMonth() + 1;
								let thisDate = date.getDate();
								let day = new Array("星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六")[date.getDay()];
								let hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
								let minute = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
								let second = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
								return `${year}年${month}月${thisDate}日 ${hour}:${minute}:${second}`
						},
						getSize(size){
								return (size / 1024 / 1024).toFixed(2) + 'M'
						}
				},
				mounted() {
						let that = this;
						this.$refs['file'].addEventListener('change', (e) => {
								let obj = e.target.files;
								Object.keys(obj).forEach(function(key){
										that.fileList.push({name: obj[key].name, size: obj[key].size, time: obj[key].lastModifiedDate})
								});
						});
				}
		}
</script>

<style scoped lang="less">
	.upLoadBox{
		width: 100%;
		height: 100%;
		position: relative;
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
				overflow: auto;
				.content{
					width: 100%;
					min-height: 100%;
/*					background: linear-gradient(#000 50%, rgba(56, 141, 120, 0.5) 0);
					background-size: 100% 100px;*/
					li{
						list-style: none;
						width: 100%;
						height: 100px;
						float: left;
						font-size: 20px;
						display: flex;
						justify-content: space-around;
						align-items: center;
						background-color: rgba(56, 141, 120, 0.5);
						span{
							display: block;
							height: 100%;
							line-height: 100px;
						}
						.name{
							min-width: 600px;
						}
						.size{
							min-width: 300px;
						}
						.time{
							min-width: 600px;
						}
						&:nth-child(2n){
							background-color: #000;
						}
					}
				}
			}
		}
	}
</style>
