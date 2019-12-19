<template>
	<div class="login">
		<div class="title">
			<div class="left"></div>
			<span><i></i>士兵全息大数据管理与分析系统</span>
			<div class="right"></div>
		</div>
		<div class="loginBox">
			<div class="username">
				<span>账号：</span>
				<span><input type="text" v-model="username"></span>
			</div>
			<div class="password">
				<span>密码：</span>
				<span><input type="password" v-model="password"></span>
			</div>
			<div class="button" @click="goIndex">登录</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "login",
		data(){
			return {
				username: '',
				password: '',
			}
		},
		methods: {
			goIndex(){
				if(this.username !== '' && this.password !== ''){
					this.$router.push({
						path: '/newIndex'
					})
				}else{
					alert('请输入账号密码！');
				}
			}
		}
	}
</script>

<style scoped lang="less">
.login{
	width: 100vw;
	height: 100vh;
	position: relative;
	.title{
		margin-top: 20px;
		float: left;
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
	.loginBox{
		position: absolute;
		width: 600px;
		height: 350px;
		border-radius: 10px;
		left: 50%;
		top: 50%;
		margin-left: -300px;
		margin-top: -175px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		color: #81939b;
		background-color: rgba(56, 141, 120, 0.2);
		border: 1px solid rgba(56, 141, 120, 0.5);
		input{
			border: solid 1px rgba(56, 141, 120, .5);
			background-color: rgba(56, 141, 120, 0.2);
			outline: none;
			color: #fff;
			padding: 10px;
			font-size: 14px;
			width: 250px;
			border-radius: 5px;
		}
		.username{
			margin-bottom: 30px;
			display: flex;
			align-items: center;
		}
		.password{
			margin-bottom: 80px;
			display: flex;
			align-items: center;
		}
		.button{
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
}
</style>
