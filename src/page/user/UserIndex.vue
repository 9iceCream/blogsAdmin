<template>
    <div class="homepage-hero-module">
        <div class="video-container">
            <div :style="fixStyle" class="filter">
                <!-- 填充内容 -->
                <div class="center-letter">
                    <el-card class="box-card">
                        <router-view></router-view>
                    </el-card>
                </div>
                <!--<div v-for="item in owner.menu">
                    <router-link :to="item.menuLink"><el-button :id="item.id" type="text" class="myMenu">{{ item.menuName }}</el-button></router-link><br>
                </div>-->
            </div>
            <video :style="fixStyle" autoplay loop muted class="fillWidth" v-on:canplay="canplay">
                <source src="http://www.monolog7.com/mountains.mp4" type="video/mp4"/>
                浏览器不支持 video 标签，建议升级浏览器。
                <!--<source src="PATH_TO_WEBM" type="video/webm"/>
                浏览器不支持 video 标签，建议升级浏览器。-->
            </video>
            <div class="poster hidden" v-if="!vedioCanPlay">
                <img :style="fixStyle" src="http://www.monolog7.com/bg-mountain.png" alt="">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "UserIndex",
        data() {
            return {
                vedioCanPlay: false,
                fixStyle: '',
                input: ''
            }
        },
        methods: {
            canplay() {
                this.vedioCanPlay = true
            }
        },
        mounted: function() {
            window.onresize = () => {
                const windowWidth = document.body.clientWidth
                const windowHeight = document.body.clientHeight
                const windowAspectRatio = windowHeight / windowWidth
                let videoWidth
                let videoHeight
                if (windowAspectRatio < 0.5625) {
                    videoWidth = windowWidth
                    videoHeight = videoWidth * 0.5625
                    this.fixStyle = {
                        height: windowWidth * 0.5625 + 'px',
                        width: windowWidth + 'px',
                        'margin-bottom': (windowHeight - videoHeight) / 2 + 'px',
                        'margin-left': 'initial'
                    }
                } else {
                    videoHeight = windowHeight
                    videoWidth = videoHeight / 0.5625
                    this.fixStyle = {
                        height: windowHeight + 'px',
                        width: windowHeight / 0.5625 + 'px',
                        'margin-left': (windowWidth - videoWidth) / 2 + 'px',
                        'margin-bottom': 'initial'
                    }
                }
            }
            window.onresize()
        }
    }
</script>

<style scoped>
    .homepage-hero-module,
    .video-container {
        position: relative;
        height: 100vh;
        overflow: hidden;
    }

    .video-container .poster img,
    .video-container video {
        z-index: 0;
        position: absolute;
    }

    .video-container .filter {
        z-index: 1;
        position: absolute;
        background: rgba(0, 0, 0, 0.4);
    }
    .box-card {
        width: 30%;
        height: 60%;
        border-radius: 4px;
        margin:0 auto;
        margin-top: 10%;
        opacity:0.6;
    }
    .center-letter {
        margin:0 auto;
        text-align: center;
    }
</style>
