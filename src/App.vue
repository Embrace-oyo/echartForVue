<template>
    <div id="app">
        <router-view class="content"/>
    </div>
</template>


<style lang="less">
html {
	overflow: -moz-hidden-unscrollable; /*注意！若只打 hidden，chrome 的其它 hidden 会出问题*/
	height: 100%;
}
body::-webkit-scrollbar {
	display: none;
	-ms-overflow-style: none;
	height: 100%;
	width: calc(100vw + 18px); /*浏览器滚动条的长度大约是 18px*/
	overflow: auto;
}
#app{
	width: 100vw;
	height: 100vh;
	min-width: 1440px;
	min-height: 788px;
	background-color: #000;
	color: #fff;
}
</style>
