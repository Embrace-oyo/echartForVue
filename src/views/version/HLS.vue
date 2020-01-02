<template>
    <div class="hls">
        <div class="title">
            <div class="left"></div>
            <span><i></i>士兵全息大数据管理与分析系统</span>
            <div class="right"></div>
        </div>
        <div class="HLS" ref="HLS">
            <div class="videoBox">
                <video  ref="hls0" autoplay="autoplay" controls muted="muted"></video>
                <video  ref="hls1" autoplay="autoplay" controls muted="muted"></video>
                <video  ref="hls2" autoplay="autoplay" controls muted="muted"></video>
                <video  ref="hls3" autoplay="autoplay" controls muted="muted"></video>
                <video  ref="hls4" autoplay="autoplay" controls muted="muted"></video>
                <video  ref="hls5" autoplay="autoplay" controls muted="muted"></video>
                <video  ref="hls6" autoplay="autoplay" controls muted="muted"></video>
                <video  ref="hls7" autoplay="autoplay" controls muted="muted"></video>
            </div>
        </div>
    </div>
</template>

<script>
    import Hls from 'hls.js';
    export default {
        name: "HLS",
        data(){
            return {
                videoUrl: [
                    'http://hls.open.ys7.com/openlive/f01018a141094b7fa138b9d0b856507b.m3u8',
                    'https://videos-3.earthcam.com/fecnetwork/4017timessquare.flv/chunklist_w1274620080.m3u8',
                    'https://videos-3.earthcam.com/fecnetwork/9974.flv/chunklist_w1746629090.m3u8',
                    'https://videos-3.earthcam.com/fecnetwork/15559.flv/chunklist_w315444557.m3u8',
                    'https://videos-3.earthcam.com/fecnetwork/hdtimes10.flv/chunklist_w776411616.m3u8',
                ]
            }
        },
        methods: {
            play0(){
                let url = this.videoUrl[0];
                if(Hls.isSupported()) {
                    let hls0 = new Hls();
                    hls0.loadSource(url);
                    hls0.attachMedia(this.$refs['hls0']);
                    hls0.on(Hls.Events.MANIFEST_PARSED,function() {
                        this.$refs['hls0'].play();
                    });
                }else if (this.$refs['hls0'].canPlayType('application/vnd.apple.mpegurl')) {
                    this.$refs['hls0'].src = '';
                    this.$refs['hls0'].addEventListener('loadedmetadata',function() {
                        this.$refs['hls0'].play();
                    });
                }
            },
            play1(){
                let url = this.videoUrl[1];
                if(Hls.isSupported()) {
                    let hls0 = new Hls();
                    hls0.loadSource(url);
                    hls0.attachMedia(this.$refs['hls1']);
                    hls0.on(Hls.Events.MANIFEST_PARSED,function() {
                        this.$refs['hls1'].play();
                    });
                }else if (this.$refs['hls1'].canPlayType('application/vnd.apple.mpegurl')) {
                    this.$refs['hls1'].src = '';
                    this.$refs['hls1'].addEventListener('loadedmetadata',function() {
                        this.$refs['hls1'].play();
                    });
                }
            },
            play2(){
                let url = this.videoUrl[2];
                if(Hls.isSupported()) {
                    let hls0 = new Hls();
                    hls0.loadSource(url);
                    hls0.attachMedia(this.$refs['hls2']);
                    hls0.on(Hls.Events.MANIFEST_PARSED,function() {
                        this.$refs['hls2'].play();
                    });
                }else if (this.$refs['hls2'].canPlayType('application/vnd.apple.mpegurl')) {
                    this.$refs['hls2'].src = '';
                    this.$refs['hls2'].addEventListener('loadedmetadata',function() {
                        this.$refs['hls2'].play();
                    });
                }
            },
            play3(){
                let url = this.videoUrl[3];
                if(Hls.isSupported()) {
                    let hls0 = new Hls();
                    hls0.loadSource(url);
                    hls0.attachMedia(this.$refs['hls3']);
                    hls0.on(Hls.Events.MANIFEST_PARSED,function() {
                        this.$refs['hls3'].play();
                    });
                }else if (this.$refs['hls3'].canPlayType('application/vnd.apple.mpegurl')) {
                    this.$refs['hls3'].src = '';
                    this.$refs['hls3'].addEventListener('loadedmetadata',function() {
                        this.$refs['hls3'].play();
                    });
                }
            },
            play4(){
                let url = this.videoUrl[4];
                if(Hls.isSupported()) {
                    let hls0 = new Hls();
                    hls0.loadSource(url);
                    hls0.attachMedia(this.$refs['hls4']);
                    hls0.on(Hls.Events.MANIFEST_PARSED,function() {
                        this.$refs['hls4'].play();
                    });
                }else if (this.$refs['hls4'].canPlayType('application/vnd.apple.mpegurl')) {
                    this.$refs['hls4'].src = '';
                    this.$refs['hls4'].addEventListener('loadedmetadata',function() {
                        this.$refs['hls4'].play();
                    });
                }
            },
        },
        mounted() {
            this.play0();
            this.play1();
            this.play2();
            this.play3();
            this.play4();
        }
    }
</script>

<style scoped lang="less">
    .hls{
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
        .HLS{
            width: 100%;
            height: calc(100% - 65px);
            float: left;
            overflow: hidden;
            .videoBox{
                padding: 20px;
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
                align-items: center;
                video{
                    display: block;
                    width: 450px;
                    height: 400px;
                    outline: none;
                    background-color: rgba(56, 141, 120, 0.2);
                    border: 1px solid rgba(56, 141, 120, 0.5);
                    margin: 15px 0;
                }
            }
        }
    }
</style>