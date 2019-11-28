<template>
    <div id="blogsAdmin">
        <el-container :style="height">
            <el-aside width="30%">
                <div class="my-aside-div">
                    <el-button type="text" class="name" v-cloak>{{ owner.name }}</el-button><br>
                    <hr style="width: 100px;" align="left">
                    <div style="padding-top: 20px;padding-bottom: 20px;">
                        <span style="color: #5C6A70;">{{ owner.info }}</span>
                    </div>
                    <hr style="width: 54px;" align="left">
                    <div v-for="item in owner.menu">
                        <router-link :to="item.menuLink"><el-button :id="item.id" type="text" class="myMenu">{{ item.menuName }}</el-button></router-link><br>
                    </div>
                </div>
            </el-aside>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </div>
</template>

<script>
    import {config} from '../config'
    export default {
        name: "BlogsAdmin",
        data(){
            return {
                height: {
                    height: window.innerHeight + 'px'
                },
                owner:{
                    /*name: 'iceCream',
                    info: '每一个不曾起舞的日子，都是对生命的辜负',
                    menu: [{
                        id: 'menu1',
                        menuName: 'H O M E',
                        menuLink: '/writeBlog'
                    },{
                        id: 'menu2',
                        menuName: 'W O R K S',
                        menuLink: '/homeWorks'
                    },{
                        id: 'menu3',
                        menuName: 'A B O U T',
                        menuLink: 'homeAbout'
                    }]*/
                }
            }
        },
        beforeMount() {

            //加载博主数据
            this.$axios.get(config.baseurl + '/blogs/myInfo').then(resp => {
                this.owner = resp.data.data;
            }).catch(err => {
                console.log(err)
            })
        }
    }
</script>

<style scoped>
    [v-cloak] {
        display: none;
    }
    .el-container {
        background-color: #DADFE1;
    }
    el-aside {
        color: #333;
        text-align: center;
        height: 100%;
    }
    el-main {
        color: #333;
        text-align: center;
        height: 100%;
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
    .bottom {
        margin-top: 13px;
        line-height: 12px;
    }
    .button {
        padding: 0;
        float: right;
    }
</style>
