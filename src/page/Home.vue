<template>
    <div id="home">
        <el-container :style="height">
            <!--<el-header>
                <el-row class="row-right">
                    <el-button type="primary" plain @click="loginShow">登录</el-button>
                    <el-button type="primary" plain @click="registerShow">注册</el-button>
                </el-row>
            </el-header>
            <el-main>
                <el-carousel :interval="4000" type="card" height="340px">
                    <el-carousel-item v-for="item in items" :key="item.id">
                        <img :src="item.view" class="image"></img>
                    </el-carousel-item>
                </el-carousel>
                <el-divider><i class="el-icon-loading"></i></el-divider>
            </el-main>-->
            <el-aside width="30%">
                <!--<el-menu
                        default-active="2"
                        class="el-menu-vertical-demo"
                        @open="handleOpen"
                        @close="handleClose"
                        background-color="#b7bbbf"
                        text-color="#fff"
                        active-text-color="#ffd04b">
                    <el-submenu index="1">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>导航一</span>
                        </template>
                        <el-menu-item-group>
                            <template slot="title">分组一</template>
                            <el-menu-item index="1-1">选项1</el-menu-item>
                            <el-menu-item index="1-2">选项2</el-menu-item>
                        </el-menu-item-group>
                        <el-menu-item-group title="分组2">
                            <el-menu-item index="1-3">选项3</el-menu-item>
                        </el-menu-item-group>
                        <el-submenu index="1-4">
                            <template slot="title">选项4</template>
                            <el-menu-item index="1-4-1">选项1</el-menu-item>
                        </el-submenu>
                    </el-submenu>
                    <el-menu-item index="2">
                        <i class="el-icon-menu"></i>
                        <span slot="title">导航二</span>
                    </el-menu-item>
                    <el-menu-item index="3" disabled>
                        <i class="el-icon-document"></i>
                        <span slot="title">导航三</span>
                    </el-menu-item>
                    <el-menu-item index="4">
                        <i class="el-icon-setting"></i>
                        <span slot="title">导航四</span>
                    </el-menu-item>
                </el-menu>-->
                <div class="my-aside-div">
                    <el-button type="text" class="name" v-cloak>{{ owner.name }}</el-button><br>
                    <hr style="width: 100px;" align="left">
                    <div style="padding-top: 20px;padding-bottom: 20px;">
                        <span style="color: #5C6A70;">{{ owner.info }}</span>
                    </div>
                    <hr style="width: 54px;" align="left">
                    <div v-for="item in owner.menu">
                        <el-button type="text" class="myMenu">{{ item.menuName }}</el-button><br>
                    </div>
                </div>
            </el-aside>
            <el-main>
                <div v-for="item in blogs">
                    <el-card :body-style="{ padding: '0px' }">
                        <img src="../images/home-0.jpg" class="image">
                        <div style="padding: 14px;">
                            <div class="myBlogName">
                                {{ item.title }}
                            </div>
                            <div class="myBlogInfo">
                                {{ item.info }}
                            </div>
                            <div class="myBlogTag">
                                <el-tag type="info" style="margin-right: 15px" v-for="tag in item.tags">{{ tag }}</el-tag>
                            </div>
                            <el-divider></el-divider>
                            <div class="bottom clearfix">
                                <time class="time">{{ item.time }}</time>
                                <el-button type="text" class="button">阅读</el-button>
                            </div>
                        </div>
                    </el-card>
                </div>
            </el-main>
        </el-container>
    </div>
</template>

<script>
    export default {
        name: "Home",
        data(){
            return {
                /*items:[
                    {
                        id:0,
                        view:require('../images/home-0-test.jpg')
                    },
                    {
                        id:1,
                        view:require('../images/home-1-test.jpg')
                    },
                    {
                        id:2,
                        view:require('../images/home-2-test.jpg')
                    },
                    {
                        id:3,
                        view:require('../images/home-3-test.jpg')
                    },
                    {
                        id:4,
                        view:require('../images/home-4-test.jpg')
                    },
                    {
                        id:5,
                        view:require('../images/home-5-test.jpg')
                    },
                ],*/
                imgaddr:"../images/blogs-default.jpg",
                height: {
                    height: window.innerHeight + 'px'
                },
                owner:{
                    name: 'iceCream',
                    info: '每一个不曾起舞的日子，都是对生命的辜负',
                    menu: [{
                        menuName: 'H O M E',
                        menuLink: ''
                    },{
                        menuName: 'W O R K S',
                        menuLink: ''
                    },{
                        menuName: 'A B O U T',
                        menuLink: ''
                    }]
                },
                blogs: [{
                    id: 1,
                    title: '博客标题1',
                    info: '博客简介1',
                    content: '博客内容',
                    images: {
                        name: 'img-1',
                        addr: ''
                    },
                    tags: ['标签一','标签二'],
                    time: '2019-09-07T05:55:07.226Z'
                },{
                    id: 2,
                    title: '博客标题2',
                    info: '博客简介2',
                    content: '博客内容',
                    images: {
                        name: 'img-1',
                        addr: ''
                    },
                    tags: ['标签一','标签二','标签三'],
                    time: '2019-09-07T05:55:07.226Z'
                }]
            }
        },
        methods:{
            /*loginShow:function() {
                this.$router.push('/user')
            },
            registerShow:function() {
                console.log("注册")
            }*/
            /*handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }*/
        }
    }
</script>

<style>
    /*.el-header {
        background-color: #909399;
        line-height: 60px;
    }
    .row-right {
        float:right
    }
    .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 340px;
        margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }

    .bg-purple-dark {
        background: #99a9bf;
    }*/

    [v-cloak] {
        display: none;
    }
    .el-container {
        background-color: #DADFE1;
    }
    el-aside {
        /*background-color: #D3DCE6;*/
        color: #333;
        text-align: center;
        height: 100%;
        /*line-height: 200px;*/
    }
    /*.el-menu {
        height: 100%;
    }*/
    el-main {
        /*background-color: #E9EEF3;*/
        color: #333;
        text-align: center;
        height: 100%;
        /*line-height: 160px;*/
    }
    .my-aside-div {
        margin-top: 35%;
        margin-left: 30%;
        text-align: left;
    }
    .name {
        color: black;
        font-size: xx-large;
    }
    .myMenu {
        color: #5C6A70;
    }
    .time {
        font-size: 13px;
        color: #999;
    }

    .bottom {
        margin-top: 13px;
        line-height: 12px;
    }

    .button {
        padding: 0;
        float: right;
    }

    .image {
        width: 100%;
        display: block;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }

    .clearfix:after {
        clear: both
    }
    .el-card {
        margin: 70px 10% 50px 5%;
    }
    .myBlogName {
        font-size: xx-large;
        color: black;
        margin: 30px 5% 20px 5%;
    }
    .myBlogInfo {
        font-size: x-large;
        color: #666666;
        margin: 30px 5% 20px 5%;
    }

    .myBlogTag {
        margin: 50px 5% 50px 5%;
    }
</style>
